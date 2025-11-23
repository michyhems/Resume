import { useState, useEffect } from "react";
import axios from "./../api/axios";

const Projects = () => {
    const [projectList, setProjectList] = useState([]);

    //query backend and set project list.
    useEffect(() => {
        let newProject = [];
        let projectData;
        const controller = new AbortController();
        const getProjects = async () => {
            try {
                const response = await axios.get(`/api`, {
                    signal: controller.signal,
                });
                projectData = response.data;
                projectData.map((data) => {
                    newProject.push(data);
                });
                setProjectList(newProject);
            } catch (err) {
                console.error(err);
            }
        };
        getProjects();
        return () => {
            controller.abort();
        };
    }, []);

    return (
        <>
            <section>
                {/**Looping over each data entry and generating a list item from it. */}
                <ul class="projectList">
                    {projectList?.length ? (
                        projectList.map((proj) => (
                            //list item container
                            <li class="listItem">
                                {/**Project thumbnail */}
                                <img
                                    class="thumbnail"
                                    src={proj.imageSource}
                                    alt="None"
                                ></img>

                                {/**Project description and links */}
                                <div class="content">
                                    <h2>{proj.title}</h2>
                                    <p class="projectDescription">
                                        {proj.description}
                                    </p>

                                    {/**Project Links */}
                                    <a href={proj.source} target="_blank">
                                        <p class="seeMore">
                                            Click here to view project.
                                        </p>
                                    </a>

                                    {/**Not all projects have a GitHub repository and so a turnary statement is used to display the link
                                     * only if it exists.
                                     */}
                                    {proj.gitRepo !== "" ? (
                                        <a href={proj.gitRepo} target="_blank">
                                            <p>
                                                Click here to see source code in
                                                GitHub.
                                            </p>
                                        </a>
                                    ) : null}
                                </div>
                            </li>
                        ))
                    ) : (
                        //unfortunately render.com's free tier can have a long loading time when there is a period of inactivity so a loading banner is necessary
                        <section class="waitMessage">
                            <h3>
                                Please wait as we fetch your projects, this
                                could take a minute :{")"}
                            </h3>
                            {/**Loading dots */}
                            <div class="loading">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </section>
                    )}
                </ul>

                {/**Image reference */}
                {projectList?.length ? (
                    <p>
                        Profile image by{" "}
                        <a
                            style={{ color: "blue" }}
                            href="https://www.flaticon.com/authors/md-tanvirul-haque"
                            target="_blank"
                        >
                            Md Tanvirul Haque
                        </a>
                    </p>
                ) : null}
            </section>
        </>
    );
};
export default Projects;
