import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// import { gsap } from "gsap";

import logo from "../../images/logo.svg";

import "./Navbar.css";

const Navbar = (props) => {
    const nav = useRef(null);

    const mq = window.matchMedia("(min-width: 992px)");

    const [active, setActive] = useState(false);

    useEffect(() => {
        if (active === true) {
            document.querySelector("body").classList.add("active");
        } else {
            document.querySelector("body").classList.remove("active");
        }

        // gsap.fromTo(
        //     nav.current,
        //     {
        //         y: "-50px",
        //         opacity: 0,
        //     },
        //     {
        //         y: 0,
        //         opacity: 1,
        //         duration: 0.5,
        //         ease: "easeInOut",
        //     }
        // );
    }, [active]);

    const scrollTo = (element) => {
        if (mq.matches) {
            setActive(false);
            props.scroll.scrollIntoView(document.querySelector(element));
        } else {
            setActive(false);
            setTimeout(() => {
                props.scroll.scrollIntoView(document.querySelector(element));
            }, 1000);
        }
    };

    return (
        <header ref={nav}>
            <nav id="nav">
                <div className="nav container">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                            <h1>Portfolio</h1>
                        </Link>
                    </div>
                    <div
                        className={`hamburger ${active ? "active" : ""}`}
                        onClick={() => setActive(!active)}
                    >
                        <div className="hamburger-box">
                            <div className="hamburger-inner"></div>
                        </div>
                    </div>
                    <div className={`navigation ${active ? "active" : ""}`}>
                        <ul className="nav-links">
                            <li className="nav-link">
                                <a
                                    href="/"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollTo("#hero");
                                        // setActive(false);
                                        // props.scroll.scrollIntoView(
                                        //     document.querySelector("#hero")
                                        // );
                                    }}
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-link">
                                <a
                                    href="/"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollTo("#about");
                                        // setActive(false);
                                        // props.scroll.scrollIntoView(
                                        //     document.querySelector("#about")
                                        // );
                                    }}
                                >
                                    About
                                </a>
                            </li>
                            <li className="nav-link">
                                <a
                                    href="/"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollTo("#skill");
                                        // setActive(false);
                                        // props.scroll.scrollIntoView(
                                        //     document.querySelector("#skill")
                                        // );
                                    }}
                                >
                                    Skills
                                </a>
                            </li>
                            <li className="nav-link">
                                <a
                                    href="/"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollTo("#work");
                                        // setActive(false);
                                        // props.scroll.scrollIntoView(
                                        //     document.querySelector("#work")
                                        // );
                                    }}
                                >
                                    Projects
                                </a>
                            </li>
                            <li className="nav-link additional">
                                <a
                                    href="/"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollTo("#contact");
                                        // setActive(false);
                                        // props.scroll.scrollIntoView(
                                        //     document.querySelector("#contact")
                                        // );
                                    }}
                                    // smooth={true}
                                >
                                    Contact
                                </a>
                            </li>
                            <li className="nav-link additional">
                                <Link to="/email">Send email</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-element">
                        <ul className="nav-links">
                            <li className="nav-link">
                                <a
                                    href="/"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollTo("#contact");
                                        // setActive(false);
                                        // props.scroll.scrollIntoView(
                                        //     document.querySelector("#contact")
                                        // );
                                    }}
                                >
                                    Contact
                                </a>
                            </li>
                            <div className="divider"></div>
                            <li className="nav-link">
                                <Link to="/email">Send email</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
