const express = require('require');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/express_backend', (req, res) => {
    res.json({message: 'Backend Boy'});
});

app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
});