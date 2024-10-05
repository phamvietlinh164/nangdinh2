const app = require('./server')

const server = app.listen(8000)

server.on('listening', () => console.log(`Listening on port 8000`))


