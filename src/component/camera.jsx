
import "./camera.css"
import React, { useState, useRef,useEffect } from "react";
import CaptureButton from "./capture-button";
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

    const captureButton = document.getElementsByClassName("capture");
    const canvas = document.getElementById("canvas");
    const imageContainer = document.getElementById("image-comtainer");
    

    function startCountDown(){
        countdown(3);
    }

    function captureImage(){
        const context = canvas.getContext("2d");
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imgData = canvas.toDataUrl("image/png");
        
    }
    return (
        <><section className="video-container">
            <video ref={videoRef} className="video" autoPlay></video>
        </section>
        </>
    )
};

export default Camera;