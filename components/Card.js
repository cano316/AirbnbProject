import React from "react";

export default function Card(props){
    console.log(props)
    return (
        <div className="card">
            <div className="image-container">
            <img src={props.imageUrl} className="card--image" />
            </div>
            <div className="card--information">
                <div className="location-details">
                    <svg className="location-pin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>    
                    </svg>
                    <h3 className="location-name">{props.location}</h3>
                    <a className="google-maps-text">View on Google Maps</a>
                </div>
                <h2 className="title">{props.title}</h2>
                <div className="dates">
                    <h4>12, Jan. 2021 - 24, Jan. 2021</h4>
                </div>
                <div className="description">
                    <p>{props.description}</p>
                </div>
            </div>
            
        </div>
    )
}