const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Welcome everyone in our today's session </h3>")
})

app.listen(8000, () => {
    console.log("Server is Listening on port 8000!");
})