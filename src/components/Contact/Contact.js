import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./Contact.css";

const Contact = () => {
    const container = useRef(null);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 992px)");

        if (mq.matches) {
            gsap.fromTo(
                container.current.children,
                {
                    y: "50px",
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: container.current,
                        start: "30% 50%",
                    },
                }
            );
        } else {
            Array.from(container.current.children).forEach((children) => {
                gsap.fromTo(
                    children,
                    {
                        y: "50px",
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        scrollTrigger: {
                            trigger: children,
                            start: "30% 70%",
                        },
                    }
                );
            });
        }
    });

    return (
        <div id="contact">
            <div ref={container} className="contact container">
                <h1>Contact</h1>
                <p>
                    So what are you waiting for, give me a chance and contact
                    me. If you have any additional questions send me an email. I
                    learn very fast and I’m so excited to find my first
                    opportunity to start developer job
                </p>
                <a href="/">Send email</a>
            </div>
        </div>
    );
};

export default Contact;
