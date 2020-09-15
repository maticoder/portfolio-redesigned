import React from "react";

import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Skill from "../../components/Skill/Skill";
import Work from "../../components/Work/Work";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <About />
            <Skill />
            <Work />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
