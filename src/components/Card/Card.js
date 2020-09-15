import React, { useEffect, useRef } from "react";
import { ReactComponent as CheckMark } from "../../images/check-mark.svg";
import { gsap } from "gsap";
import $ from "jquery";

import "./Card.css";

const Card = (props) => {
    const card = useRef(null);

    useEffect(() => {
        $(card.current).hover(
            () => {
                gsap.to(card.current, {
                    transform:
                        "translate3d(0px, -20px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(-1deg, 1deg)",
                    duration: 0.4,
                });
            },
            () => {
                gsap.to(card.current, {
                    transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    duration: 0.4,
                });
            }
        );

        // gsap.fromTo(
        //     card.current,
        //     {
        //         y: "50px",
        //         opacity: 0,
        //     },
        //     {
        //         y: 0,
        //         opacity: 1,
        //         duration: 0.5,
        //         stagger: 0.2,
        //         scrollTrigger: {
        //             trigger: card.current,
        //             start: "top 50%",
        //         },
        //     }
        // );
    });

    const { src, alt, title, techs, description } = props;

    return (
        <div ref={card} className="card">
            <div className="image">
                <img src={src} alt={alt} />
            </div>
            <h2 className="title">{title}</h2>
            <h3 className="stack">Stack</h3>
            <div className="techs">
                {techs.map((tech, index) => (
                    <div key={index} className="tech">
                        <span className="check-mark">
                            <CheckMark />
                        </span>
                        <p>{tech}</p>
                    </div>
                ))}
            </div>
            <p className="description">{description}</p>
        </div>
    );
};

export default Card;
