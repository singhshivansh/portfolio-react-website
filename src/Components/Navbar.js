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
        if(currentURL.endsWith('/education'))
            setActive('Education')
        if(currentURL.endsWith('/experience'))
            setActive('Experience')
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
            <div className='d-lg-flex d-md-block justify-content-between'>
                <div className="navbar__active ">
                    {active}
                </div>
                <div className='d-flex flex-column justify-content-center'>
                    <div className="d-flex">
                        {active !== 'About' ? 
                        <Link to="/" className='text-decoration-none'>
                        <div className="navbar__item" onClick={() => setActive('About')}>About</div> 
                        </Link>: null}
                        {active !== 'Projects' ? 
                        <Link to="/projects" className='text-decoration-none'>
                            <div className="navbar__item" onClick={() => setActive('Projects')}>Projects</div>
                        </Link>
                        : null }
                        {/* {active !== 'Resume' ? 
                        <Link to='/resume' className='text-decoration-none'>
                            <div className="navbar__item" onClick={() => setActive('Resume')}>Resume</div>
                        </Link>
                        : null } */}
                        {active !== 'Education' ? 
                        <Link to='/education' className='text-decoration-none'>
                            <div className="navbar__item" onClick={() => setActive('Education')}>Education</div>
                        </Link>
                        : null }
                        {
                            active !== 'Experience' ?
                            <Link to='/experience' className='text-decoration-none'>
                                <div className="navbar__item" onClick={() => setActive('Experience')}>Experience</div>
                            </Link>
                            : null
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Navbar;