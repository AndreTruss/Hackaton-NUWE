const User = require("../service/Schema"); 

// ---

const createUser = async (req, res) => {
    const { name } = req.body; 
    
    try {

        const userExistsYet = await User.find({ name })
        if ( ! userExistsYet.length == 0 ) {
            return res.status( 409 ).send( { message: "User already exists" } );
        }
        
        const user = new User( { name, } );
        await user.save();
        res.status( 201 ).send({ user: user });

    } catch (err) { res.status( 500 ).send( { error: "Error saving user" } ); }
}

// ---

const getAllUsers = async (req, res) => {
    
    try {
        
        const allUsers = await User.find({});
        res.status( 201 ).send({ user: allUsers });

    } catch (err) { res.status( 500 ).send( { error: "Error showing user" } ); }
}

// ---

const getOneUser = async (req, res) => {
    const userId = req.params.id;
    
    try {
        
        const oneUser = await User.findById( userId );
        if( oneUser == null ){
            return res.status( 404 ).send( { message: "User id not found" } );
        }
        res.status( 201 ).send({ user: oneUser });

    } catch (err) { res.status( 500 ).send( { error: "Error showing user" } ); }
}

// ---

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { name } = req.body;

    try {

        const userExistsYet = await User.find({ name })
        if ( ! userExistsYet.length == 0 ) {
            return res.status( 409 ).send( { message: "User already exists" } );
        }
        
        const updateUser = await User.findByIdAndUpdate( userId, { name: name}, { new: true } );
        if( updateUser == null ){
            return res.status( 404 ).send( { message: "User id not found" } );
        }
        res.status( 201 ).send({ user: updateUser });

    } catch (err) { res.status( 500 ).send( { error: "Error updating user" } ); }
}

// ---

const deleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        
        const deleteUser = await User.findByIdAndDelete( userId );
        if( deleteUser == null ){
            return res.status( 404 ).send( { message: "User id not found" } );
        }
        res.status( 201 ).send({ user: deleteUser });

    } catch (err) { res.status( 500 ).send( { error: "Error deleting user" } ); }
}

module.exports = { createUser, getAllUsers, getOneUser, updateUser, deleteUser }