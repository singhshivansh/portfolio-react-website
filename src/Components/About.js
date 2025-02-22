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

    const skills_array = [ "Python", "C++", "JavaScript", "HTML5", "CSS3"];
    const skills_array_2 = ["NET Core", "APS.NET", ".NET Framework","Django", "ReactJS", "NodeJS", "MySQL", "Heroku", "Git", "GitHub"];
    return(
        <motion.div
        variants = {navbar_variant}
        initial = 'hidden'
        animate = 'visible'
        >
            <div>
                <h5 className=" desc">
                        <li>
                            <b>Software Engineer</b> with extensive experience of <b>nearly 3+ years</b> in <b>Web Development</b>, 
                            focusing on <b>Full-stack Technologies</b>, showcasing a strong grasp of both <b>Client-Side</b> and
                            <b>Server-side Programming</b>.
                        </li>
                        <li>
                            Working as a Software Engineer at <b>Icertis Solutions</b>, actively engaged in the Solution 
                            Engineering Department, crafting exceptional web applications tailored to meet client 
                            requirements and improve user satisfaction.
                        </li>
                        <li>
                            Developed substantial proficiency in multiple programming languages and frameworks such 
                            as<b> ASP.NET Core, JavaScript, and MySQL</b>, while also mastering system design principles and 
                            optimizing data structures for enhanced performance.
                        </li>
                </h5>
            </div>
            <div className="main__about">
                <div className="skills"><h3 className="text-bold">Skills</h3></div>
                <div className="row">
                    {
                        skills_array_2.map((skill, index)=>{
                            return(
                                <div  key={index}>
                                    <Card_1 title={skill}/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='row'>
                    {
                        skills_array.map((skill, index)=>{
                            return(
                                <div  key={index}>
                                    <Card_1 title={skill}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default About