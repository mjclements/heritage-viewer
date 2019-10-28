const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'webgl_loader_stl.html')
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    default:
      sendFile( response, 'bundle.js')
      break
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     file = content
     response.end( content, 'utf-8' )
   })
}
