import React from "react"
import "./sidebar.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import {motion} from 'framer-motion'
import GitHubIcon from '@material-ui/icons/GitHub';
import Pdf from '../Assets/Files/resume.pdf'
import ProPic from "../Assets/Image/shiv.jpeg"

function Sidebar(){
    
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
        [
            <motion.div
            variants = {navbar_variant}
            initial = 'hidden'
            animate = 'visible'
            transition= {{
                delay : 0.3,
                duration : 0.3
            }}
            className="sidebar text-center">
                <img src={ProPic} className="sidebar__avatar my-2"></img>
                <div className="sidebar__name">Shivansh<span > Singh</span></div>
                <div className="sidebar__item">Web Developer</div>
                <a href= {Pdf} className="link text-white download_resume my-2" target="_blank">
                    <img src='https://api.iconify.design/si-glyph:paper-clip.svg?color=white'/> Download Resume
                </a>
                <div className="sidebar__social-icons my-2  ">
                    <a href="https://www.facebook.com/shivansh.kumar.5689" target="_blank" alt="facebook" className="sidebar__facebook"><FacebookIcon /> Facebook</a>
                    <a href="https://www.instagram.com/_shivanshh__/?hl=en" target ="_blank" alt="instagram" className="sidebar__instagram"><InstagramIcon /> Instagram</a>
                </div>
                <div className="sidebar__github col-lg-12 col-md-5">
                    <a href="https://github.com/singhsivansh12" alt="github" className="sidebar__github"><GitHubIcon /> GitHub</a>
                </div>
                <div className="my-2">
                   <img src="https://www.flaticon.com/svg/static/icons/svg/561/561237.svg" alt="location" className="sidebar__location" />
                   Pune, India 
                </div>
                <div className="text-bold my-2">
                    singhshivansh12@gmail.com<br></br>
                    +91-9359042346
                </div>
                <div className="email__me text-center"><a target="_blank" className="email_me" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTMXTmGSSMwSWNzvhxSqZTfLPZCVVvbPQphtvZstndBwhjTwQbjxmqNdhJLWhqpVCpnmSq">Email Me</a></div>
                {/* <div> <a><GitHubIcon /></a> </div> */}
            </motion.div>
        ]
    )
}

export default Sidebar;