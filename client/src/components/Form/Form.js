import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import {useStyles} from './styles';
import {createBlog} from '../../actions/blogs';
import { useHistory } from 'react-router';

const Form = ({ currentId, setCurrentId }) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const [blogData, setBlogData] = useState({ title: '', content: '', selectedFile: '', rating: 1});
    const blog = useSelector((state) => (currentId ? state.blogs.find((message) => message._id === currentId) : null));
    useEffect(()=>{
        if (blog) setBlogData(blog);
    }, [blog])
    const clear = () => {
        setCurrentId(0);
        setBlogData({ title: '', content: '', selectedFile: '', rating: 1});
        history.push("/");
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createBlog({ ...blogData, name: user?.result?.name}));
        clear();
        history.push("/");
    }
    return ( 
        <div>
            <Paper className={classes.paper}>
                <h3>Create a blog</h3>
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <TextField name="title" vairant="outlined" label="Title:" fullWidth className={classes.Title} value={blogData.title} onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}/>
                    <TextField name="content" vairant="outlined" label="Blog:" fullWidth className={classes.BlogInput} value={blogData.content} onChange={(e) => setBlogData({ ...blogData, content: e.target.value })}/>
                    <InputLabel id="rating-select" className={classes.Content}>Rating</InputLabel>
                    <Select labelId="rating-select" id="rating-select" className={classes.Content} onChange={(e) => setBlogData({ ...blogData, rating: e.target.value })}>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                    </Select>
                    <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setBlogData({ ...blogData, selectedFile: base64 })} /></div>
                    <br/>
                    <Button variant="contained" color="primary" className={classes.Button} type="submit">SUBMIT</Button>
                    <Button variant="contained" color="secondary" className={classes.Button} onClick={clear}>CANCEL</Button>
                </form>       
            </Paper>
        </div>
     );
}
 
export default Form;