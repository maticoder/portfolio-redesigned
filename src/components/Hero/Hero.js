import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import * as animationData from "./blogging.json";
import { gsap } from "gsap";

// import TypedText from "../TypedText/TypedText";

import "./Hero.css";

const Hero = () => {
    const text = useRef(null);
    const image = useRef(null);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid meet",
        },
    };

    useEffect(() => {
        const timeline = gsap.timeline();

        timeline
            .addLabel("myLabel", "+=0")
            .fromTo(
                text.current,
                {
                    y: "-50px",
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.5,
                }
            )
            .fromTo(
                image.current,
                {
                    y: "50px",
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.5,
                },
                "myLabel"
            );
    });

    return (
        <div id="hero">
            <div className="hero container">
                <div ref={text} className="top">
                    <div className="content">
                        {/* <p>Where love and passion becomes work</p> */}
                        <h1>Matthew The Developer</h1>
                        {/* <TypedText
                            period={3000}
                            rotate='["Developer", "Designer", "Creator"]'
                            text="Matthew The"
                            className="txt-rotate"
                        /> */}
                        <p>
                            Young and ready to work computer science student
                            from Poland. Don’t waste your time and find out
                            something about me, my experience, skills and
                            projects.
                        </p>
                        <Link to="/check">Check more</Link>
                    </div>
                </div>
                <div ref={image} className="bottom">
                    <div className="img-container">
                        <Lottie
                            options={defaultOptions}
                            isClickToPauseDisabled={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
