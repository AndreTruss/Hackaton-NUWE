const notFoundRoute = ( req, res ) => {
  return res.status( 404 ).send({ message: `Url ${req.originalUrl} not found.` });
}

const validateBody = ( req, res, next ) => {
  const { name, registration_date } = req.body;
  
  if( name === undefined ){
      return res.status( 404 ).send( { message: "User not found" } );
  }

  if( name.length < 3 ) {
    return res.status( 400 ).send( { message: "User name has to be at least three characters long" } );
  }
  
  if( !(registration_date === undefined ) && isNaN( Date.parse( registration_date ) ) ) {
    return res.status( 404 ).send( { message: "Invalid date, right format YYYY-MM-dd or MM-dd-YYYY" } );
  }

  next();
}
    


module.exports = { notFoundRoute, validateBody }