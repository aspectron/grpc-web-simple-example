const {
	UTXOsRequest, HelloRequest, RepeatHelloRequest,
	HelloReply} = require('./protos/kaspad_pb.js');
//console.log("xxxxx", require('./protos/kaspad_pb.js'))
const {RPCClient} = require('./protos/kaspad_grpc_web_pb.js');
//console.log("UTXOsRequest", new UTXOsRequest)

const client = new RPCClient(
	'http://' + window.location.hostname + ':8080',
	null, null);

// simple unary call
let request = new HelloRequest();
request.setName('World');

client.sayHello(request, {}, (err, response) => {
	if (err) {
		console.log(`Unexpected error for sayHello: code = ${err.code}` +
		`, message = "${err.message}"`);
	} else {
		console.log(response.getMessage());
	}
});

let utxosRequest = new UTXOsRequest();
utxosRequest.setAddressesList(["xyz", "abc"])
client.getUTXOs(utxosRequest, {}, (err, response)=>{
	let utxos = response.getUtxosList().map(o=>o.toObject())
	console.log('GetUTXOs:result:', utxos, response);
});


// server streaming call
let streamRequest = new RepeatHelloRequest();
streamRequest.setName('World');
streamRequest.setCount(5);

let stream = client.sayRepeatHello(streamRequest, {});
stream.on('data', (response) => {
	console.log(response.getMessage());
});
stream.on('error', (err) => {
	console.log(`Unexpected stream error: code = ${err.code}` +
	`, message = "${err.message}"`);
});
stream.on('end', () => {
	console.log('stream ended');
});
