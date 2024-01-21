import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ setMenuOpen, menuOpen }) => {
    return (
        <>
            <nav>
                <NavContent />
            </nav>

            <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
                <AiOutlineMenu />
            </button>

        </>
    )
}

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
    return (
      <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
        <NavContent setMenuOpen={setMenuOpen} />
      </div>
    );
  };

const NavContent = ({ setMenuOpen }) => (
    <>
        <h2>Yash Sharma</h2>
        <div>
            <a onClick={() => setMenuOpen(false)} href='#home'>Home</a>
            <a onClick={() => setMenuOpen(false)} href='#projects'>Projects</a>
            <a onClick={() => setMenuOpen(false)} href='#timeline'>Experience</a>
            <a onClick={() => setMenuOpen(false)} href='#skills'>Skills</a>
            <a onClick={() => setMenuOpen(false)} href='#contact'>Contact</a>
        </div>
        <a href="mailto:ys6845008@gmail.com">
            <button>Email</button>
        </a>
    </>
)

export default Header
