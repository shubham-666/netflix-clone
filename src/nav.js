import React, { useState, useEffect} from 'react'
import './nav.css'

function Nav() {

    const [show, handleShow] = useState(false)


    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY >100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
        
    }, [])


    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix Logo" />
            {/* <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix_avatar_logo"/> */}
        </div>
    )
}

export default Nav
