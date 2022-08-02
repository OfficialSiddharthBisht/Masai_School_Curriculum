const mongoose = require('mongoose');

const commentSchema  = new mongoose.Schema({
    content: String,
    //user
    user : { //normalized approach
        type:mongoose.Types.ObjectId,
        ref: 'User'  //refers to User model
    },
    //post
    post: { // de normalized / embedding approach
        title: String,
        id: mongoose.Types.ObjectId
    }
},{
    timestamps: true
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = {
    Comment
}