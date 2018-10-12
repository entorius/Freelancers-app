import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/">Freelancers</NavigationItem>
        {props.isAuthenticated
            ? <NavigationItem link="/newJob">Post a Job</NavigationItem>
            : null
        }
        <NavigationItem link="/jobs">Jobs</NavigationItem>
        {!props.isAuthenticated
            ? <NavigationItem link="/auth">Signup</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>
        }

        
        
    </ul>
);

export default navigationItems;