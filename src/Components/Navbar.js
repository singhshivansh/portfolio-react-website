import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const Navbar = () => {
    const [active, setActive] = useState('About')

    useEffect(() => {
        let currentURL = window.location.href
        console.log(currentURL)
        if(currentURL.endsWith('/'))
            setActive('About');
        if(currentURL.endsWith('/projects'))
            setActive('Projects')
        if(currentURL.endsWith('/resume'))
            setActive('Resume')
    }, [active])

    const navbar_variant={
        hidden:{
            y: '-30vh',
            opacity: 0
        },
        visible:{
            y: 0,
            opacity: 1
        }
    }

    return(
        <motion.div 
        variants = {navbar_variant}
        initial = 'hidden'
        animate = 'visible'
        className=""
        >
            <div className="navbar__active">
                {active}
            </div>
            <div className="d-flex ">
                {active !== 'About' ? 
                <Link to="/">
                <div className="navbar__item" onClick={() => setActive('About')}>About</div> 
                </Link>: null}
                {active !== 'Projects' ? 
                <Link to="/projects">
                    <div className="navbar__item" onClick={() => setActive('Projects')}>Projects</div>
                </Link>
                : null }
                {active !== 'Resume' ? 
                <Link to='/resume'>
                    <div className="navbar__item" onClick={() => setActive('Resume')}>Resume</div>
                </Link>
                : null }
                {active !== 'Education' ? 
                <Link to='/education'>
                    <div className="navbar__item" onClick={() => setActive('Education')}>Education</div>
                </Link>
                : null }

            </div>
        </motion.div>
    )
}

export default Navbar;