const Post = require("./post.model");

const verifyAuthor = async (req, user) => {
    let post = await Post.findById(postId);
if (post._id.toString() != users.req.Id){
    return res.status(406)
    .json({error: "You are not permitted to perform this operation"});
    res.status(200).json({ post });
}}


exports.getPosts = async (req, res) => {
    const posts = await Post.find({});
    res.status(200).json({posts});
};

exports.getAllPostsByUser = async (req, res) => {
    const posts = await Post.find({author:req.user.Id});
    res.status(200).json({posts});
};


exports.createPost = async (req, res) => {
    const { title, body } = req.body;
    const post = await Post.create({
        title,
        body,
        author,
       
    })
    res.status(200).json({post});
};


exports.getSInglePost = async ( req, res ) => {
    const {postId} = req.params;

    const post = await Post.findById(postId);
    res.status(200).json({ post }); 
}


exports.updatePost = async (req, res) => {
    const {postId} = req.params;
// checks
await verifyAuthor();
let post = await Post.findByIdAndUpdate(
    postId,
    {...req.body},
    {
        new: true,
    }
);
res.status(200).json({ post });
};


exports.deletePost = async (req, res) => {
const { postId } = req.params;
await verifyAuthor();

await Post.findByIdAndDelete(postId);
res.status(201).json({ msg: "Post deleted" });

};




