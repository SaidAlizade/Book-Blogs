import React, {useState, useEffect} from 'react';
import Blogs from '../Blogs/Blogs';
import { Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getBlogs} from '../../actions/blogs';
const Home = () => {
    const dispatch= useDispatch();
    useEffect(() => {
        dispatch(getBlogs());
    }, [dispatch]);
    return (
        <div>
            <Typography variant="h3">Home</Typography>
            <Blogs/>
        </div> 
     );
}
 
export default Home;