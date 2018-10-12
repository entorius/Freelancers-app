import React from 'react';
import './Freelancer.css';
import Button from '../UI/Button/Button2';

const freelancer = (props) => (
    <div className="FreelancerDescription">
        <div className="ImgAndBtn">
            <img src={props.imagePath } className="Image"/>
            <br/>
            <Button>Contact</Button>
        </div> 
        <div className="NameAndOccupation">
            <p className="Name">{props.name}</p>
            <p className="Occupation">{props.occupation}</p>
            <p className="Description">{props.description}</p>
        </div>

    </div>


);

export default freelancer;

