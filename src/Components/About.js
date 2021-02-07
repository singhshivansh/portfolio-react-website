import React from 'react'
import Card_1 from './Card_1'
import "./sidebar.css"
import {motion} from 'framer-motion'

function About(){
    
    const navbar_variant={
        hidden:{
            x: '-30vh',
            opacity: 0
        },
        visible:{
            x: 0,
            opacity: 1
        }
    }
    return(
        <motion.div
        variants = {navbar_variant}
        initial = 'hidden'
        animate = 'visible'
        >
            <div>
                <h5 className=" desc">I describe myself as a persistent learner who loves to solve problems :)</h5>
                
            </div>
            <div className="main__about">
                <div className="skills"><h3 className="text-bold">Skills</h3></div>
                <div className="row">
                    <Card_1 img = "https://www.flaticon.com/svg/static/icons/svg/781/781683.svg" title = "Frontend Developer"/>
                    <Card_1 img = "https://www.flaticon.com/svg/static/icons/svg/2166/2166796.svg" title="Backend Developer"/>
                    <Card_1 img = "https://www.flaticon.com/svg/static/icons/svg/2970/2970533.svg" title="Machine Learning"/>
                    <Card_1 img = "https://www.flaticon.com/svg/static/icons/svg/3479/3479978.svg" title="Computer Vision"/>
                    <Card_1 img = "https://www.flaticon.com/svg/static/icons/svg/711/711284.svg" title="Competitive Coding"/>
                </div>
            </div>
        </motion.div>
    )
}

export default About