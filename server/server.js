const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
// const mysql = require('mysql');
const apiRouter = require('./routes/api');
const request = require('request');
const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../src')));
// mongoose.connect('mongodb+srv://jonathan:<JMariano02>@cars.ncyrhj9.mongodb.net/?retryWrites=true&w=majority');
const PORT = process.env.PORT || 3000;

//route handler


// app.use('/api', apiRouter);



app.get('/api', async (req, res) => {
    var model = 'camry'
    request.get({
        url: 'https://api.api-ninjas.com/v1/cars?model=' + model,
        headers: {
            'X-Api-Key': 'qayVFSGHKPuHJOalrLsPKg==VRAAFI6T17RNZoYp'
        },
    }, function(error, response, body) {
        if(error) return console.error('Request failed:', error);
        else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
        else res.send(body);
    });
    // res.send(res.locals.camry);
    // res.send('Welcome to my backend!');
});

//catch-all
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

//global err handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
});

module.exports = app;

//**mongodb**
// const MONGO_URI = 'mongodb+srv://jono:<express>@cluster0.lx6j9u5.mongodb.net/?retryWrites=true&w=majority';

// mongoose.connect(MONGO_URI, {
//     // options for the connect method to parse the URI
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // sets the name of the DB that our collections are part of
//     dbName: 'cars'
// })

// const Schema = mongoose.Schema;

// const carsSchema = new Schema({
//     model: String,
//     make: String,
//     transmission: String,
//     price: Number,
//     drivetrain: String
// })

// const Cars = mongoose.model('cars', carsSchema);


//**mysql */
// const con = mysql.createConnection({
//     host: "localhost",
//     user: "jonathan",
//     password: "expressjs"
//   });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE mydb", function(err, res) {
//         if(err) throw err;
//         console.log("Database created!");
//     })
//   });

