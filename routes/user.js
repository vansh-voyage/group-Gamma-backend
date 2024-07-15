const express = require('express');
const router = express.Router();
const { createUser, updateUser, deleteUser,getUsers } = require('../controllers/user');

// Define routes
router.get('/get',getUsers)
router.post('/create', createUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;
