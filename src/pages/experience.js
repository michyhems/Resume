import hospital from "./images/hospital.jpg";
import slicer from "./images/300px-3DSlicerLogo-app-icon512.svg.png";
import blender from "./images/Blender_logo_no_text.svg.png";
import { useRef, useEffect, useState } from "react";
import "./styling.css";

const Experience = () => {
    /**
     * The following useRef and useState variables
     * are used to determine wheather or not an element
     * is visible within the viewport so that it's animation can
     * begin.
     */

    const titleRef = useRef(null);
    const [focus, setFocus] = useState(false);
    const callback = (entries) => {
        const [entry] = entries;
        setFocus(entry.isIntersecting);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callback, { threshold: 0.5 });
        if (titleRef.current) observer.observe(titleRef.current);
        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
            setFocus(false);
        };
    }, [titleRef]);

    return (
        <>
            <div class="container" id="experienceContainer">
                <section class="start">
                    {/**The class only changes when the element enters the screen which is what triggers the animation */}

                    <h1 ref={titleRef} class={focus ? "titleInView" : "title"}>
                        <span class="h1">Experience/</span>
                        <span class="h1">Education continued</span>
                    </h1>
                </section>
                <section class="capstone">
                    <div class="arch">
                        <div class="underArch">
                            <div class="capstoneText">
                                <h1 class="capTitle">Capstone</h1>
                                <div class="def">
                                    <p class="defenition">
                                        "Someone's greatest achievement or the
                                        greatest part of something."
                                    </p>
                                    <hr></hr>
                                    <p class="defRef">Cambridge Dictionary</p>
                                </div>
                                <p class="capExplanation">
                                    QUT provides it's students with hands-on
                                    learning by linking teams of final year
                                    students with real life clients. We're
                                    tasked with developing a solution with
                                    consistent feedback from our clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="capDescription">
                    <div>
                        <h1>IT Capstone | Developer</h1>
                        <h3>
                            Brisbane, Australia | February 2023 - November 2023
                            | Grade Received : High Distinction
                        </h3>
                    </div>
                    <div class="hospital">
                        <img src={hospital}></img>
                        <div>
                            The clients that the University chose for my team
                            and I were Dr Peek and Dr Lynham from the Royal
                            Brisbane and Women's Hospital. They had a novel
                            pitch for a project. While most of our peers were
                            building websites or apps, they wanted us to
                            generate anatomically accurate 3D models of human
                            teeth, jaws and gums in order to animate a wisdom
                            tooth surgery so that it can be used as an
                            educational prop for aspiring dental surgeons.
                        </div>
                    </div>
                </section>
                <section class="experienceCardSection">
                    <div class="experienceWrapper">
                        <div class="cardContainer">
                            <div class="card">
                                <div class="cardDescription">
                                    <p>
                                        No one on my team had experience in 3D
                                        modeling, let alone animation and we
                                        were certainly out of our depth when it
                                        came to the necessary medical knowledge.
                                    </p>
                                    <p>
                                        Thankfully there was a plethora of
                                        online content for blender animation
                                        that could bridge that gap.
                                    </p>
                                </div>

                                <img src={blender}></img>
                            </div>
                        </div>
                        <div class="cardContainer">
                            <div class="card">
                                <div class="cardDescription">
                                    <p>
                                        I personally spent hours{" "}
                                        <span class="mask">masking</span> CT
                                        scans of teeth to produce a 3D model
                                        that was as anatomically accurate as
                                        possible.
                                    </p>
                                    <p>
                                        It was our client that directed us to 3D
                                        slicer, an imaging tool that's often
                                        used by medical profesionals to generate
                                        3D models for various purposes.
                                    </p>
                                </div>

                                <img src={slicer}></img>
                            </div>
                        </div>
                        <div class="cardContainer">
                            <div class="card">
                                <p>
                                    The technical skills of 3D modeling and
                                    animation may not be universal. However, my
                                    ability to adapt and learn to any given
                                    situation as well as my dedication to the
                                    task and to the members of my team are
                                    qualities and skills that are applicable
                                    anywhere in the world.
                                </p>
                                <iframe
                                    width="380"
                                    height="275"
                                    src="https://www.youtube.com/embed/fgLgKa1RRfw"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Experience;
