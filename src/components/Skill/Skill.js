import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Power2 } from "gsap";

// import line from "../../images/line.svg";

import "./Skill.css";

const Skill = () => {
    const wrapper = useRef(null);
    const boxOne = useRef(null);
    const boxTwo = useRef(null);
    const boxThree = useRef(null);
    const boxFour = useRef(null);
    const boxFive = useRef(null);
    const boxSix = useRef(null);
    const boxSeven = useRef(null);

    const lineOne = useRef(null);
    const lineTwo = useRef(null);
    const lineThree = useRef(null);
    const lineFour = useRef(null);
    const lineFive = useRef(null);
    const lineSix = useRef(null);
    const lineSeven = useRef(null);
    const lineEight = useRef(null);

    const header = useRef(null);

    useEffect(() => {
        let x = window.matchMedia("(min-width: 992px)");

        if (x.matches) {
            const [line] = wrapper.current.children;
            const [path] = line.children;
            const length = path.getTotalLength();

            gsap.set(path, {
                strokeDasharray: length,
            });
            gsap.set(path, {
                strokeDashoffset: length,
            });

            const tl = gsap.timeline();

            gsap.fromTo(
                header.current,
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
                        trigger: header.current,
                        start: "30% 50%",
                    },
                }
            );
            gsap.fromTo(
                boxOne.current,
                {
                    alpha: 0,
                    transform: "translateY(50px)",
                },
                {
                    alpha: 1,
                    transform: "translateY(0)",
                    duration: 2,
                    scrollTrigger: {
                        trigger: document.querySelector(".box1"),
                        start: "top 50%",
                        end: "bottom bottom",
                        // onEnterBack: (self) => self.animation.reverse(),
                    },
                    ease: Power2.easeInOut,
                }
            );
            gsap.fromTo(
                boxTwo.current,
                {
                    alpha: 0,
                    transform: "translateY(50px)",
                },
                {
                    alpha: 1,
                    transform: "translateY(0)",
                    duration: 2,
                    scrollTrigger: {
                        trigger: document.querySelector(".box2"),
                        start: "top 50%",
                        end: "bottom bottom",
                        // onEnterBack: (self) => self.animation.reverse(),
                    },
                    ease: Power2.easeInOut,
                }
            );
            gsap.fromTo(
                boxThree.current,
                {
                    alpha: 0,
                    transform: "translateY(50px)",
                },
                {
                    alpha: 1,
                    transform: "translateY(0)",
                    duration: 2,
                    scrollTrigger: {
                        trigger: document.querySelector(".box3"),
                        start: "top 50%",
                        end: "bottom bottom",
                        // onEnterBack: (self) => self.animation.reverse(),
                    },
                    ease: Power2.easeInOut,
                }
            );
            gsap.fromTo(
                boxFour.current,
                {
                    alpha: 0,
                    transform: "translateY(50px)",
                },
                {
                    alpha: 1,
                    transform: "translateY(0)",
                    duration: 2,
                    scrollTrigger: {
                        trigger: document.querySelector(".box4"),
                        start: "top 50%",
                        end: "bottom bottom",
                        // onEnterBack: (self) => self.animation.reverse(),
                    },
                    ease: Power2.easeInOut,
                }
            );
            gsap.fromTo(
                boxFive.current,
                {
                    alpha: 0,
                    transform: "translateY(50px)",
                },
                {
                    alpha: 1,
                    transform: "translateY(0)",
                    duration: 2,
                    scrollTrigger: {
                        trigger: document.querySelector(".box5"),
                        start: "top 50%",
                        end: "bottom bottom",
                        // onEnterBack: (self) => self.animation.reverse(),
                    },
                    ease: Power2.easeInOut,
                }
            );
            gsap.fromTo(
                boxSix.current,
                {
                    alpha: 0,
                    transform: "translateY(50px)",
                },
                {
                    alpha: 1,
                    transform: "translateY(0)",
                    duration: 2,
                    scrollTrigger: {
                        trigger: document.querySelector(".box6"),
                        start: "top 50%",
                        end: "bottom bottom",
                        // onEnterBack: (self) => self.animation.reverse(),
                    },
                    ease: Power2.easeInOut,
                }
            );
            gsap.fromTo(
                boxSeven.current,
                {
                    alpha: 0,
                    transform: "translateY(50px)",
                },
                {
                    alpha: 1,
                    transform: "translateY(0)",
                    duration: 2,
                    scrollTrigger: {
                        trigger: document.querySelector(".box7"),
                        start: "top 50%",
                        end: "bottom bottom",
                        // onEnterBack: (self) => self.animation.reverse(),
                    },
                    ease: Power2.easeInOut,
                }
            );

            tl.fromTo(
                path,
                { strokeDashoffset: length },
                {
                    strokeDashoffset: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: document.querySelector(".skill"),
                        start: "15% 40%",
                        end: "bottom 40%",
                        scrub: 5,
                        // pin: true,
                    },
                }
            );
        } else {
            const [svgOne] = lineOne.current.children;
            const [pathOne] = svgOne.children;
            const lengthOne = pathOne.getTotalLength();

            const [svgTwo] = lineTwo.current.children;
            const [pathTwo] = svgTwo.children;
            const lengthTwo = pathTwo.getTotalLength();

            const [svgThree] = lineThree.current.children;
            const [pathThree] = svgThree.children;
            const lengthThree = pathThree.getTotalLength();

            const [svgFour] = lineFour.current.children;
            const [pathFour] = svgFour.children;
            const lengthFour = pathFour.getTotalLength();

            const [svgFive] = lineFive.current.children;
            const [pathFive] = svgFive.children;
            const lengthFive = pathFive.getTotalLength();

            const [svgSix] = lineSix.current.children;
            const [pathSix] = svgSix.children;
            const lengthSix = pathSix.getTotalLength();

            const [svgSeven] = lineSeven.current.children;
            const [pathSeven] = svgSeven.children;
            const lengthSeven = pathSeven.getTotalLength();

            const [svgEight] = lineEight.current.children;
            const [pathEight] = svgEight.children;
            const lengthEight = pathEight.getTotalLength();

            gsap.set(pathOne, { strokeDasharray: lengthOne });
            gsap.set(pathOne, { strokeDashoffset: lengthOne });

            gsap.set(pathTwo, { strokeDasharray: lengthTwo });
            gsap.set(pathTwo, { strokeDashoffset: lengthTwo });

            gsap.set(pathThree, { strokeDasharray: lengthThree });
            gsap.set(pathThree, { strokeDashoffset: lengthThree });

            gsap.set(pathFour, { strokeDasharray: lengthFour });
            gsap.set(pathFour, { strokeDashoffset: lengthFour });

            gsap.set(pathFive, { strokeDasharray: lengthFive });
            gsap.set(pathFive, { strokeDashoffset: lengthFive });

            gsap.set(pathSix, { strokeDasharray: lengthSix });
            gsap.set(pathSix, { strokeDashoffset: lengthSix });

            gsap.set(pathSeven, { strokeDasharray: lengthSeven });
            gsap.set(pathSeven, { strokeDashoffset: lengthSeven });

            gsap.set(pathEight, { strokeDasharray: lengthEight });
            gsap.set(pathEight, { strokeDashoffset: lengthEight });

            gsap.fromTo(
                header.current,
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
                        trigger: header.current,
                        start: "30% 50%",
                    },
                }
            );

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: document.querySelector(".boxes"),
                    start: "top 40%",
                    end: "bottom bottom",
                    scrub: 4,
                    // pin: true,
                },
            });

            tl.fromTo(
                pathOne,
                {
                    strokeDashoffset: lengthOne,
                },
                {
                    strokeDashoffset: 0,
                    duration: 1,
                }
            )
                .fromTo(
                    boxOne.current,
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        duration: 1,
                    }
                )
                .fromTo(
                    pathTwo,
                    {
                        strokeDashoffset: lengthTwo,
                    },
                    {
                        strokeDashoffset: 0,
                        duration: 2,
                    }
                )
                .fromTo(
                    boxTwo.current,
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        duration: 1,
                    }
                )
                .fromTo(
                    pathThree,
                    {
                        strokeDashoffset: lengthThree,
                    },
                    {
                        strokeDashoffset: 0,
                        duration: 2,
                    }
                )
                .fromTo(
                    boxThree.current,
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        duration: 1,
                    }
                )
                .fromTo(
                    pathFour,
                    {
                        strokeDashoffset: lengthFour,
                    },
                    {
                        strokeDashoffset: 0,
                        duration: 2,
                    }
                )
                .fromTo(
                    boxFour.current,
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        duration: 1,
                    }
                )
                .fromTo(
                    pathFive,
                    {
                        strokeDashoffset: lengthFive,
                    },
                    {
                        strokeDashoffset: 0,
                        duration: 2,
                    }
                )
                .fromTo(
                    boxFive.current,
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        duration: 1,
                    }
                )
                .fromTo(
                    pathSix,
                    {
                        strokeDashoffset: lengthSix,
                    },
                    {
                        strokeDashoffset: 0,
                        duration: 2,
                    }
                )
                .fromTo(
                    boxSix.current,
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        duration: 1,
                    }
                )
                .fromTo(
                    pathSeven,
                    {
                        strokeDashoffset: lengthSeven,
                    },
                    {
                        strokeDashoffset: 0,
                        duration: 2,
                    }
                )
                .fromTo(
                    boxSeven.current,
                    {
                        opacity: 0,
                    },
                    {
                        opacity: 1,
                        duration: 1,
                    }
                )
                .fromTo(
                    pathEight,
                    {
                        strokeDashoffset: lengthEight,
                    },
                    {
                        strokeDashoffset: 0,
                        duration: 2,
                    }
                );
        }

        // textTimeline.fromTo(
        //     boxOne.current,
        //     { opacity: 0 },
        //     {
        //         opacity: 1,
        //         duration: 2,
        //         scrollTrigger: {
        //             trigger: document.querySelector(".box1"),
        //             start: "top 60%",
        //             end: "bottom bottom",
        //             markers: true,
        //             // scrub: 1,
        //             // pin: true,
        //         },
        //         ease: Power2.easeInOut,
        //     }
        // );
    });

    return (
        <div id="skill">
            <div className="skill container">
                <h1 ref={header}>My skills</h1>
                <div className="boxes">
                    <div ref={lineOne} className="line">
                        <svg
                            width="13"
                            height="98"
                            viewBox="0 0 13 98"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.5 1C-14 50.5 32 41.5 0.5 97"
                                stroke="#707070"
                                strokeWidth="1.3"
                            />
                        </svg>
                    </div>
                    <div ref={boxOne} className="box box1">
                        <h2>Html</h2>
                        <div className="dots">
                            <div className="dot fill"></div>
                            <div className="dot fill"></div>
                            <div className="dot fill"></div>
                            <div className="dot fill"></div>
                            <div className="dot"></div>
                        </div>
                        <p>
                            The standard markup language for documents designed
                            to be displayed in a web browser
                        </p>
                    </div>
                    <div ref={lineTwo} className="line">
                        <svg
                            width="35"
                            height="220"
                            viewBox="0 0 35 220"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.9994 1C37.9997 45 -12.6006 61.8 20.9994 109C62.9994 168 -12.9994 182.5 4.0002 219"
                                stroke="#707070"
                                strokeWidth="1.2"
                            />
                        </svg>
                    </div>
                    <div ref={boxTwo} className="box box2">
                        <h2>CSS</h2>
                        <div className="dots">
                            <div className="dot fill"></div>
                            <div className="dot fill"></div>
                            <div className="dot fill"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                        <p>
                            A style sheet language used for describing the
                            presentation of a document
                        </p>
                    </div>
                    <div ref={lineThree} className="line">
                        <svg
                            width="37"
                            height="181"
                            viewBox="0 0 37 181"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M31.4997 0.5C20.1664 24.6667 3.49973 75.7 27.4997 86.5C57.4997 100 -7.00031 158.5 1.99969 180"
                                stroke="#707070"
                                strokeWidth="1.2"
                            />
                        </svg>
                    </div>
                    <div ref={boxThree} className="box box3">
                        <h2>Javascript</h2>
                        <div className="dots">
                            <div className="dot fill"></div>
                            <div className="dot fill"></div>
                            <div className="dot fill"></div>
                            <div className="dot fill"></div>
                            <div className="dot"></div>
                        </div>
                        <p>A high-level, interpreted scripting language</p>
                    </div>
                    <div ref={lineFour} className="line">
                        <svg
                            width="34"
                            height="209"
                            viewBox="0 0 34 209"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M31.4995 1C43.5 23 -12.7005 57 4.49947 91C25.9995 133.5 32.4998 140.5 14.9998 163.5C-2.50015 186.5 0.999102 190 4.49947 208.5"
                                stroke="#707070"
                                strokeWidth="1.2"
                            />
                        </svg>
                    </div>
                    <div ref={boxFour} className="box box4">
                        <h2>React</h2>
                        <div className="dots">
                            <div className="dot fill"></div>
                            <div className="dot fill"></div>
                            <div className="dot fill"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                        <p>A JavaScript library for building user interfaces</p>
                    </div>
                    <div ref={lineFive} className="line">
                        <svg
                            width="63"
                            height="207"
                            viewBox="0 0 63 207"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M43.9996 0.5C50.8329 9.16667 63.9996 32.2 61.9996 55C59.4996 83.5 -19.0004 61 5.9996 105.5C30.9996 150 48.0004 177.5 27 206.5"
                                stroke="#707070"
                                strokeWidth="1.2"
                            />
                        </svg>
                    </div>
                    <div ref={boxFive} className="box box5">
                        <h2>ExpressJS</h2>
                        <div className="dots">
                            <div className="dot fill"></div>
                            <div className="dot fill"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                        <p>
                            Fast, unopinionated, minimalist web framework for
                            Node.js
                        </p>
                    </div>
                    <div ref={lineSix} className="line">
                        <svg
                            width="42"
                            height="177"
                            viewBox="0 0 42 177"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M39.5003 1C51.5 57 -6.39973 83.7 14.0003 104.5C39.5003 130.5 -14.9996 157 5.5004 176"
                                stroke="#707070"
                                strokeWidth="1.2"
                            />
                        </svg>
                    </div>
                    <div ref={boxSix} className="box box6">
                        <h2>Firebase</h2>
                        <div className="dots">
                            <div className="dot fill"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                        <p>
                            Google's mobile platform that helps you quickly
                            develop high-quality apps
                        </p>
                    </div>
                    <div ref={lineSeven} className="line">
                        <svg
                            width="49"
                            height="195"
                            viewBox="0 0 49 195"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.5 0.5C37.6667 33.5 64.7 103.2 35.5 118C-0.999966 136.5 -4.49997 164 8.00003 194.5"
                                stroke="#707070"
                                strokeWidth="1.2"
                            />
                        </svg>
                    </div>
                    <div ref={boxSeven} className="box box7">
                        <h2>MongoDB</h2>
                        <div className="dots">
                            <div className="dot fill"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                        <p>
                            The databse for modern applications, no database
                            makes you more productive.
                        </p>
                    </div>
                    <div ref={lineEight} className="line">
                        <svg
                            width="15"
                            height="79"
                            viewBox="0 0 15 79"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14 1C3 27.5 26 40 0.5 78"
                                stroke="#707070"
                                strokeWidth="1.3"
                            />
                        </svg>
                    </div>
                    <div ref={wrapper} className="box8">
                        <svg
                            // className="line"
                            width="405"
                            height="1547"
                            viewBox="0 0 405 1547"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M182.027 1C194.527 58 -9.07321 122.1 134.527 222.5C314.027 348 456.027 337.5 386.027 432.5C316.027 527.5 -18.4732 552.5 41.5268 492.5C101.527 432.5 274.027 511.5 227.027 569C180.027 626.5 39.0268 570.5 78.5268 645C118.027 719.5 324.027 686.5 303.527 752.5C283.027 818.5 64.0268 752.5 78.5268 818.5C93.0268 884.5 285.027 866.5 268.527 959C252.027 1051.5 159.527 1002 182.027 1082.5C200.36 1137.33 252.127 1236.5 312.527 1194.5C388.027 1142 37.5268 1049 3.0268 1092C-31.4732 1135 387.027 1289 303.527 1376C220.027 1463 95.0268 1476.5 138.527 1546"
                                stroke="#707070"
                                strokeWidth="1"
                            />
                        </svg>

                        {/* 
                        <img
                            className="line"
                            src={line}
                            style={{ visibility: "hidden" }}
                            alt="line"
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
