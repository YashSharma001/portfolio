import React from 'react'
import { Tilt } from 'react-tilt'
import data from '../assets/data.json'
import { ImGithub } from "react-icons/im";

const Projects = () => {
    return (
        <div id='projects'>
            <h1>Projects</h1>
            <div className='cards-container'>
                <div className="cards" >
                    {
                        data.projects.map((i, index) => (
                            <ProjectCard key={index} title={i.title} description={i.description} url={i.url} imgSrc={i.imgSrc} githubUrl={i.github} />
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

const ProjectCard = ({ title, description, url, imgSrc, githubUrl }) => (
    <Tilt className="Tilt" options={{ max: 25, perspective: 1000, scale: 1 }}>
        <div >
            <img src={imgSrc} />
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    Live Demo
                </a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    Github <ImGithub />
                </a>
            </div>
        </div>
    </Tilt>
)

export default Projects
