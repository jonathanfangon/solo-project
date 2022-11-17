const express = require('express');

const carsController = require('../controllers/carsController');

const router = express.Router();

router.get('/', 
    carsController.getCarData,
    (req, res) => {
        return res.send(res.locals.camry)
    }
);

module.exports = router;

