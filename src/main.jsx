import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./component/home"
import "./index.css"
import Photo_Booth from "./component/photo-booth";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Photo_Booth/>
    </React.StrictMode>
);