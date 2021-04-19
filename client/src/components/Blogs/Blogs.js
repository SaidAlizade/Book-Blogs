import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Blog from './Blog/Blog';
import {useStyles} from './styles';

const Blogs = () => {
    const classes = useStyles();
    const blogs = useSelector((state) => state.blogs);
    return ( 
        !blogs.length ? <CircularProgress/> : (
            <Grid container>
                {blogs.map((blog) => (
                <Grid key={blog._id} item xs={12} className={classes.blog}>
                    <Blog blog={blog}/>
                </Grid>
                ))}
            </Grid>
        )
     );
}
 
export default Blogs;