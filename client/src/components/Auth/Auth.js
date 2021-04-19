import React, { useState } from 'react';
import { Typography, Button, TextField, Paper, Avatar, Container, Grid} from '@material-ui/core';
import { useStyles } from './styles';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from 'react-router-dom';
import { signin, signup} from '../../actions/auth';
import { AUTH } from '../../constants/actionType';
import Icon from './icon';
import Input from './Input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [form, setForm ] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: AUTH, data: {result, token}});
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };
    const googleError = () => alert('Something went wrong try again another time.');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignup){
            dispatch(signup(form, history));
            console.log(form);
        }
        else{
            dispatch(signin(form, history));
            console.log(form);
        }
    };
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    };
    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} align="center" elevation={3}>
                <Typography variant="h5">{ isSignup ? 'Sign up' : 'Sign in'}</Typography>
                <Avatar>
                    <LockOutlinedIcon/>
                </Avatar>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isSignup && (
                        <>
                        <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                        <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                        </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                        <Button type="submit" fullWidth variant="contained" color="primary">
                            { isSignup ? 'Sign Up' : 'Sign In' }
                        </Button>
                    </Grid>
                    <br/>
                    <GoogleLogin
                        clientId="459210182883-49f1vcio6l1pjekvon7224okl4s487rm.apps.googleusercontent.com"
                        render={(renderProps) => (
                        <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                            Google Sign In
                        </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justify="flex-end">
                        <Grid item>
                        <Button onClick={switchMode}>
                            { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                        </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
     );
}
 
export default Auth;