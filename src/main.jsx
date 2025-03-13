import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import Photo_Booth from "./component/photo-booth";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/photo-booth" element={<Photo_Booth />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
