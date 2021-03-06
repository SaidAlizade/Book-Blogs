import mongoose from 'mongoose';

//Model of Blogs
const postSchema = mongoose.Schema({
    title: String,
    rating: Number,
    createdAt: { type: Date, default: Date.now },
    creator: String,
    name: String,
    selectedFile: String,
    likes: { type: [String], default: []},
    content: String,
})

var BlogMessage = mongoose.model('BlogMessage', postSchema);
export default BlogMessage;