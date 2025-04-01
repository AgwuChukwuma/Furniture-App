import React from "react";

function Reviews(){
    return(
        <section className="review">
            <div className="main-text">
                <h3>Customers <span>Review</span></h3>
            </div>

            <div className="review-content">
                <div className="box">
                    <div className="img">
                        <img src="./images/p1.png" alt="" />
                    </div>
                    <h3>Elon Musk</h3>
                    <div className="star">
                        <i className="fa-solid fa-star checked"></i>
                        <i className="fa-solid fa-star checked"></i>
                        <i className="fa-solid fa-star checked"></i>
                        <i className="fa-solid fa-star checked"></i>
                        <i className="fa-solid fa-star checked"></i>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque temporibus nemo, fugit porro nisi, eveniet laborum quibusdam doloribus id odio.</p>
                </div>
            </div>
        </section>
    );
}

export default Reviews;