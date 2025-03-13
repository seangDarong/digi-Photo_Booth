import React from "react";
import "./photo-booth.css"
import Camera from "./camera"
import Frame from "./frame";
const  Photo_Booth = () => {
    return (
        <><div className="camera">
            <Camera />
        </div>
        <div>
            <Frame />
        </div></>
    )
};

export default Photo_Booth;