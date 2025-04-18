import React from "react";

function Gallary(){
    return(
        <div className="gallary">
            <h3>Our Gallary</h3>
            <div className="gallary-img">
                <div className="img1">
                    <img src="./src/images/g1.png" alt="" />
                </div>
                <div className="img1">
                    <img src="./src/images/g2.png" alt="" />
                    <img src="./src/images/g3.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Gallary;