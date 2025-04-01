import React from "react";


function Header(){


    return(
        <div className="header">
            <nav>
                <input type="checkbox" id="show-search"/>
                <input type="checkbox" id="show-menu" />
                <label htmlFor="show-menu" className="menu-icon">
                    <i className="fas fa-bars"></i>
                </label>
                <div className="content">
                    <div className="logo">
                        <a href="index.html">
                            <img src="./images/logo.png" alt="logo" />
                        </a>
                    </div>

                    <ul className="links">
                        <li><a href="#" id="first">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                    </ul>
                </div>
                <label htmlFor="show-search" className="search-icon">
                    <i className="fas fa-search"></i>
                </label>
                    <form action="#" className="searcch-box">
                        <input type="text" placeholder="Search" required/>
                        <button type="submit" className="go-icon">
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </button>
                    </form>
            </nav>
        </div>
    );
}
export default Header;