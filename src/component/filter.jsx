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
        }
        
        
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