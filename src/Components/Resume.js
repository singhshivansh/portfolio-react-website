import React from 'react'
import './sidebar.css'
import Bar from './Bar'
import {motion} from 'framer-motion'

const react = 'https://as1.ftcdn.net/jpg/03/78/62/50/500_F_378625047_qvPkLB1HIlCmC9sQ2wV1bnVFr7fpgSNN.jpg'
const languages = [
    {
        icon: 'https://api.iconify.design/carbon:logo-python.svg?color=%23ffffff',
        name: 'Python',
        level: '45'
    },
    {
        icon: 'https://api.iconify.design/file-icons:c.svg?color=%23ffffff',
        name: 'C/C++',
        level: '80'
    },
    {
        icon : 'https://api.iconify.design/cib:javascript.svg?color=%23ffffff',
        name: 'JavaScript',
        level : '80'
    },
    {
        icon : 'https://api.iconify.design/icomoon-free:html-five.svg?color=%23ffffff',
        name : 'HTML/CSS',
        level : '70'
    }
]

const framework =[
    {
        icon : 'https://api.iconify.design/cib:django.svg?color=%23ffffff',
        name : 'Django',
        level : '75'
    },
    {
        icon : 'https://api.iconify.design/fa-brands:node-js.svg?color=white',
        name : "Node JS",
        level : '75'
    },
    {
        icon : 'https://api.iconify.design/bx:bxl-react.svg?color=%23ffffff',
        name : 'React JS',
        level : '73'
    },
    {
        icon : 'https://api.iconify.design/bi:bootstrap-fill.svg?color=%23ffffff',
        name : 'Bootstrap',
        level : '80'
    },

    {
        icon : 'https://api.iconify.design/cib:flutter.svg?color=%23ffffff',
        name : 'Flutter',
        level : '75'
    }
]


function Resume() {
    const navbar_variant={
        hidden:{
            x: '30vh',
            opacity: 0
        },
        visible:{
            x: 0,
            opacity: 1
        }
    }
    return (
        <motion.div className="resume"
        variants = {navbar_variant}
        initial = 'hidden'
        animate = 'visible'
        >
            
            <div className="row">
                <div className="col-lg-6 my-3" >
                    <h3 className="education__title text-bold">Language</h3>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 my-3" >
                    <h3 className="education__title text-bold">Framework/Library</h3>
                    <div className="resume-framework__body">
                        {
                            framework.map(frame => 
                                <Bar value={frame} />
                            )
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Resume