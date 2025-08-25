const express = require("express");
const app = express();

port = 8080;

app.use(express.urlencoded({extended : true}));

app.get("/register", (req,res) =>{
    let {user, password} = req.query;
    res.send(`Sandard GET request. Wellcome ${user}`);
});

app.post("/register", (req,res) =>{
    let {user, password} = req.body;
    res.send(`Sandard POST request. Wellcome ${user}`);
});

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
})