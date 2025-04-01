import React from "react";
import Header from "./Header";
import Home from "./Home";
import Offers from "./Offers";
import About from "./About";
import Products from "./Products";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Contacts from "./Contact";
import Reviews from "./Review";
import Footer from "./Footer";


function App(){
  return(
    <div>
      <Header/>
      <Home />
      <Offers />
      <About />
      <Products />
      <Banner />
      <Products />
      <Gallery />
      <Contacts />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;