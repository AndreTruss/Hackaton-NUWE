const mongoose = require( 'mongoose' );

//const MONGODB_URI = "mongodb://localhost:27017/hackaton-nuwe"
const MONGODB_URI = "mongodb+srv://AndreTruss:bpbUGW0U6Gxl8kOE@cluster0.lnihe.mongodb.net/hackaton?retryWrites=true&w=majority"

const connectDB = async() => {
    try {
        await mongoose.connect( MONGODB_URI );
        console.log("Database works correctly");

    } catch( err ) { throw err; }
}

module.exports = { connectDB }