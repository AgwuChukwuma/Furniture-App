import React from "react";

function Gallery(){
    return(
        <div className="gallery">
            <h3>Our Gallery</h3>
            <div className="gallery-img">
                <div className="img1">
                    <img src="./images/g1.png" alt="" />
                </div>
                <div className="img1">
                    <img src="./images/g2.png" alt="" />
                    <img src="./images/g3.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Gallery;