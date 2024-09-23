const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    timestamp:{
        type:Date,
        required:false,
        default:Date.now
    } 
});



const Post = mongoose.model('Post Data', postSchema);

module.exports = Post
