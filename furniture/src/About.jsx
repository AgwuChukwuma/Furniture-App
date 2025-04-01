import React from "react";

function About(){
    return(
        <section className="about" id="about">
            <div className="about-img">
                <img src="./images/about-img.png" alt="about" />
            </div>
            <div className="about-text">
                <h3>Furniture service About us</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <button id="about-btn">Read More...</button>
            </div>
        </section>
    );
}
export default About;