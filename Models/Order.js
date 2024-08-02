// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    paymentType: {
        type: String,
        required: true
    },
    emiOption: {
        type: String,
        required: true
    },
    cartItems: [
        {
            name: String,
            price: String,
            quantity: Number,
            src: String
        }
    ],
    totalPrice: {
        type: Number,
        required: true
    }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
