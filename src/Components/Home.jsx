import React, { useRef } from 'react'
import { animate, motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { BsArrowUpRight } from "react-icons/bs"
import { IoLogoLinkedin } from "react-icons/io5";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import mypic2 from '../assets/mypic2.png'
import resume from "../assets/resume2.pdf"


const Home = () => {

    const projectCounts = useRef(null);

    const animationProjectCounts = () => {
        animate(0, 10, {
            duration: 1,
            onUpdate: (value) => (projectCounts.current.textContent = value.toFixed()),
        })
    }

    const animation = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: "0",
                opacity: 1,
            }
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: "0",
                opacity: 1,
            }
        },
    }

    return (
        <div id='home'>
            <section>
                <div>
                    <motion.h1  {...animation.h1}>
                        Hi,I Am <br /> Yash Sharma
                    </motion.h1>
                    <Typewriter options={{
                        strings: ["A Developer", "A Designer", "A Creater"],
                        autoStart: true,
                        loop: true,
                        // cursor:"",
                        wrapperClassName: "typewriterpara"
                    }} />
                    <div>
                        <a href={resume} target='_blank'>
                            My Resume
                        </a>
                        <a href="#projects">
                            Projects <BsArrowUpRight />
                        </a>
                    </div>
                    <article>
                        <p>+
                            <motion.span whileInView={animationProjectCounts} ref={projectCounts}></motion.span>
                        </p>
                        <span>Projects Done</span>
                    </article>
                    <aside>
                        <article data-special1>
                            <p>Linkedin</p>
                            <span><a href='https://www.linkedin.com/in/yash-sharma-57a6a8270/'> <IoLogoLinkedin /></a></span>
                        </article>

                        <article data-special2>
                            <p>Contact</p>
                            <span>ys6845008@gmail.com</span>
                        </article>
                    </aside>
                </div>
            </section>

            <section>
                <img src={mypic2} alt="Yash" />
            </section>
            <TfiAngleDoubleDown />
        </div>
    )
}

export default Home
