import React from "react";

function Products(){
    return(
        <section className="product">
            <div className="main-text">
                <h3>Products</h3>
            </div>
            <div className="class-content">
                <div className="row">
                    <img src="./images/p1.png" alt="" />
                    <div className="card-body">
                        <h3>Chair</h3>
                        <p>Lorem ipsum, dolor sit amet</p>
                        <h5>Price $999</h5>
                        <button>Order Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products;