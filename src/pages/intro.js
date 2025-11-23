import "./styling.css";
const Introduction = () => {
    //Content for skill marquee.
    let skills = [
        "C#",
        "JavaScript",
        "React",
        "Node.js",
        "HTML",
        "CSS",
        "Python",
        "SQL",
        "Blender",
        "OOP",
        "PBP",
        "Problem Solving",
        "Agile",
        "Stakeholder Management",
        "Quick Learner",
        "Analytical Thinking",
        "Problem Solving",
        "Bilingual",
        "CPR and First Aid Training",
    ];

    //Determine if the user prefers reduced motion: turn marquee off if that is the case.
    const motionPreference = !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    //Doubles the content of the marquee to create a clean infinite scroll.
    if (motionPreference) {
        const duplicate = skills.slice();
        skills = [...skills, ...duplicate];
    }

    //marquee component
    const skillsElement = (direction) => (
        <>
            <div
                class="wrapper"
                data-animated={motionPreference}
                data-direction={direction}
            >
                <ul class="skillElement">
                    {skills.map((skill) => (
                        <li class="skill">{skill}</li>
                    ))}
                </ul>
            </div>
        </>
    );

    return (
        <>
            <div class="container" id="intro">
                <div class="profileContainer">
                    <div class="introContent">
                        {/**Card header */}
                        <div class="cardHeader">
                            <h2>Hemble Michael</h2>
                            <p>Sunshine Coast | michyhems@gmail.com</p>
                        </div>

                        {/**Introduction paragraph */}
                        <p class="introPara">
                            I’m an Australian citizen with a Bachelor’s degree
                            in Information Technologies and Mathematics. I love
                            problem solving and building web applications with
                            React and Node.js. I am familiar with a large body
                            of programming languages and am capable of adapting
                            to any and all situations with a clear and calm
                            disposition.
                        </p>

                        {/**Skills marquee displayed */}
                        <div class="skills">
                            <h3>Skills</h3>
                            {skillsElement("left")}
                            {skillsElement("right")}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Introduction;
