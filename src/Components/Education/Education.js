import React from 'react';
import './education.css';

const Education = () => {
  return (
    <>
        <div className="education__block col-lg-12 my-3" >
            <div className="row">
                <img src ="https://api.iconify.design/maki:college-11.svg" className="img-thumbnail"></img>
                <h3 className="education__title text-bold">Education</h3>
            </div>
            <ul>
              <li className='education__li py-1 my-1'>
                <h5 className="text-bold">Computer Science Engineering</h5>
                <ul>
                  <li>
                    <h6>MIT World Peace University, Pune (2018-22)</h6>
                  </li>
                  <li>
                    <h6>CGPA: <b>9.13</b></h6>
                  </li>

                </ul>
              </li>
              <li className='education__li py-1 my-2'>
                <h5 className="text-bold">Senior Secondary School</h5>
                <ul>
                  <li>
                    <h6>Kendriya Vidyalaya, Mughalsarai (2016-17)</h6>
                  </li>
                  <li>
                    <h6>Percentage: <b>87.8%</b></h6>
                  </li>
                </ul>
              </li>
              <li className='education__li py-1 my-1'>
                <h5 className="text-bold">Secondary School</h5>
                <ul>
                  <li>
                    <h6>Kendriya Vidyalaya, Mughalsarai (2014-15)</h6>
                  </li>
                  <li>
                    <h6>CGPA: <b>9.8</b></h6>
                  </li>
                </ul>
              </li>
            </ul>
        </div>
    </>
  )
}

export default Education;