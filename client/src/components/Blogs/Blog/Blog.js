import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardContent, CardActionArea, CardMedia, Paper, Typography, Grid, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { deleteBlog, likeBlog } from '../../../actions/blogs';

//Styles
const useStyles = makeStyles((theme)=>({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
    media: {
      height: 190,
      width:160,
    },
    card: {
      margin: '5px',
      width: '70%'
    },
    cardContent: {
      margin: '0x',
    },
    actionArea:{
      width: 100,
    }
  }));

const Blog = ({blog, currentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch(); 
    return ( 
            <Card className={classes.card}>
            <CardContent>
                      <Typography variant="h5">{blog.title}</Typography>
                    </CardContent>
             <Grid container>
              <Grid item className={classes.cardContent} xs={2}>
                <CardMedia image={blog.selectedFile} title={blog.title} className={classes.media}/>
              </Grid>
              <Grid item className={classes.cardContent} xs={9}>
                <CardContent>
                  <Typography variant="p">{blog.content}</Typography>
                  <br/>
                  <Typography variant="p">RATING: {blog.rating}/10</Typography>
                </CardContent>
              </Grid>
             </Grid>
             <CardContent align="right">
              <Button onClick={() => dispatch(deleteBlog(blog._id))}><DeleteIcon color="secondary"/>DELETE</Button>
              <Button onClick={()=> dispatch(likeBlog(blog._id))}><FavoriteIcon color="primary"/>Likes: {blog.likes}</Button>
             </CardContent>
            </Card>
     );
}
 
export default Blog;