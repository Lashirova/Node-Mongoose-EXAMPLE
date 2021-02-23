const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/users", require("./routes/user_routes"));
app.get('/', (req, res) => res.send("Welcome to StudentsDatabase!"))
app.listen(port, () => console.log(`Example app listening on port port!`))