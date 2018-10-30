let express = require( "express" );
let usersDB = require( "./data/users" );
let bodyParser = require( "body-parser" );
const PORT = 8080;

let app = express( );

app.set( "view engine" , "ejs" );
app.use( bodyParser.urlencoded( { extended : true } ) );

app.get( "/" , function ( req , res ) {
	res.render( "filter" , { } );
});

app.get( "/users" , function ( req , res ) {
	res.render( "users" , { users : usersDB.getAll( ) });
	//console.log( usersDB.getAll( ) );
	//res.json( usersDB.getAll( ) );
	//.res.send( "the list of users should be here" );
});

app.post( "/users" , function ( req , res ) {
	res.render( "users" , { users : usersDB.findByName( req.body.filter ) });
});

app.get( "/users/:id" , function ( req , res ) {
	res.render( "user" , { user : usersDB.getById( req.params.id ) } );
});



app.listen( PORT , function onServerStart( ) {
	console.log ( "Express server started on port  ", PORT);
})