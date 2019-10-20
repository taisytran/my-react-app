const jsonServer = require('json-server')
const cors = require('cors')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({ noCors: true })

server.use(middlewares)
server.use(cors())
server.use(router)
server.listen(3004, () => {
	console.log('JSON Server is running')
})

