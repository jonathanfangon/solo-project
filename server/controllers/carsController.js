// const { json } = require('express');
const fetch = require('node-fetch');

const carsController = {};

carsController.getCarData = (req, res, next) => {
    fetch('https://api.api-ninjas.com/v1/cars?limit=2&model=camry')
        .then((data) => data.json())
        .then((data) => res.locals.camry = data)
        .catch((err) => next(console.log(err)))
}

module.exports = carsController;