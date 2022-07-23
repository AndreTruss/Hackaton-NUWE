const express = require( 'express' );
const userController = require( './Controller' );
const { validateBody } = require( '../middleware/Middleware')

const router = express.Router();

// Create a new user
router.post("/createUser", validateBody, userController.createUser); // middleware validate body
// Show all users
router.get("/getAllUsers", userController.getAllUsers);
// Show one user by id
router.get("/getOneUser/:id", userController.getOneUser);
// Update one user by id
router.put("/updateUser/:id", validateBody, userController.updateUser); // middleware validate body
// Delete one user by id
router.delete("/deleteUser/:id", userController.deleteUser);

module.exports = router;