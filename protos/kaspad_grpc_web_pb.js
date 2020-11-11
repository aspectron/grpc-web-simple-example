/**
 * @fileoverview gRPC-Web generated client stub for kaspad
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.kaspad = require('./kaspad_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.kaspad.RPCClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.kaspad.RPCPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaspad.HelloRequest,
 *   !proto.kaspad.HelloReply>}
 */
const methodDescriptor_RPC_sayHello = new grpc.web.MethodDescriptor(
  '/kaspad.RPC/sayHello',
  grpc.web.MethodType.UNARY,
  proto.kaspad.HelloRequest,
  proto.kaspad.HelloReply,
  /**
   * @param {!proto.kaspad.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaspad.HelloReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaspad.HelloRequest,
 *   !proto.kaspad.HelloReply>}
 */
const methodInfo_RPC_sayHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaspad.HelloReply,
  /**
   * @param {!proto.kaspad.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaspad.HelloReply.deserializeBinary
);


/**
 * @param {!proto.kaspad.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaspad.HelloReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaspad.HelloReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaspad.RPCClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaspad.RPC/sayHello',
      request,
      metadata || {},
      methodDescriptor_RPC_sayHello,
      callback);
};


/**
 * @param {!proto.kaspad.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaspad.HelloReply>}
 *     Promise that resolves to the response
 */
proto.kaspad.RPCPromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaspad.RPC/sayHello',
      request,
      metadata || {},
      methodDescriptor_RPC_sayHello);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaspad.RepeatHelloRequest,
 *   !proto.kaspad.HelloReply>}
 */
const methodDescriptor_RPC_sayRepeatHello = new grpc.web.MethodDescriptor(
  '/kaspad.RPC/sayRepeatHello',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.kaspad.RepeatHelloRequest,
  proto.kaspad.HelloReply,
  /**
   * @param {!proto.kaspad.RepeatHelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaspad.HelloReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaspad.RepeatHelloRequest,
 *   !proto.kaspad.HelloReply>}
 */
const methodInfo_RPC_sayRepeatHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaspad.HelloReply,
  /**
   * @param {!proto.kaspad.RepeatHelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaspad.HelloReply.deserializeBinary
);


/**
 * @param {!proto.kaspad.RepeatHelloRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.kaspad.HelloReply>}
 *     The XHR Node Readable Stream
 */
proto.kaspad.RPCClient.prototype.sayRepeatHello =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/kaspad.RPC/sayRepeatHello',
      request,
      metadata || {},
      methodDescriptor_RPC_sayRepeatHello);
};


/**
 * @param {!proto.kaspad.RepeatHelloRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.kaspad.HelloReply>}
 *     The XHR Node Readable Stream
 */
proto.kaspad.RPCPromiseClient.prototype.sayRepeatHello =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/kaspad.RPC/sayRepeatHello',
      request,
      metadata || {},
      methodDescriptor_RPC_sayRepeatHello);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kaspad.UTXOsRequest,
 *   !proto.kaspad.UTXOsReply>}
 */
const methodDescriptor_RPC_getUTXOs = new grpc.web.MethodDescriptor(
  '/kaspad.RPC/getUTXOs',
  grpc.web.MethodType.UNARY,
  proto.kaspad.UTXOsRequest,
  proto.kaspad.UTXOsReply,
  /**
   * @param {!proto.kaspad.UTXOsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaspad.UTXOsReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kaspad.UTXOsRequest,
 *   !proto.kaspad.UTXOsReply>}
 */
const methodInfo_RPC_getUTXOs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kaspad.UTXOsReply,
  /**
   * @param {!proto.kaspad.UTXOsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kaspad.UTXOsReply.deserializeBinary
);


/**
 * @param {!proto.kaspad.UTXOsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.kaspad.UTXOsReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.kaspad.UTXOsReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.kaspad.RPCClient.prototype.getUTXOs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/kaspad.RPC/getUTXOs',
      request,
      metadata || {},
      methodDescriptor_RPC_getUTXOs,
      callback);
};


/**
 * @param {!proto.kaspad.UTXOsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.kaspad.UTXOsReply>}
 *     Promise that resolves to the response
 */
proto.kaspad.RPCPromiseClient.prototype.getUTXOs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/kaspad.RPC/getUTXOs',
      request,
      metadata || {},
      methodDescriptor_RPC_getUTXOs);
};


module.exports = proto.kaspad;

