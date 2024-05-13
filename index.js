const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username : "Binay",
        content : "i'm a software enginer"
    },
    {
        username : "Cric",
        content : "play cricket"
    }
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let{username, content} = req.body;
    posts.push({ username, content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req, es) => {
    let { id } = req.params;
    let post = post.find((p) => id === p.id);
    res.render("show.ejs");
});

app.listen(port, (req, res) => {
    console.log(`listening to the port${port}`);
});