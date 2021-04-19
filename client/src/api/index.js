import axios from 'axios';

//Declaring API
const API = axios.create({ baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

//creating the requests
export const getBlogs = () => API.get('/blogs');
export const createBlog = (newBlog) => API.post('/blogs', newBlog);
export const getBlog = (id) => API.get(`/blogs/${id}`);
export const deleteBlog = (id) => API.delete(`/blogs/${id}`);
export const likeBlog = (id) => API.patch(`/blogs/${id}/like`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);