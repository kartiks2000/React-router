import React from 'react';
import './Student.css';

const Student = (props) => {
    return(
        <div className="Student">
            <h1>NAME : {props.name}</h1>
            <h1>ID : {props.myid}</h1>
            <h1>CONTACT NUMBER : {props.mobilenumber}</h1>
        </div>
    );
}

export default Student;