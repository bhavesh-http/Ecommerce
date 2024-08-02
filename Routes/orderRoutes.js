const express = require('express');
const router = express.Router();
const Order = require('../Models/Order');

// Route to handle order creation
router.post('/order', async (req, res) => {
    const { name, address, paymentType, emiOption, cartItems, totalPrice } = req.body;

    const order = new Order({
        name,
        address,
        paymentType,
        emiOption,
        cartItems,
        totalPrice
    });

    try {
        const savedOrder = await order.save();
        res.status(201).send(savedOrder);
    } catch (error) {
        res.status(400).send(error);
    }
});

// GET all orders
// router.get('/orders', async (req, res) => {
//     try {
//         const orders = await Order.find();
//         res.status(200).send(orders);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// // GET a single order by ID
// router.get('/orders/:id', async (req, res) => {
//     try {
//         const order = await Order.findById(req.params.id);
//         if (!order) {
//             return res.status(404).send('Order not found');
//         }
//         res.status(200).send(order);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// // PUT update order by ID
// router.put('/orders/:id', async (req, res) => {
//     const { name, address, paymentType, emiOption, cartItems, totalPrice } = req.body;

//     try {
//         const order = await Order.findByIdAndUpdate(
//             req.params.id,
//             { name, address, paymentType, emiOption, cartItems, totalPrice },
//             { new: true, runValidators: true }
//         );

//         if (!order) {
//             return res.status(404).send('Order not found');
//         }

//         res.status(200).send(order);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// // DELETE order by ID
// router.delete('/orders/:id', async (req, res) => {
//     try {
//         const order = await Order.findByIdAndDelete(req.params.id);

//         if (!order) {
//             return res.status(404).send('Order not found');
//         }

//         res.status(200).send('Order deleted successfully');
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

module.exports = router;
