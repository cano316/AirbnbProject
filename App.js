import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card"
import data from "./data"

export default function App(){
    const cards = data.map(item => {
        return (
            <Card 
            {...item}
            />
        )
    });
    return (
        <div className="container">
            <Navbar />
            {cards}
         </div>
    )
}