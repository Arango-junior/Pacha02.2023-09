const express = require('express');

//Create an app
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

//Listen port
const PORT = 4000;
app.listen(PORT);
console.log(`Running on port ${PORT}`);