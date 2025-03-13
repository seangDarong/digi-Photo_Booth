import React from "react";
import {FaCamera} from "react-icons/fa"
import "./home.css"
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="home-container">
            <div className="home-box">
            <h1>WELCOME TO</h1>
            <h2>DIGITAL PHOTO BOOTH</h2>
            <button className="start-button"> START <FaCamera /> </button>
            </div>
        </div>
    )
};

export default Home;