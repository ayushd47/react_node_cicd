const express = require('express');
const app = express()
const path = require('path')


app.use(express.static(path.join(__dirname, '/frontned/build')));
app.get('/', (req, res) => {
    res.send('Hello Ayushh');
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})