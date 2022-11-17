const express = require('express');

const carsController = require('../controllers/carsController');

const router = express.Router();

router.get('/', 
    carsController.getCarData,
    (req, res) => {
        return res.status(200).json(res.locals.camry)
    }
);

module.exports = router;

