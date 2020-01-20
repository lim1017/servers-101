const http = require('http')

const kanyePage = requestType => `
  <h1>YEEZY</h1>
  <img src="https://media.giphy.com/media/14tvbepZ8vhU40/giphy.gif"/>
  <p>Request Type: ${requestType}</p>
`

const server = http.createServer((request, response) => {
  // console.log("REQUEST", request)
  if (request.method !== 'GET') {
    response.statusCode = 403
    response.end('You should not be sending those types of requests you naughty server')
  } else if (request.url === "/taylor") {
    response.end("Yo, Taylor, I’m really happy for you, I’mma let you finish. But Beyoncé had one of the best videos of all time.")
  } else if (request.url === '/teapot' ) {
    response.statusCode = 418
    response.end('I am a little teapot')
  } else if (request.url === '/kanye') {
    response.end(kanyePage(request.method))
  } else {
    response.statusCode = 404
    response.end()
  }
})

server.listen(1234, () => {
  console.log('I AM LISTENING ON 1234')
})