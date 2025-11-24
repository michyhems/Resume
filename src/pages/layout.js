import { Outlet, Link, useLocation } from "react-router-dom";
import "./styling.css";
import { useState, useEffect } from "react";

const Layout = () => {
    const mql = window.matchMedia("(width <= 500px)");
    const [focus, setFocus] = useState("home");
    const location = useLocation();
    
    useEffect(() => {
        const path = location.pathname.split("/");
        if (path[path.length - 1] === "education") setFocus("education");
        else if (path[path.length - 1] === "experience") setFocus("experience");
        else if (path[path.length - 1] === "projects") setFocus("projects");
        else setFocus("home");
        
    }, []);

    useEffect(() => {
        if (document.getElementById(focus).classList.contains("selected"))
            return;
        const links = document.getElementsByClassName("links");
        Array.prototype.forEach.call(links, (element) => {
            if (element.id === focus) {
                element.classList.toggle("selected");
            } else if (element.classList.contains("selected")) {
                element.classList.toggle("selected");
            }
        });
    }, [focus]);

    function toggleSidebar() {
        const navButton = document.getElementById("navButton");
        const sidenav = document.getElementById("sidenav");
        sidenav.classList.toggle("close");
        navButton.classList.toggle("rotate");
    }
    //Navbar Content
    let list = (
        <ul>
            {/* Intro page */}
            <li class="logo">
                {/* Alternating the classes and thus the applied css with the state variable in a turnary statement.*/}
                <a class="signiture">
                    <span>Hemble Michael</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                        onClick={() => toggleSidebar()}
                        id="navButton"
                        class="navButton"
                    >
                        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                    </svg>
                </a>
            </li>
            <li id="home" class="links" onClick={() => setFocus("home")}>
                <Link to="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                    >
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                    </svg>
                    <span>Home</span>
                </Link>
            </li>

            {/* Education page */}
            <li
                id="education"
                class="links"
                onClick={() => setFocus("education")}
            >
                <Link to="/education">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                    >
                        <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640h-80v280l-100-60-100 60v-280H240v640Zm0 0v-640 640Zm200-360 100-60 100 60-100-60-100 60Z" />
                    </svg>
                    <span>Education</span>
                </Link>
            </li>

            {/* Experience page */}
            <li
                id="experience"
                class="links"
                onClick={() => setFocus("experience")}
            >
                <Link to="/experience">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                    >
                        <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
                    </svg>
                    <span>Experience</span>
                </Link>
            </li>

            {/* Projects page */}
            <li
                id="projects"
                class="links"
                onClick={() => setFocus("projects")}
            >
                <Link to="/projects">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                    >
                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z" />
                    </svg>
                    <span>Projects</span>
                </Link>
            </li>
        </ul>
    );

    return (
        <>
            <div class="body">
                <nav id="sidenav" class={mql ? "sidenav close" : "sidenav"}>
                    {list}
                </nav>
                <main>
                    <Outlet></Outlet>
                </main>
            </div>
        </>
    );
};

export default Layout;
