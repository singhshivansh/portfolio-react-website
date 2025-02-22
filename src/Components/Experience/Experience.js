import React from 'react';
import WorkCard  from './WorkCard';
import { Business } from '@material-ui/icons';

const Experience = () => {
    const work_experience = [
        {
            key : 1,
            title: 'Software Engineer',
            company: 'Icertis Inc.',
            location: 'Pune',
            start: 'July, 2022',
            end: null,
            achievements: [
                'Engaging in the full software development lifecycle, from requirements gathering to deployment, ensuring that all phases are executed with precision and adherence to best practices.',
                'Collaborating with cross-functional teams to design and implement scalable web applications that meet diverse client needs, utilizing a variety of technologies including ASP.NET Core & JavaScript.',
                'Administrating the management of source control and issue tracking through Team Foundation Server, ensuring seamless collaboration and project transparency.',
                'Conducting thorough analysis of system performance using Kibana and Application Insights, providing actionable insights to enhance application efficiency and user experience.',
                'eveloping and maintaining complex database schemas and stored procedures in MySQL, ensuring data integrity and optimal performance.',
                'Implementing client-side and server-side scripting solutions using C# & JavaScript, tailored to meet specific customization requirements for various projects.',
                'Leading the development of an e-commerce platform, focusing on the integration of a secure payment gateway & the implementation of CRUD operations to streamline user transactions.',
                'Mentoring junior developers, fostering a culture of continuous learning and improvement within the team.'
            ]
        },
        {
            key : 2,
            title: 'Full-Stack Developer',
            company: 'Unisight Technologies',
            location: 'Pune',
            start: 'Jan, 2021',
            end: 'May, 2022',
            achievements: [
                'designed and developed multiple Django and React',
                'converted Figma designs into UI components',
                'developed and integrated APIs for the web portal'
            ]
        },
        {
            key : 3,
            title: 'Full-Stack Developer',
            company: 'Applus Idiada',
            location: 'Pune',
            start: 'March, 2021',
            end: 'June, 2021',
            achievements: [
                'developed web portal using using Django framework',
                'developed APIs for the web portal',
                'designed and converted UI components',
                'developed and integrated APIs for the web portal'
            ]
        }
    ]
  return (
    <>
        <div className="education__block col-lg-12 my-3" >
            <div className="row">
                <div className=' business__icon d-flex flex-column justify-content-center pb-2'>
                    <Business />
                </div>
                <h3 className="education__title text-bold">Experience</h3>
            </div>
            <ul>
                {
                    work_experience.map((work) => {
                        return <WorkCard data={work} />
                    })
                }
            </ul>
        </div>
    </>
  )
}

export default Experience