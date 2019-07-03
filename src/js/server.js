//server

const http = require('http');
const fs =   require('fs');


const server = http.createServer(function(request, response){
  console.log(request.method, request.url);
  if( request.url === '/home' ) {
    const html = fs.readFileSync('../index.html', 'utf8');
    response.end(html);

  } else if( request.url === '/main.css' ) {
    const css = fs.readFileSync('../style/main.css', 'utf8');
    response.end(css);

  } else if( request.url === '/main.js' ) {
    const js = fs.readFileSync('./main.js', 'utf8');
    response.end(js);

  } else if( request.url === '/') {
    const error = fs.readFileSync('../404.html', 'utf8');
    response.end(error);

  } else {
    response.end('');
  }
});

server.listen(process.env.PORT || 3000);
console.log('server started');
