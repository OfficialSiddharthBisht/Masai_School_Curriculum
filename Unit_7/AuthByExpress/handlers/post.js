const {Post} = require('../database/post');
const {Comment} = require('../database/comment');

async function getAllPosts(req, res) {
  try {
    let { skip, limit } = req.query;
    let posts = await Post.find().skip(skip).limit(limit).populate('user');
    return res.send({
        data: posts
    })
  } catch (error) {
    console.log(error);
    throw(error);
  }
}

async function getSinglePost(req, res) {
  try {
    let { id } = req.params;
    let post = await Post.findById(id).populate('user');
    if(!post){
        return res.status(404).send({
            message: "Post not found"
        })
    }
    let comments = await Comment.find({
        post: {
            id: post._id
        }
    });

    post.comments = comments;
    return res.send({
        data: post
    })
  } catch (error) {
    console.log(error);
    throw(error);
  }
}

async function createPost(req, res) {
  try {
    const { post } = req.body;

    let postDoc = await Post.create(post);
    res.status(200).send({
        data: postDoc
    })
  } catch (error) {
    console.log(error);
    throw(error);
  }
}

async function updatePost(req, res) {
  try {
    let { id } = req.params;
    let { post: postData} = req.body;

    let post = await Post.findById(id);

    for(const [key, value] of Object.entries(postData)) {
      post[key] = value;
    }

    await post.save();
    return res.send({
        data: post
    })

  } catch (error) {
    console.log(error);
    throw(error);
  }
}

async function deletePost(req, res){
    try {
        let { id } = req.params;
        // let post = await Post.findById(id);
        // await post.remove();
        await Post.findByIdAndDelete(id);
        return res.send({
            message: "Post deleted"
        })
    } catch (error) {
        console.log(error);
        throw(error);
    }
}

module.exports = {
    createPost,
    getAllPosts,
    getSinglePost,
    updatePost,
    deletePost
}