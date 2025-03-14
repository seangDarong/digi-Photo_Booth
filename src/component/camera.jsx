
// import "./camera.css"
// import React, { useState, useRef,useEffect } from "react";
// import CaptureButton from "./capture-button";
// import Filter from "./filter"
// const Camera = () => {
//     const videoRef = useRef(null);
//     const canvasRef = useRef(null);
//     const [filter, setFilter] = useState("none");
//     const [capturedImage,setCapturedImage] = useState(null);

// //Initialize camera when the page is loads
// useEffect(() => {
//     const initCamera = async () => {
//         if (videoRef.current) {
//             try {
//                 const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//                 videoRef.current.srcObject = stream; // set the camera stream to video component
//             } catch (err) {
//                 console.log("Error accessing the camera: ", err);
//             }
//         }
//     };

//     initCamera();

//     // Cleanup function to stop the camera stream when the component unmounts
//     return () => {
//         if (videoRef.current && videoRef.current.srcObject) {
//             videoRef.current.srcObject.getTracks().forEach(track => track.stop());
//         }
//     };
// }, []);

//     const captureImage = () => {
//         if (videoRef.current && canvasRef.current){
//             const canvas = canvasRef.current;
//             const context = canvas.getContext("2d");

//             //set the canvas to match the size of the video
//             canvas.width = videoRef.current.videoWidth;
//             canvas.height = videoRef.current.videoHeight;

//             //draw the video frame onto canvas
//             // context.filter = filter; // apply the chosen filter to the photo
//             // context.scale(-1, 1);
//             context.translate(canvas.width, 0); // Move the canvas context to the right edge
//             context.scale(-1, 1); // Flip the context horizontally
//             context.filter = filter; // Apply the chosen filter to the canvas context
//             context.drawImage(videoRef.current,0,0,canvas.width,canvas.height);

//             //convert image into data 
//             const imgData = canvas.toDataURL("image/png");

//             setCapturedImage(imgData);

//         }
//     };
    
//     return (
//         <><section className="video-container">
//             <video ref={videoRef} className="video" autoPlay style={{ filter: filter }}></video>
//             <canvas ref={canvasRef} style={{display:"none"}}></canvas>
//             <button className="capture-button" onClick={captureImage}>Snap</button>

//         </section>

//             <Filter onFilterChange={setFilter}/>
//             {capturedImage &&(
//                 <div className="capturedImage-container">
//                     <img src={capturedImage} alt="Captured" className="captured-image"  />
//                 </div>
//             )}
//         </>
//     )
// };

// export default Camera;
import "./camera.css";
import React, { useState, useRef, useEffect } from "react";
import CaptureButton from "./capture-button";
import Filter from "./filter";

const Camera = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [filter, setFilter] = useState("none");
    const [capturedImages, setCapturedImages] = useState([]); // Store multiple images

    // Initialize camera when the page loads
    useEffect(() => {
        const initCamera = async () => {
            if (videoRef.current) {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                    videoRef.current.srcObject = stream; // Set the camera stream to the video component
                } catch (err) {
                    console.log("Error accessing the camera: ", err);
                }
            }
        };

        initCamera();

        // Cleanup function to stop the camera stream when the component unmounts
        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                videoRef.current.srcObject.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    const captureImage = () => {
        if (videoRef.current && canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");

            // Set the canvas to match the size of the video
            const videoWidth = videoRef.current.videoWidth;
            const videoHeight = videoRef.current.videoHeight;
            const resizeFactor = 0.5; // Adjust this factor for resizing the image (50% smaller in this case)
            const width = videoWidth * resizeFactor;
            const height = videoHeight * resizeFactor;

            canvas.width = width;
            canvas.height = height;

            // Draw the video frame onto the canvas with the filter applied
            context.translate(width, 0); // Move the canvas context to the right edge
            context.scale(-1, 1); // Flip the context horizontally
            context.filter = filter; // Apply the chosen filter to the canvas context
            context.drawImage(videoRef.current, 0, 0, width, height);

            // Convert image into data
            const imgData = canvas.toDataURL("image/png");

            // Update the capturedImages array (stack of images)
            setCapturedImages(prevImages => [...prevImages, imgData]);
        }
    };

    return (
        <>
            <section className="video-container">
                <video ref={videoRef} className="video" autoPlay style={{ filter: filter }}></video>
                <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
                <button className="capture-button" onClick={captureImage}>Snap</button>
            </section>

            <Filter onFilterChange={setFilter} />

            {capturedImages.length > 0 && (
                <div className="capturedImage-container">
                    {/* Display all captured images in a stack */}
                    {capturedImages.map((image, index) => (
                        <img key={index} src={image} alt={`Captured ${index + 1}`} className="captured-image" />
                    ))}
                </div>
            )}
        </>
    );
};

export default Camera;
