import React from "react";

function Banner(){
    return(
        <>
        <div className="banner">
            <div className="banner-content">
                <h5>Get Discount Up To 50%</h5>
                <h3>Best Deal For The Week</h3>
                <p>Get up to 50% off this week and offer <br />Don't miss</p>
                <button><a href="#products">Order</a></button>
            </div>
        </div>
        <section className="product" id="products" >
        <div className="main-txt">
            <h3>50% off products</h3>
        </div>
        <div className="class-content">
            <div class="row">
                <img src="./src/images/p9.png" alt="" />
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <img src="./src/images/p10.png" alt="" />
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <img src="./src/images/p11.png" alt="" />
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <img src="./src/images/p12.png" alt="" />
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <h5>Price $999</h5>
                    <button>Order Now</button>
                </div>
            </div>
        </div>
            </section>
        
        </>
    );
}

export default Banner;