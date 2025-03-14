import React,{useState} from "react";
import "./filter.css"

const Filter = ({onFilterChange}) => {
    const [selectedFilter,setSelectedFilter] = useState("none");
    const filters = [
        {
            name:"None",value : "none"
        },
        {
            name:"Grayscale",value:"grayscale(100%)"
        },
        {
            name:"Sepia",value:"sepia(100%)"
        },
        {
            name:"film",value:"sepia(60%) contrast(120%) saturate(90%) brightness(80%) hue-rotate(15deg)"
        },
        {
            name: "DigiCam", value: "contrast(160%) saturate(150%) brightness(100%) blur(1px)"
        },
        {
            name: "Cyber Glow", value: "brightness(120%) contrast(150%) saturate(200%) "
        },
        {
            name: "Glitch", value: "contrast(1.2) brightness(1.1) saturate(1.3) hue-rotate(15deg)"
        },
        {
            name: "Neon", value: "contrast(200%) saturate(250%) brightness(130%) hue-rotate(180deg)"
        },
        {
            name: "Vintage", value: "sepia(80%) contrast(90%) brightness(110%)"
        },
        {
            name: "Cool Blue", value: "hue-rotate(200deg) contrast(120%) brightness(110%)"
        },
        {
            name: "Indie Film", 
            value: "contrast(80%) saturate(110%) brightness(90%) sepia(60%) hue-rotate(10deg) blur(1px)"
        },
        {
            name: "Muted Vintage", 
            value: "contrast(70%) saturate(90%) brightness(85%) sepia(70%) blur(1px)"
        },
        {
            name: "Sunlit Dream", 
            value: "contrast(95%) saturate(130%) brightness(105%) sepia(25%) hue-rotate(25deg) blur(0px)"
        },
        {
            name: "Tech Noir", 
            value: "contrast(180%) saturate(120%) brightness(90%) grayscale(50%) sepia(10%)"
        },
                
        
        

        
        
        
    ];

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
        onFilterChange(filter);
    }

    return (
        <div className="filter-container">
            <h3>Select Filter Here</h3>
            {filters.map((filter) =>
            <button
            key={filter.value}
            onClick={()=> handleFilterChange(filter.value)}
            style={{
                margin: "5px",
                padding: "10px",
                border: selectedFilter === filter.value ? "2px solid blue" : "1px solid gray",
                background: "#fff",
                cursor: "pointer",
            }}>
                {filter.name}
            </button>
            )}
        </div>
    )

};

export default Filter;