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
        res.status(200).json(blog);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
//Creating a blog
export const createBlog = async (req, res) => {
    const blog = req.body;
    console.log(req.userId);
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
    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog with id: ${id}`);
    const blog = await BlogMessage.findById(id);
    const index = blog.likes.findIndex((id) => id === String(req.userId));
    if(index === -1){
        blog.likes.push(req.userId);
    }
    else{
        blog.likes = blog.likes.filter((id)=> id !== String(req.userId));
    }
    const updateBlog = await BlogMessage.findByIdAndUpdate(id, blog, { new: true});
    res.json(updateBlog);
}