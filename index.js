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
        name : "Binay",
        content : "i'm a software enginer"
    },
    {
        name : "Cric",
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
    let{name, content} = req.body;
    posts.push({ name, content});
    res.send("its working");
});

app.listen(port, (req, res) => {
    console.log(`listening to the port${port}`);
});