import React from "react";

const CaptureButton = ({ videoRef, canvasRef, imageContainerRef }) => {
    // Capture image function
    const captureImage = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        const video = videoRef.current;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);  // Draw the video on canvas

        const imgData = canvas.toDataURL("image/png");  // Get the image data from canvas

        const capturedImage = new Image();
        capturedImage.src = imgData;  // Set the source of the captured image
        capturedImage.alt = "Captured Image";  // Add alt text for better debugging
        capturedImage.width = 200;
        capturedImage.height = 150;

        // Prepend the captured image to the container
        imageContainerRef.current.prepend(capturedImage);
    };

    return (
        <div className="capture-container">
            <button className="capture" onClick={captureImage}>Start</button>

            <section id="image-container" ref={imageContainerRef}>
                {/* Display captured images here */}
            </section>

            <canvas
                ref={canvasRef}
                width="640"
                height="480"
                style={{ display: "none" }}  // Hide canvas
            ></canvas>
        </div>
    );
};

export default CaptureButton;
