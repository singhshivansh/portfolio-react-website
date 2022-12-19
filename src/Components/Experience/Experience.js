import React from 'react';
import WorkCard  from './WorkCard';
import { Business } from '@material-ui/icons';

const Experience = () => {
    const work_experience = [
        {
            key : 1,
            title: 'Associate Software Engineer',
            company: 'Icertis Inc.',
            location: 'Pune',
            start: 'July, 2022',
            end: null,
            achievements: [
                'develop new features and integrated them through APIs in ICI',
                'fix bugs in existing APIs',
                'developed new APIs for ICI',
                'developed a web portal for company\'s internal use from scratch'
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