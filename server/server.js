const express = require('express');
// const mongoose = require('mongoose');
const path = require('path');

// mongoose.connect('mongodb+srv://jonathan:<JMariano02>@cars.ncyrhj9.mongodb.net/?retryWrites=true&w=majority');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../src')));

app.get('/api', (req, res) => {
    res.json({ message: 'Backend Boy'} );
});

app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
});