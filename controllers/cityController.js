const City = require('../models/city');
const State = require('../models/state');

exports.create = async(req, res, next) => {
    try {
        let {name, capital, lat, lng, state} = req.body;
        const city = await City.create({name, capital, lat, lng, state});
        res.status(201).json({
            status: 'success',
            data: city
        })
    } catch (error) {
        return next(error);
    }
}

exports.findAll = async(req, res, next) => {
    try {
        const cities = await City.find();
        res.status(200).json({
            status: 'success',
            count: cities.length,
            data: cities
        })
    } catch (error) {
        return next(error);
    }
}

exports.findByState = async(req, res, next) => {
    try {
        const cities = await City.find({state: req.params.state})
        res.status(200).json({
            status: 'success',
            count: cities.length,
            data: cities
        })
    } catch (error) {
        return next(error);
    }
}