
const PROTO_PATH = __dirname + '/protos/kaspad.proto';

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true
});

const kaspadProto = grpc.loadPackageDefinition(packageDefinition).kaspad;

function main() {
	const client = new kaspadProto.RPC('localhost:50051',
					grpc.credentials.createInsecure());
	let name;
	if (process.argv.length >= 3) {
		name = process.argv[2];
	} else {
		name = 'world';
	}

	/*
	client.sayHello({name}, (err, response)=>{
		console.log('Greeting:', response.message);
	});
	*/
	let addresses = ["xyz", "abc"];
	client.GetUTXOs({addresses}, (err, response)=>{
		let {utxos} = response;
		console.log('GetUTXOs:result:', utxos);
	});
}

main();
