import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import cardOne from "../../images/card-one.svg";
import cardTwo from "../../images/card-two.svg";
import cardThree from "../../images/card-three.svg";
import cardFour from "../../images/card-four.svg";
import cardFive from "../../images/card-five.svg";
import cardSix from "../../images/card-six.svg";

import Card from "../Card/Card";

import "./Work.css";

const Work = () => {
    const container = useRef(null);
    const text = useRef(null);
    const cards = useRef(null);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 992px)");

        if (mq.matches) {
            gsap.fromTo(
                text.current,
                {
                    y: "50px",
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "easeInOut",
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 50%",
                    },
                }
            );

            gsap.fromTo(
                cards.current.children,
                {
                    y: "50px",
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 30%",
                    },
                }
            );
        } else {
            gsap.fromTo(
                text.current,
                {
                    y: "50px",
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "easeInOut",
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 50%",
                    },
                }
            );

            Array.from(cards.current.children).forEach((card) => {
                gsap.fromTo(
                    card,
                    {
                        y: "50px",
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 50%",
                        },
                    }
                );
            });
        }
    });

    return (
        <div id="work">
            <div ref={container} className="work container">
                <h1 ref={text}>My work</h1>
                <div ref={cards} className="wrapper">
                    <Card
                        src={cardOne}
                        alt="card one"
                        title="Social Media App"
                        techs={["React", "Redux", "Firebase", "Express"]}
                        description="Facebook clone, where you can sign up and add your own posts"
                    />
                    <Card
                        src={cardTwo}
                        alt="card two"
                        title="Chat Application"
                        techs={["React", "Express", "Socket.io", "MongoDB"]}
                        description="Chat application, now you can chat with your friends no matter where you are"
                    />
                    <Card
                        src={cardThree}
                        alt="card three"
                        title="Weather App"
                        techs={["React", "Axios", "Chartist.js"]}
                        description="Check current weather forecast for today and coming days"
                    />
                    <Card
                        src={cardFour}
                        alt="card four"
                        title="Voice Recognition"
                        techs={["React", "Axios", "Alan AI"]}
                        description="Conversational Voice Controlled React News Application using Alan AI"
                    />
                    <Card
                        src={cardFive}
                        alt="card five"
                        title="Todo List"
                        techs={[
                            "React",
                            "Firebase",
                            "Express",
                            "Facebook Auth",
                        ]}
                        description="Todo application with firebase functions and facebook authentication"
                    />
                    <Card
                        src={cardSix}
                        alt="card one"
                        title="Video to Gif"
                        techs={["React", "Express", "ffmpeg", "React Router"]}
                        description="Facebook clone, where you can sign up and add your own posts"
                    />
                </div>
            </div>
        </div>
    );
};

export default Work;
