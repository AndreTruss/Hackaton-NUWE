const mongoose = require( 'mongoose' );

const MONGODB_URI = "mongodb://localhost:27017/hackaton-nuwe"

const connectDB = async() => {
    try {
        await mongoose.connect( MONGODB_URI );
        console.log("Database works correctly");

    } catch( err ) { throw err; }
}

module.exports = { connectDB }