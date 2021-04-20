import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useStyles } from './styles';
import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core';
import image from '../../image/book.png';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionType';

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const classes = useStyles();
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        history.push('/login');
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;  
        if (token) {
          const decodedToken = decode(token);
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
    return ( 
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <img src={image} alt="icon" height="50"/> 
                <Typography component={Link} to="/" variant="h6" className={classes.title}>Book Blogs
                </Typography>
                {user?.result ? (
                    <div className={classes.appBarCompContainer}>
                        <Typography vairant="h6" className={classes.appBarComp}>{user?.result.name}</Typography>
                        <Avatar src={user?.result.imageUrl} alt={user?.result.name} className={classes.avatar}>{user?.result.name.charAt(0)}</Avatar>
                        <Button component={Link} to="/create" color="inherit" className={classes.appBarComp}>Create</Button>
                        <Button variant="contained" color="secondary" onClick={logout} className={classes.appBarComp}>Logout</Button>
                    </div>
                ) : (
                    <Button color="inherit" component={Link} to="/login">Login</Button>
                )}
            </Toolbar>
        </AppBar>
     );
}
 
export default Navbar;
