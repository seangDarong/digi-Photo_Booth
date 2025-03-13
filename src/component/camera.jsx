
import "./camera.css"
import React, { useState, useRef,useEffect } from "react";

const Camera = () => {
    const videoRef = useRef(null);

//Initialize camera when the page is loads
useEffect(() => {
    const initCamera = async () => {
        if (videoRef.current) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                videoRef.current.srcObject = stream; // set the camera stream to video component
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
    return (
        <section className="video-container">
            <video ref={videoRef} className="video" autoPlay></video>
        </section>
    )
};

export default Camera;