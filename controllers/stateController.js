const State = require('../models/state');

exports.create = async(req, res, next) => {
    try {
        let {name} = req.body;
        const state = await State.create({name});
        res.status(201).json({
            status: 'success',
            data: state
        })
    } catch (error) {
        return next(error);
    }
}

exports.getAll = async(req, res, next) => {
    try {
        const states = await State.find().sort({name: 1});
        res.status(200).json({
            status: 'success',
            data: states
        })
    } catch (error) {
        return next(error);
    }
}