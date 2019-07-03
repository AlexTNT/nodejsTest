//server

const http = require('http');
const fs =   require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer(function(request, response){
  console.log(request.method, request.url);
  if( request.url === '/home' ) {
    const html = fs.readFileSync('index.html', 'utf8');
    response.end(html);

  } else if( request.url === '/main.css' ) {
    const css = fs.readFileSync('css/main.css', 'utf8');
    response.end(css);

  } else if( request.url === '/main.js' ) {
    const js = fs.readFileSync('js/main.js', 'utf8');
    response.end(js);

  } else if( request.url === '/') {
    const error = fs.readFileSync('404.html', 'utf8');
    response.end(error);

  } else {
    const html = fs.readFileSync('index.html', 'utf8');
    response.end(html);
  }
});


server.listen(port);
console.log('server started');
