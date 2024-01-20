import React from 'react'

const Header = () => {
    return (
        <nav>
            <NavContent />
        </nav>
    )
}

const NavContent = () => (
    <>
        <h2>Yash Sharma</h2>
        <div>
            <a href='#home'>Home</a>
            <a href='#projects'>Projects</a>
            <a href='#timeline'>Experience</a>
            <a href='#skills'>Skills</a>
            <a href='#contact'>Contact</a>
        </div>
        <a href="mailto:ys6845008@gmail.com">
            <button>Email</button>
        </a>
    </>
)

export default Header
