import React from "react";

function Offers(){
    return(
        <section className="offers">
            <div className="offer-content">
                <div className="row">
                    <i className="fa-solid fa-truck-fast"></i>
                    <h3>Free Delivery</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="row">
                <i className="fa-solid fa-headset"></i>
                <h3>Support 24/7</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="row">
                    <i className="fa-solid fa-rotate-left"></i>
                    <h3>30 Day Return</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </section>
    );
}
export default Offers;