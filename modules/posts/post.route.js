const { authRequired } = require("../middlewares/authRequired");
const router = require("express").Router;

const {
  createPost,
  getPosts,
  deletePost,
  getSInglePost,
  getAllPostsByUser,
  updatePost,
} = require("./post.controller");

const postsRouter = router();

postsRouter
  .route("/")
  .all(authRequired)
  .post(createPost)
  .get(getPosts);
postsRouter
  .route("/")
  .all(authRequired)
  .get(getSInglePost)
  .patch(updatePost)
  .delete(deletePost).get(getAllPostsByUser)
;
module.exports = postsRouter;
