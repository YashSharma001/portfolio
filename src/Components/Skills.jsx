import React from 'react'
import { motion } from 'framer-motion'
import frontendSkills from '../assets/frontendSkills.json'
import backendSkills from '../assets/backendSkills.json'
import otherSkills from '../assets/otherSkills.json'

const Skills = () => {
    const animations = {
        whileInView: {
            x: 0,
            y: 0,
            opacity: 1,
        },
        one: {
            x: "-100%",
            opacity: 0,
        },
        two: {
            y: "-100%",
            opacity: 0,
        },
        three: {
            x: "+100%",
            opacity: 0,
        },
    }

    return (
        <>
            <h1 className='skillh1'>Skills</h1>
            <div id="skills">

                <div className="skill-section">
                    <motion.div className='skillBox1' whileInView={animations.whileInView} initial={animations.one}>
                        <SkillCard title="Frontend " skills={frontendSkills.fSkills} />
                    </motion.div>
                    <motion.div className='skillBox2' whileInView={animations.whileInView} initial={animations.two}>
                        <SkillCard title="Backend " skills={backendSkills.bSkills} />
                    </motion.div>
                    <motion.div className='skillBox3' whileInView={animations.whileInView} initial={animations.three}>
                        <SkillCard title="Others " skills={otherSkills.oSkills} />
                    </motion.div>
                </div>
            </div></>
    )
}



const SkillCard = ({ title, skills }) => (

    <div className="skill-card">
        <h2>{title}</h2>
        <ul>
            {skills.map((i, index) => (
                <li key={index}>{i.name}</li>
            ))}
        </ul>
    </div>

);

export default Skills
