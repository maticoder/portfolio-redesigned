import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { gsap } from "gsap";

import logo from "../../images/logo-footer.svg";

// import { ReactComponent as Logo } from "../../images/logo.svg";

// import { ReactComponent as FacebookIcon } from "../../images/icons/facebook.svg";
// import { ReactComponent as GoogleIcon } from "../../images/icons/google.svg";
// import { ReactComponent as GithubIcon } from "../../images/icons/github.svg";
// import { ReactComponent as LinkedinIcon } from "../../images/icons/linkedin.svg";

import google from "../../images/footer-icons/google.svg";
import facebook from "../../images/footer-icons/facebook.svg";
import github from "../../images/footer-icons/github.svg";
import linkedin from "../../images/footer-icons/linkedin.svg";

import "./Footer.css";

const Footer = () => {
    const footer = useRef(null);
    const footerTop = useRef(null);
    const footerBottom = useRef(null);
    const footerLeft = useRef(null);
    const footerRight = useRef(null);
    const line = useRef(null);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 992px)");

        let tl;

        if (mq.matches) {
            tl = gsap.timeline({
                scrollTrigger: {
                    trigger: footer.current,
                    start: "top 70%",
                    end: "bottom, bottom",
                },
            });
        } else {
            tl = gsap.timeline({
                scrollTrigger: {
                    trigger: footer.current,
                    start: "10% 50%",
                    end: "bottom, bottom",
                },
            });
        }

        tl.fromTo(
            footer.current,
            {
                y: "50px",
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
            }
        )
            .fromTo(
                footerLeft.current.children,
                {
                    y: "50px",
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                }
            )
            .fromTo(
                footerRight.current.children,
                {
                    y: "50px",
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 0.5,
                }
            )
            .fromTo(
                line.current,
                {
                    y: "50px",
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                }
            )
            .fromTo(
                footerBottom.current.children,
                {
                    y: "50px",
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.4,
                    duration: 0.5,
                }
            );

        // gsap.fromTo(
        //     footer.current,
        //     {
        //         y: "50px",
        //         opacity: 0,
        //     },
        //     {
        //         y: 0,
        //         opacity: 1,
        //         duration: 0.5,
        //         scrollTrigger: {
        //             trigger: footer.current,
        //             start: "top 70%",
        //             end: "bottom, bottom",
        //             markers: true,
        //         },
        //     }
        // );
    });

    return (
        <footer ref={footer} id="footer">
            <div className="footer container">
                <div ref={footerTop} className="top">
                    <div ref={footerLeft} className="left">
                        <Link to="/" className="logo">
                            <img src={logo} alt="logo" />
                            <p>Portfolio</p>
                        </Link>
                    </div>
                    <div ref={footerRight} className="right">
                        <div className="column">
                            <div className="column-content">
                                <p>Language</p>
                                <ul>
                                    <li>
                                        <a href="/">English</a>
                                    </li>
                                    <li>
                                        <a href="/">Polish</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="column">
                            <div className="column-content">
                                <p>Navigation</p>
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/">About</a>
                                    </li>
                                    <li>
                                        <a href="/">Skills</a>
                                    </li>
                                    <li>
                                        <a href="/">Projects</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="column">
                            <div className="column-content">
                                <p>Contact Me</p>
                                <ul>
                                    <li>24/7 Available</li>
                                    <li>mati.kotyla@gmail.com</li>
                                    <li>+48 720 806 703</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={line} className="line"></div>
                <div ref={footerBottom} className="bottom">
                    <p>© 2020 Made by Mati. All rights reserved</p>
                    <div className="social">
                        <a href="/" className="icon">
                            <img src={google} alt="google" />
                        </a>
                        <a href="/" className="icon">
                            <img src={facebook} alt="facebook" />
                        </a>
                        <a href="/" className="icon">
                            <img src={github} alt="github" />
                        </a>
                        <a href="/" className="icon">
                            <img src={linkedin} alt="linkedin" />
                        </a>
                    </div>
                </div>

                {/* <div className="top">
                    <div className="left">
                        <Link to="/">
                            <div className="logo">
                                <Logo />
                                <h1>Portfolio</h1>
                            </div>
                        </Link>
                        <p>Just something about me</p>
                    </div>
                    <div className="right">
                        <div className="column">
                            <div className="column-content">
                                <p>Navigation</p>
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/">About</a>
                                    </li>
                                    <li>
                                        <a href="/">Skills</a>
                                    </li>
                                    <li>
                                        <a href="/">Projects</a>
                                    </li>
                                    <li>
                                        <a href="/">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="bottom">
                    <p>© 2020 Made by Mati. All rights reserved</p>
                    <div className="social">
                        <a href="/" className="icon">
                            <FacebookIcon />
                        </a>
                        <a href="/" className="icon">
                            <GoogleIcon />
                        </a>
                        <a href="/" className="icon">
                            <GithubIcon />
                        </a>
                        <a href="/" className="icon">
                            <LinkedinIcon />
                        </a>
                    </div>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;
