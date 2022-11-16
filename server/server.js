const express = require('express');
const path = require('path');

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