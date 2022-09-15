const express = require("express");
const {dbConnect} = require("./config/dbConnect");
const productsRouter = require("./modules/products/products.route");
const postsRouter = require("./modules/posts/post.route");
const authRouter = require("./modules/users/auth.routes")

const app = express();
app.use(express.json())

// app.get("/", (req, res) => {
//     res.status(200).send("welcome to my server");
// });

app.use("/products", productsRouter);
app.use("/auth", authRouter);
app.use("/posts", postsRouter)

async function start() {
    await dbConnect();
    app.listen(4000, (req, res) =>{
       console.log("server runing on https://localhost/4000")
    });
}


start();