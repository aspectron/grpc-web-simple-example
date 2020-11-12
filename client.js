const {
	UTXOsRequest, HelloRequest, RepeatHelloRequest,
	HelloReply, GetMempoolEntriesRequestMessage} = require('./protos/messages_pb.js');
//console.log("xxxxx", require('./protos/kaspad_pb.js'))
const {RPCClient} = require('./protos/messages_grpc_web_pb.js');
const grpcWeb = require('grpc-web');
window.grpcWeb = grpcWeb;

const StreamResponseInterceptor = function() {};

/**
 * @template REQUEST, RESPONSE
 * @param {!Request<REQUEST, RESPONSE>} request
 * @param {function(!Request<REQUEST,RESPONSE>):!ClientReadableStream<RESPONSE>}
 *     invoker
 * @return {!ClientReadableStream<RESPONSE>}
 */
StreamResponseInterceptor.prototype.intercept = function(request, invoker) {
  const InterceptedStream = function(stream) {
    this.stream = stream;
  };
  InterceptedStream.prototype.on = function(eventType, callback) {
    if (eventType == 'data') {
      const newCallback = (response) => {
        response.setMessage('[Intcpt Resp1]'+response.getMessage());
        callback(response);
      };
      this.stream.on(eventType, newCallback);
    } else {
      this.stream.on(eventType, callback);
    }
    return this;
  };
  var reqMsg = request.getRequestMessage();
  reqMsg.setMessage('[Intcpt Req1]'+reqMsg.getMessage());
  return new InterceptedStream(invoker(request));
};


const client = new RPCClient(
	'http://' + window.location.hostname + ':8080',
	null, null);

console.log("RPCClient", client, client.messageStream, client.client_)
const reqMSG = new GetMempoolEntriesRequestMessage();
const stream = client.messageStream(reqMSG, (...args)=>{
    console.log("MessageStream fn", args)
});

console.log("stream", stream)

stream.on("data", (data)=>{
	console.log("datadatadata", data)
	if(data.payload) {
        let name = data.payload;
        let payload = data[name];
        let ident = name.replace(/^get|Response$/ig,'').toLowerCase();
        //this.handleIntake({name, payload, ident });
        console.log("name", {name, payload, ident})
    }
})
let req = {
	//getConnectedPeerInfoRequest:{}
	//getBlockDagInfoRequest:{}
    getMempoolEntriesRequest:{}
}
//console.log(new Date,'req:',req);
//stream.write(req);

/*
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

console.log("client", client)
/*

let utxosRequest = new UTXOsRequest();
utxosRequest.setAddressesList(["xyz", "abc"])
client.getUTXOs(utxosRequest, {}, (err, response)=>{
	console.log("getUTXOs:err, response", err, response)
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
*/
