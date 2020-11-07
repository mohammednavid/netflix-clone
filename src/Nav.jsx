import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 120) {
                handleShow(true)
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, []);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/instagram-clone-6c210.appspot.com/o/images%2Fnetflix_logo.png?alt=media&token=67676447-a2c0-4f2e-bf22-0418912ab4ef"
                alt=" Netflix Logo"
                className="nav__logo"
            />
            <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt=""
                className="nav__avatar"
            />
        </div>
    )
}

export default Nav
