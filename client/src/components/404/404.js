import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import image from '../../image/pageNotFound.jpeg';

const pageNotFound = () => {
    return (
        <div>
            <h1>404: This is not the page you're looking for</h1>
            <img src={image} alt="404"/>
            <br/>
            <Button variant="contained" component={Link} to={'/'} color="primary">Get back home</Button>
        </div>
     );
}
 
export default pageNotFound;