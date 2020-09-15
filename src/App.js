import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./App.css";

import Scrollbar from "smooth-scrollbar";

gsap.registerPlugin(ScrollTrigger);

// init Smooth Scrollbar with options
let bodyScrollBar = Scrollbar.init(document.querySelector("#my-scrollbar"), {
    damping: 0.1,
    thumbMinSize: 20,
    renderByPixels: true,
    alwaysShowTracks: false,
    continuousScrolling: true,
});

ScrollTrigger.scrollerProxy("body", {
    scrollTop(value) {
        if (arguments.length) {
            bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
    },
});

// update ScrollTrigger when scrollbar updates
bodyScrollBar.addListener(ScrollTrigger.update);

const App = () => {
    useEffect(() => {
        // Scrollbar.init(document.querySelector("#my-scrollbar"), {});
        window.scrollTo(0, 0);
    });

    return (
        <div className="app">
            <Router>
                <Navbar scroll={bodyScrollBar} />
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
