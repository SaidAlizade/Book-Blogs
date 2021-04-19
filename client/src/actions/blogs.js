import { FETCH, FETCH_ALL, CREATE, DELETE, LIKE} from '../constants/actionType';
import * as api from '../api/index';

//Getting blogs
export const getBlogs = () => async (dispatch) => {
    try {
        const { data } = await api.getBlogs();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
}
//Getting a specific blog
export const getBlog = (id) => async (dispatch) => {
    try {
        const { data } = await api.getBlog(id);
        dispatch({ type : FETCH, payload: data });
    } catch (error) {
        console.log(error);
    }
}

//Creating a blog
export const createBlog = (blog) => async (dispatch) => {
    try {
        const { data } = await api.createBlog(blog);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error)
    }
}

//Deleting a blog
export const deleteBlog = (id) => async (dispatch) => {
    try {
        await await api.deleteBlog(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}

//Liking a blog 
export const likeBlog = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeBlog(id);
        dispatch({ type: LIKE, payload: data });
    } catch (error) {
        console.log(error);
    }
}