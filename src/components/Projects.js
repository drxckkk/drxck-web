import React from "react";
import "./Projects.css";

function Projects() {
    return (
        <section id="projects" class="projects-container">
            <h2>Recent Projects</h2>
            <p class="project-description"> Showcase of my favorite projects.</p>
            <div class="project-container">
                <div class="project" id="project1">
                    <div class="project-content">
                        <h3 class="project-title">Vehicle System</h3>
                        <p class="project-description">A simple car system that utilizes Raycast and BodyForces for a smooth driving experience.</p>
                    </div>
                </div>

                <div class="project" id="project2">
                    <div class="project-content">
                        <h3 class="project-title">Orb System</h3>
                        <p class="project-description">A heavily optimized orb system with custom physics and object pooling.</p>
                    </div>
                </div>

                <div class="project" id="project3">
                    <div class="project-content">
                        <h3 class="project-title">Jump For UGC Game</h3>
                        <p class="project-description">A short showcase of a commissioned game.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
