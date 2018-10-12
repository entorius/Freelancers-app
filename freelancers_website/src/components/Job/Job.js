import React from 'react';
import './Job.css';

const job = (props) => (
    <div className="Job">
        <div className="NameAndOccupation">
            <p className="Name">{props.title}</p>
           
                <div >  
                    <strong className="AdditionalInfo">     
                    <p>{props.salary} {props.level} level</p>
                    </strong>
                </div>
            <p className="Occupation">{props.type}</p>   
            <p className="Description">{props.description}</p>
        </div>
    </div>
);

export default job;