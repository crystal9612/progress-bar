const http = require('http')

const requestListener = function (req, originalRes) {
  http.get('http://pb-api.herokuapp.com/bars', res => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        console.log(parsedData);
        originalRes.writeHead(200, { 'Content-Type': 'application/json' });
        originalRes.end(JSON.stringify(parsedData));
      } catch (e) {
        console.error(e.message);
      }
    });
  })

}

const server = http.createServer(requestListener);
server.listen(8080);
