//Imports
import mongoose from 'mongoose';
//Model import
import BlogMessage from '../models/blogMessage.js';

//Getting all blogs
export const getBlogs = async (req, res) => {
    try {
        const blogMessages = await BlogMessage.find();
        res.status(200).json(blogMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
//Getting a certain blog
export const getBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await BlogMessage.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
//Creating a blog
export const createBlog = async (req, res) => {
    const blog = req.body;
    const newBlogMessage = new BlogMessage({...blog, creator: req.userId, createdAt: new Date().toISOString() })
    try {
        await newBlogMessage.save();
        res.status(201).json(newBlogMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//deleting a blog
export const deleteBlog = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog with id: ${id}`);
    await BlogMessage.findByIdAndRemove(id);
    res.json({ message: 'Post succesfully deleted' })
}

//Liking a blog
export const likeBlog = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog with id: ${id}`);
    const blog = await BlogMessage.findById(id);
    const updateBlog = await BlogMessage.findByIdAndUpdate(id, { likes: blog.likes + 1}, { new: true})
    res.json(updateBlog);
}