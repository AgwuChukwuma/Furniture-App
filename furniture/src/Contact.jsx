import React from "react";

function Contacts(){
    return(
        <section className="contact" id="contact">
            <div className="content-text">
                <h2>Get In <span>Touch</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque libero ex unde quis magni iste, voluptas illum doloribus tempore.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate ipsum tempore voluptate aliquid eum odit dignissimos? Aliquam repellendus .</p>
                <div className="list">
                    <li><a href="#">+2348061901901</a></li>
                    <li><a href="#">furniture@gmail.com</a></li>
                    <li><a href="#">Nigerian Top Furnitures</a></li>
                </div>
            </div>

            <div className="contact-form">
                <form action="#">
                    <input type="name" placeholder="Name" required/>
                    <input type="number" placeholder="Phone" required/>
                    <input type="email" placeholder="Email" required/>
                    <textarea name="" id="" color="35" rows="10" placeholder="Message"></textarea>
                    <input type="submit" value="Send" className="submit" required/>
                </form>
            </div>
        </section>
    );
}

export default Contacts;