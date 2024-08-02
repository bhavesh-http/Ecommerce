const express = require('express');
const router = express.Router();
const User = require('../Models/User');

// Route to handle user registration
router.post('/register', async (req, res) => {
  const { name, mobile, address, email, gender, age } = req.body;

  const user = new User({
    name,
    mobile,
    address,
    email,
    gender,
    age
  });

  try {
    const savedUser = await user.save();
    res.status(201).send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET all users
// router.get('/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).send(users);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // GET a single user by ID
// router.get('/users/:id', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).send('User not found');
//     }
//     res.status(200).send(user);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // PUT update user by ID
// router.put('/users/:id', async (req, res) => {
//   const { name, mobile, address, email, gender, age } = req.body;

//   try {
//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { name, mobile, address, email, gender, age },
//       { new: true, runValidators: true }
//     );

//     if (!user) {
//       return res.status(404).send('User not found');
//     }

//     res.status(200).send(user);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // DELETE user by ID
// router.delete('/users/:id', async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);

//     if (!user) {
//       return res.status(404).send('User not found');
//     }

//     res.status(200).send('User deleted successfully');
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

module.exports = router;
