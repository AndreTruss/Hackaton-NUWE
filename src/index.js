const express = require( 'express' );
const { connectDB } = require( './service/Database' );
const router = require( './controllers/Route' );
const { notFoundRoute } = require( './middleware/Middleware')
const PORT = 3000;

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use( '/', router );
app.use( notFoundRoute );

app.listen( PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
