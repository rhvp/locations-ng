const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    state: {
        type: String,
        required: true
    },

    capital: {
        type: Boolean,
        default: false
    },

    lat: Number,

    lng: Number
}, {
    timestamps: true
})

module.exports = mongoose.model('city', citySchema);