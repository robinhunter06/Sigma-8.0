const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app lisning on port ${port}`)
})

// app.use((req,res) => {
//     console.log("request resived");
//     let code = "<h1>Fruits</h1><ul></ul><li>Apple</li><li>Banana</li><li>Orange</li>"
//     res.send(code);
// })

app.get("/", (req, res) => {
    res.send("hello, I am root");
});

app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    let htmlstr = `<h1>Welcome the page of @${username}!</h2>`;
    res.send(htmlstr);
});