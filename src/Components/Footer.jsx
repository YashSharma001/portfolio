import React from 'react'
import me from '../assets/mypic2.png'
import { ImGithub } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={me} alt='Founder' />
        <h2>Yash Sharma</h2>
        <p>Motivation is temporary,but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>
        <article>
          <a href='https://github.com/YashSharma001' target='blank'><ImGithub /></a>
          <a href='https://www.linkedin.com/in/yash-sharma-57a6a8270/' target='blank'><IoLogoLinkedin /></a>
        </article>
      </aside>
      <a href='#home'><AiOutlineArrowUp /></a>
    </footer>
  )
}

export default Footer
