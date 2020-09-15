import React, { useEffect, useRef } from "react";
import Lottie from "react-lottie";
import * as animationData from "./tech.json";
import { gsap } from "gsap";

import "./About.css";

const About = () => {
    const container = useRef(null);
    const top = useRef(null);
    const bottom = useRef(null);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 992px)");

        if (mq.matches) {
            gsap.fromTo(
                top.current,
                {
                    y: "50px",
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: container.current,
                        start: "30% 50%",
                    },
                }
            );

            gsap.fromTo(
                bottom.current,
                {
                    y: "-50px",
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: container.current,
                        start: "30% 50%",
                    },
                }
            );
        } else {
            gsap.fromTo(
                top.current,
                {
                    y: "-50px",
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: top.current,
                        start: "30% 70%",
                    },
                }
            );

            gsap.fromTo(
                bottom.current,
                {
                    y: "50px",
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: bottom.current,
                        start: "30% 70%",
                    },
                }
            );
        }
    });

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid meet",
        },
    };

    return (
        <div id="about">
            <div ref={container} className="about container">
                <div ref={top} className="top">
                    <div className="content">
                        <h1>Who am I actually?</h1>
                        <p>
                            Since early 2017 beneath my main occupation as
                            frontend developer I am challenging myself by
                            improving my backend programming skills. Further
                            this portfolio is a snapshot of my current skill
                            level, concerning usability, performance and code
                            quality.
                        </p>
                        <a className="link" href="/">
                            View work
                        </a>
                        <div className="social">
                            <a href="/" className="icon">
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M29.9976 14.9989C29.9976 6.7152 23.2825 0 14.9989 0C6.7152 0 0 6.7152 0 14.9989C0 22.4853 5.48486 28.6903 12.6552 29.8155V19.3345H8.84698V14.9989H12.6552V11.6944C12.6552 7.93532 14.8945 5.85892 18.3205 5.85892C19.9615 5.85892 21.678 6.15186 21.678 6.15186V9.84299H19.7868C17.9235 9.84299 17.3424 10.9992 17.3424 12.1853V14.9989H21.5022L20.8372 19.3345H17.3424V29.8155C24.5129 28.6903 29.9976 22.4853 29.9976 14.9989Z"
                                        fill="black"
                                    />
                                </svg>
                            </a>
                            <a href="/" className="icon">
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.3 12.8562V18H23.8075C23.4638 20.2062 21.2375 24.4675 15.3 24.4675C10.1813 24.4675 6.0013 20.2312 6.0013 15C6.0013 9.76875 10.1825 5.5325 15.3 5.5325C18.2125 5.5325 20.1638 6.76875 21.2813 7.84375L25.3488 3.92125C22.7363 1.4825 19.3488 0 15.3 0C7.0063 0 0.300049 6.70625 0.300049 15C0.300049 23.2938 7.0063 30 15.3 30C23.9575 30 29.7 23.9138 29.7 15.3425C29.7 14.3575 29.5938 13.605 29.4638 12.8562H15.3V12.8562Z"
                                        fill="black"
                                    />
                                </svg>
                            </a>
                            <a href="/" className="icon">
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15 0.371277C6.7125 0.371277 0 7.08753 0 15.3713C0 22 4.2975 27.6213 10.2563 29.6025C11.0063 29.7438 11.2812 29.28 11.2812 28.8813C11.2812 28.525 11.2688 27.5813 11.2625 26.3313C7.09 27.2363 6.21 24.3188 6.21 24.3188C5.5275 22.5875 4.54125 22.125 4.54125 22.125C3.1825 21.195 4.64625 21.2138 4.64625 21.2138C6.1525 21.3188 6.94375 22.7588 6.94375 22.7588C8.28125 25.0525 10.455 24.39 11.3125 24.0063C11.4475 23.0363 11.8338 22.375 12.2625 22C8.93125 21.625 5.43 20.335 5.43 14.5875C5.43 12.95 6.01125 11.6125 6.97375 10.5625C6.805 10.1838 6.29875 8.65878 7.105 6.59253C7.105 6.59253 8.36125 6.19003 11.23 8.13003C12.43 7.79628 13.705 7.63128 14.98 7.62378C16.255 7.63128 17.53 7.79628 18.73 8.13003C21.58 6.19003 22.8362 6.59253 22.8362 6.59253C23.6425 8.65878 23.1362 10.1838 22.9862 10.5625C23.9425 11.6125 24.5238 12.95 24.5238 14.5875C24.5238 20.35 21.0175 21.6188 17.68 21.9875C18.205 22.4375 18.6925 23.3575 18.6925 24.7625C18.6925 26.77 18.6737 28.3825 18.6737 28.87C18.6737 29.2638 18.9363 29.7325 19.705 29.5825C25.7062 27.615 30 21.99 30 15.3713C30 7.08753 23.2838 0.371277 15 0.371277Z"
                                        fill="black"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div ref={bottom} className="bottom">
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

export default About;
