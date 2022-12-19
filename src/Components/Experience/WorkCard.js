import React from 'react';
import $ from 'jquery';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./workcard.css";
import { ExpandLessOutlined } from '@material-ui/icons';
import { ExpandMoreRounded, ExpandMoreTwoTone } from '@material-ui/icons';

const WorkCard = (props) => {
    const displayAchievement = () => {
        const collapseExample = document.getElementById('collapseExample' + props.data.key);
        const expand_more = document.getElementById('expand_more_' + props.data.key);
        console.log(expand_more);
        $(collapseExample).toggle('slow');
        $(expand_more).toggle('slow');
    }
    const data = props.data;
  return (<>
        <li id={'experience_li' + data.key} className='education__li py-1 my-1 ' style={{cursor : 'pointer'}} onClick={displayAchievement}>
            <h5 className="text-bold">{data.title}</h5>
            <ul>
                <li>
                    <h6>{data.company}, {data.location}  </h6>
                </li>
                <li>
                    <small>{data.start} - {data.end ? data.end : 'Present'}</small>
                </li>
                
                <div  className='d-flex justify-content-center'>
                    <div id={"expand_more_" + data.key}>
                        <ExpandMoreIcon id={"expand_more_" + data.key} />
                    </div>
                </div>
  
                <div style={{display : 'none'}} id={"collapseExample" + data.key} >
                    <div className="card card-body" >
                        <ul>
                            {
                                data.achievements.map((achievement, index) => {
                                    return <li key={index}>
                                        <h6>{achievement}</h6>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </ul>
        </li>
  </>
  )
}



export default WorkCard