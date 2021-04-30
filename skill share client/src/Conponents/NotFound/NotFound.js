import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div style={{height:'100vh' , background:'#f1f1f1'}} className='d-flex justify-content-center align-items-center text-danger'>
            <div>
            <Link to='/home'><h4>Skill Development</h4></Link>
                <h1 style={{marginTop:'50px'}}>Page is not found</h1>
                <h1>SORRY ....! 404</h1>
            </div>
        </div>
    );
};

export default NotFound;