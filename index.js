const express = require("express");
const app = express();

const port = 8080;

app.listen(port, (req, res) => {
    console.log(`listening to the port${port}`);
});