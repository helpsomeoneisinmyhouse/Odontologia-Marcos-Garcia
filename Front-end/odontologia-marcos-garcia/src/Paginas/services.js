// Filename - pages/Services.js

import React from "react";
import placeholder1 from "../assets/placeholder 1.jpg"
import placeholder2 from "../assets/placeholder 2.jpg"
import placeholder3 from "../assets/placeholder 3.jpg"

const Services = () => {
    return (
        <div>
            <h1>
                Nuestros servicios
            </h1>
            <div class="indisplayers">
                <div class="first-service d-block">
                    <img src={placeholder1} alt='something' width="300px"/>
                    <h3>primer servicios</h3>
                    <p>Nostrud fugiat nulla aliquip in proident sit amet proident tempor nisi labore ex labore qui. Aliquip eiusmod mollit veniam consectetur irure ex aliqua sint occaecat laborum culpa laboris ad. Tempor cillum veniam eu mollit amet ad.</p>
                </div>
                    <div class="first-service">
                    <img src={placeholder2} alt='something' width="300px"/>
                    <h3>primer servicios</h3>
                    <p>Nostrud fugiat nulla aliquip in proident sit amet proident tempor nisi labore ex labore qui. Aliquip eiusmod mollit veniam consectetur irure ex aliqua sint occaecat laborum culpa laboris ad. Tempor cillum veniam eu mollit amet ad.</p>
                </div>
                    <div class="first-service"> 
                    <img src={placeholder3} alt='something' width="300px"/>
                    <h3>primer servicios</h3>
                    <p>Nostrud fugiat nulla aliquip in proident sit amet proident tempor nisi labore ex labore qui. Aliquip eiusmod mollit veniam consectetur irure ex aliqua sint occaecat laborum culpa laboris ad. Tempor cillum veniam eu mollit amet ad.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;