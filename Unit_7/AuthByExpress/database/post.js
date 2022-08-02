const mongoose = require('mongoose');

const postSchema  = new mongoose.Schema({
    title: String,
    content: String,
    //user
    user : {  //normalized approach
        type:mongoose.Types.ObjectId,
        ref: 'User'   //refers to User model
    }
},{
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = {Post};