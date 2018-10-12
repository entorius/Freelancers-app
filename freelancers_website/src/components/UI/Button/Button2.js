import React from 'react';

import './Button2.css';

const button = (props) => (
    <button
        disabled={props.disabled}
        className="ButtonS"
        onClick={props.clicked}>{props.children}</button>


);

export default button;