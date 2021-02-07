import React from 'react'
import './sidebar.css'
import {motion} from 'framer-motion'
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

const Card_2 = ({ value: { image, name, githuburl, url } }) => {
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
            <motion.div 
            variants = {navbar_variant}
            initial = 'hidden'
            animate = 'visible'
            transition= {{
                delay : 0.3,
                duration : 0.3
            }}
            className="card_2 col-lg-5 ">
               <div className="containers text-align">
                    <img src={image} alt="Avatar" className="image card_2_image" />
                    <div className="middle">
                        <div className="icon">
                            <h5 className="d-block mx-2">{name}</h5><br></br>
                            <div className="row">
                                <a href={githuburl} target="_blank" className="iconn"><GitHubIcon /></a>
                                <a href={url} target="_blank" className="iconn"><LanguageIcon /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
    )
}
export default Card_2;