// const { json } = require('express');
// const fetch = require('node-fetch');
const request = require('request');

const carsController = {};

carsController.getCarData = (req, res, next) => {
//     fetch('https://api.api-ninjas.com/v1/cars?limit=2&model=camry')
//         .then((data) => data.json())
//         .then((data) => console.log(data))
//         .catch((err) => next(console.log(err)))

    var model = 'camry'
    request.get({
        url: 'https://api.api-ninjas.com/v1/cars?model=' + model,
        headers: {
            'X-Api-Key': 'qayVFSGHKPuHJOalrLsPKg==VRAAFI6T17RNZoYp'
        },
    }, function(error, response, body) {
        if(error) return console.error('Request failed:', error);
        else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
        else res.locals.camry = body;
    });
}

module.exports = carsController;