import React, {useState} from 'react'
import './sidebar.css'
import Card_2 from './Card_2'
import plasma from "../Assets/Image/plasma.png"
import portfolio from "../Assets/Image/portfolio.png"
import password from "../Assets/Image/password.png"
import face from "../Assets/Image/face.png"
import cardio from "../Assets/Image/cardiovascular.png"
import {motion} from 'framer-motion' 

const data_project = [
   
    {
        name: 'Portfolio',
        image : portfolio,
        githuburl: 'https://github.com/singhsivansh12/plasmaDonationSystem',
        url: 'https://shivansh-singh.netlify.app/',
        category: ['react']
    },
    {
        name: 'Plasma Donation System',
        image: plasma,
        githuburl : 'https://github.com/singhsivansh12/plasmaDonationSystem',
        url : 'https://plasma-donation-system.herokuapp.com/',
        category: ['django']
    },
    {
        name: 'CardioVascular Predictor',
        image: cardio,
        githuburl: 'https://github.com/singhsivansh12/cardiovascular-disease-predictor',
        url : 'https://cardiovascular-predictor.herokuapp.com/',
        category : ['flask', 'machine_learning']
    },
    {
        name: 'Celebrity Face Classifier',
        image: face,
        category: ['flask', 'machine_learning']
    },
    {
        name: 'Password Generator',
        image: password,
        url : 'https://password-generatorr.herokuapp.com/',
        category: ['django']
    }, 
    
]


const Projects = () =>{
    const [projects, setProjects] = useState(data_project)

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

    const handleFilterCategory = (name) => {
        const new_array =  data_project.filter(project => project.category.includes(name))
        // for(const i=0; i<data_project.length ; i++){
        //     if (data_project[i].category == name){
        //         console.log(data_project[i])
        //     }
        // }
        // console.log(new_array)
        setProjects(new_array)
    }

    return(
        <motion.div
        variants = {navbar_variant}
        initial = 'hidden'
        animate = 'visible'
        className="projects">
            <div className="navbar col-lg-8 col-md-10 project__navbar">
                <div className="project_navbar_items mx-2" onClick= {() => setProjects(data_project)} >All</div>
                <div className="project_navbar_items mx-2" onClick ={() => handleFilterCategory('react')}>React</div>
                <div className="project_navbar_items mx-2" onClick ={() => handleFilterCategory('flask')}>Flask</div>
                <div className="project_navbar_items mx-2" onClick ={() => handleFilterCategory('django')}>Django</div>
                <div className="project_navbar_items mx-2" onClick ={() => handleFilterCategory('machine_learning')}>Machine Learning</div>
            </div>
            <div className="row project text-align">
                {
                   projects.map( project =>
                       <Card_2 className="row col-10" value={project}/>
                   )
               }
            </div>
            
        </motion.div>
    )
}

export default Projects