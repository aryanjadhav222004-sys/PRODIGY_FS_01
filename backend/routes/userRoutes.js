const express = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/userController');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

const router = express.Router();

// Get current user profile
router.get('/profile', authenticateToken, userController.getProfile);

// Update user profile
router.put(
  '/profile',
  authenticateToken,
  [
    body('username').optional().trim().isLength({ min: 3 }),
    body('email').optional().isEmail()
  ],
  userController.updateProfile
);

// Get all users (Admin only)
router.get('/all', authenticateToken, authorizeRole(['admin']), userController.getAllUsers);

// Delete user (Admin only)
router.delete('/:id', authenticateToken, authorizeRole(['admin']), userController.deleteUser);

module.exports = router;
