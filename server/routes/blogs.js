//Imports
import express from 'express';
//importing controllers
import { getBlogs, getBlog, createBlog, deleteBlog, likeBlog } from '../controllers/blogs.js';

const router = express.Router();

router.get('/', getBlogs);
router.get('/:id', getBlog);
router.post('/', createBlog);
router.delete('/:id', deleteBlog);
router.patch('/:id/like', likeBlog);

export default router;