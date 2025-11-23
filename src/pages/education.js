import uni from "./images/gardens-theatre-qut-gardens-point.jpg";
import school from "./images/SCN260324-siena-01.jpg";
import extra from "./images/forage-schema-logo.png";
const Education = () => {
    return (
        <div class="education">
            <h1>Education</h1>
            <h2>Hover over a card...</h2>
            {/**University education */}
            <div class="educationContainer">
                <div class="educationCard">
                    <div class="inner">
                        <div class="front">
                            <img src={uni}></img>
                        </div>
                        <div class="back">
                            <h2>
                                Bachelor of Mathematics / Bachelor of IT (Dual
                                Degree)
                            </h2>
                            <h3>Queensland University of Technology</h3>
                            <a href="https://drive.google.com/file/d/1PB0zrDWFUBNLJjDCqiBNyirnK1wz1keo/view?usp=sharing">
                                <p>See certificate</p>
                            </a>
                        </div>
                    </div>
                </div>

                {/**Highschool education */}
                <div class="educationCard">
                    <div class="inner">
                        <div class="front">
                            <img src={school}></img>
                        </div>
                        <div class="back">
                            <h2>Highschool Diploma</h2>
                            <h3>Siena Catholic College</h3>
                        </div>
                    </div>
                </div>

                {/**Extracuricular education */}
                <div class="educationCard">
                    <div class="inner">
                        <div class="front">
                            <img src={extra}></img>
                        </div>
                        <div class="back">
                            <h2>Extracurricular Certifications</h2>
                            <h3>
                                Quantium Software Engineering Job Simulation on
                                Forage - April 2025
                            </h3>
                            <a href="https://drive.google.com/file/d/1QqUzC4VRYhz9utakRK-FO7-F3GbXvznv/view?usp=sharing">
                                See certificate
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Education;
