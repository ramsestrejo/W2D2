let http = require( "http" );
const PORT = 3000;

let resources = {
	"/trick" : "don't you there",
	"/treat" : "enjoy your treat"
}

function handleRequest( request , response ) {
	if ( resources[ request.url ]) {
		response.end( resources[ request.url ] );
	}
	else {
		response.statusCode = 404;
		response.end( "I have no idea what you are looking for");
	}
	
}

let httpServer = http.createServer( handleRequest );

httpServer.listen( PORT , function onServerStart ( ) {
	console.log( "HTTP server started on port " , PORT );
})



