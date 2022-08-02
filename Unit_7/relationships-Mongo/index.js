const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    category_ids: [mongoose.Schema.Types.ObjectId],
    user_id: mongoose.Schema.Types.ObjectId
}
);

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    social_profile: {
        linkedIn: String,
        facebook: String,
        twiter: String,
        github: String,
        instagram: String,
    },
    addresses: [{
        Line1: String,
        City: String,
        State: String,
        PinCode: String,
    }],
    blog_id: [mongoose.Schema.Types.ObjectId]
}
);

const categorySchema = new mongoose.Schema({
    name: String
}
);

const commentSchema = new mongoose.Schema({
    message: String,
    rating: String,
    blog_id: [mongoose.Schema.Types.ObjectId],
    user_id: [mongoose.Schema.Types.ObjectId]
}
);

const likeSchema = new mongoose.Schema({
    emoji: String,
    blog_id: [mongoose.Schema.Types.ObjectId],
    user_id: [mongoose.Schema.Types.ObjectId]
}
);

const Blog = mongoose.model('Blog', blogSchema);
const User = mongoose.model('User', userSchema);
const Category = mongoose.model('Category', categorySchema);
const Comment = mongoose.model('Comment', commentSchema);
const Like = mongoose.model('Like', likeSchema);
