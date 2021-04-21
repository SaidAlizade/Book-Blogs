//Imports
import express from 'express';
//importing controllers
import { getBlogs, getBlog, createBlog, deleteBlog, likeBlog } from '../controllers/blogs.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', getBlogs);
router.get('/:id', getBlog);
router.post('/',auth, createBlog);
router.delete('/:id',auth, deleteBlog);
router.patch('/:id/like',auth, likeBlog);

export default router;