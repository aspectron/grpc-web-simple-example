const gRPCWeb = new FlowGRPCWeb({ });

gRPCWeb.on("ready", (clients)=>{
	console.log("gRPCWeb::::clients", clients)
	let {RPC} = clients;

	/*
	let addresses = ["xyz", "abc"];
	RPC.getUTXOs({addresses}, (err, result)=>{
		console.log("getUTXOs:err, result", err, result)
	})
	*/

	const stream = RPC.MessageStream();
	console.log("stream", stream)
	stream.on("data", (data)=>{
		console.log("stream data", data)
	})
	stream.on("end", ()=>{
		console.log("stream end")
	});

	stream.write({
		getUTXOsByAddressRequest:{}
	})

	window.testStream = (data)=>{
		stream.write(data)
	}
})
