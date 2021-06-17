const express = require('express')
const app = express();
const port = 6060;
const mongoose = require('mongoose')
const db = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/blogapi-test', 
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("Connected to Database")
})


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Port Open on ${port}!`)
});