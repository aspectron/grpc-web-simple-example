const SocketIO = require('socket.io');
const express = require('express');
const bodyParser = require('body-parser')
const EventEmitter = require("events");
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require("path");
const appFolder = __dirname;

const {FlowGRPCProxy} = require('@aspectron/flow-grpc-proxy')({
	//express,//<-- just for static files (staticFiles config)
	//socketio
	grpc,
	protoLoader
});


const createServer = (port, app, host="localhost")=>{
	const server = require('http').createServer(app);
	const args = [port];
	if(host)
		args.push(host)
	args.push(e=>{
		console.log(`Example app listening at http://${host||'localhost'}:${port}`);
	})
	server.listen(...args);
	return server
}


const app = express();
const port = 3000;


app.get('/', (req, res) => {
	res.sendFile(path.join(appFolder, 'index.html'))
})
app.use('/', express.static(path.join(appFolder, '/')));

const server = createServer(port, app);

const io = SocketIO(server, {
	serveClient: true,
	// below are engine.IO options
	pingInterval: 10000,
	pingTimeout: 5000,
	cookie: false
});


const gProxy = new FlowGRPCProxy(__dirname, {
	io,
	app:false,
	config:{
		//websocketPath:"grpc",
		/*
		staticFiles:{
			'/':'/'
		},
		*/
		grpc:{
			protoPath: __dirname + '/protos/messages.proto',
			server:'localhost:16210',
			packageKey:'protowire'
		}
	}
});

gProxy.init();


