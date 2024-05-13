const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname, "public")));

let posts = {
    name : "Binay",
    content : "i'm a software developer"
}

app.get("/", (req, res) => {
    res.send("server is working well");
});

app.listen(port, (req, res) => {
    console.log(`listening to the port${port}`);
});