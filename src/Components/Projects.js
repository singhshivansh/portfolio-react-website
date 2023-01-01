import React, {useState, useEffect} from 'react'
import './sidebar.css'
import Card_2 from './Card_2'
import plasma from "../Assets/Image/plasma.png"
import portfolio from "../Assets/Image/portfolio.png"
import password from "../Assets/Image/password.png"
import face from "../Assets/Image/face.png"
import cardio from "../Assets/Image/cardiovascular.png";
import superhero from "../Assets/Image/ProjectImage/super_hero_image.jpeg";
import superhero_api from '../Assets/Image/ProjectImage/super_hero_api_image.jpeg';
import fc from '../Assets/Image/ProjectImage/fc_image.jpeg';
import weather_app from '../Assets/Image/ProjectImage/weather_app_image.jpeg';
import tooly from '../Assets/Image/ProjectImage/tooly_image.jpeg';
import {motion} from 'framer-motion';
import { LineWave } from 'react-loader-spinner'

const data_project = [
    {
        name: 'Frame Change',
        image: fc,
        githuburl: null,
        url: 'https://fc.unisight.in/',
        category: ['react', 'django']

    },
    {
        name : 'Tooly',
        image: tooly,
        githuburl: null,
        url: 'https://tooly.com/',
        category: ['django']

    },
    {
        name: 'SuperHero World',
        image: superhero,
        githuburl: 'https://github.com/singhshivansh/SuperHero-World',
        url: 'http://superhero-world.vercel.app/',
        category: ['react']
    },
    {
        name: 'SuperHero World API',
        image: superhero_api,
        githuburl : 'https://github.com/singhshivansh/SuperHeroes_API/',
        url : 'https://superhero-world-api.netlify.app/',
        category: ['react']
    },
    {
        name: 'Portfolio',
        image : portfolio,
        githuburl: 'https://github.com/singhsivansh12/plasmaDonationSystem',
        url: 'https://shivansh-singh.netlify.app/',
        category: ['react']
    },
    {
        name : 'React Weather App',
        image: weather_app,
        githuburl: 'https://github.com/singhshivansh/react-weather-app',
        url: 'https://react-weather-app-shivansh.netlify.app/',
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
    }    
]


const Projects = () =>{
    const [projects, setProjects] = useState(data_project);
    const [loader, setloader] = useState(true);

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
        var project_navbar_items = document.getElementsByClassName('project_navbar_items');
        for(var i=0; i<project_navbar_items.length; i++){
            project_navbar_items[i].classList.remove('active_project');
        }
        document.getElementById(name).classList.add('active_project');
        setProjects(new_array);
    }

    return(
        
        <motion.div
        variants = {navbar_variant}
        initial = 'hidden'
        animate = 'visible'
        className="projects"
        onLoad={() => setloader(false)}
        >
            {
                loader ? <LineWave color="#00BFFF" height={100} width={100} /> : null
            }
            <div className="navbar col-lg-8 col-md-10 project__navbar">
                <div id='all' className="project_navbar_items mx-2 active_project" onClick= {() => setProjects(data_project)} >All</div>
                <div id='react' className="project_navbar_items mx-2" onClick ={() => handleFilterCategory('react')}>React</div>
                <div id='django' className="project_navbar_items mx-2" onClick ={() => handleFilterCategory('django')}>Django</div>
                <div id='flask' className="project_navbar_items mx-2" onClick ={() => handleFilterCategory('flask')}>Flask</div>
                <div id='machine_learning' className="project_navbar_items mx-2" onClick ={() => handleFilterCategory('machine_learning')}>Machine Learning</div>
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