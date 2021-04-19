import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useStyles } from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
        <AppBar position="static">
            <Toolbar>
                <img src={image} alt="icon" height="50"/> 
                <Typography component={Link} to="/" variant="h6" className={classes.title}>Book Blogs
                </Typography>
                {user?.result ? (
                    <div>
                        <p>you are logged in </p>
                    </div>
                ) : (
                    <Button color="inherit" component={Link} to="/login">Login</Button>
                )}
                <Button component={Link} to="/create" color="inherit">Create</Button>
                <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>
            </Toolbar>
        </AppBar>
     );
}
 
export default Navbar;
