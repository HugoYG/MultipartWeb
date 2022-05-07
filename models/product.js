const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    brand: {
        required: true,
        type: String
    },
    year: {
        required: true,
        type: Number
    },
    isOnSale: {
        required: true,
        type: Boolean
    },
    dateAdded: {
        required: true,
        type: Date
    },
    dateToRemove: {
        required: true,
        type: Date
    },
    discount: {
        required: false,
        type: Number
    },
    addedBy: {
        required: true,
        type: String
    },
    addedById: {
        required: true,
        type: String
    },
    editedAt: {
        required: false,
        type: Date
    }
})

module.exports = mongoose.model('Product', productSchema)
