import React from 'react';
import './NavigationItem.css';
import {Link} from 'react-router-dom';

const navigationItem = ( props ) => (
    <li className="NavigationItem">
        <Link className="Link" to={props.link} >{props.children}</Link>
    </li>
);

export default navigationItem;