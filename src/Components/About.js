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

    const skills_array = ["Python", "C++", "JavaScript", "HTML5", "CSS3"];
    const skills_array_2 = ["Django", "ReactJS", "NodeJS", "MySQL", "Heroku", "Git", "GitHub"];
    return(
        <motion.div
        variants = {navbar_variant}
        initial = 'hidden'
        animate = 'visible'
        >
            <div>
                <h5 className=" desc">
                    As a full stack developer with 1+ years of experience, I have a strong foundation in both front-end and back-end development.
                    I am skilled in a variety of programming languages, frameworks, and have experience developing and maintaining web applications from start to finish. In my previous roles, I have successfully implemented features to improve the user experience and increase efficiency, and have a track record of delivering high-quality code on time.
                     I am a proactive problem-solver and enjoy working in a collaborative team environment.
                    {/* I am excited to bring my skills and experience to a new opportunity and contribute to the success of a dynamic organization. */}
                </h5>
                
            </div>
            <div className="main__about">
                <div className="skills"><h3 className="text-bold">Skills</h3></div>
                <div className="row">
                    
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
                <div className='row'>
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
            </div>
        </motion.div>
    )
}

export default About