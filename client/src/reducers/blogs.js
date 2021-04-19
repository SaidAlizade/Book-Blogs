import { FETCH_ALL, FETCH, CREATE, DELETE, LIKE} from '../constants/actionType';

//Checking for action type and responding
export default (blogs =[], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case FETCH:
            return action.payload;
        case CREATE:
            return [...blogs, action.payload];
        case DELETE:
            return blogs.filter((blog) => blog._id !== action.payload);
        case LIKE:
            return blogs.map((blog) => (blog._id === action.payload._id ? action.payload : blog));
        default:
            return blogs;
    }
}