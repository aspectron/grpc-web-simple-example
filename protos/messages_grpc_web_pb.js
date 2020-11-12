/**
 * @fileoverview gRPC-Web generated client stub for protowire
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.protowire = require('./messages_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.protowire.P2PClient =
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
proto.protowire.P2PPromiseClient =
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
proto.protowire.RPCClient =
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
proto.protowire.RPCPromiseClient =
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
 *   !proto.protowire.KaspadMessage,
 *   !proto.protowire.KaspadMessage>}
 */
const methodDescriptor_RPC_MessageStream = new grpc.web.MethodDescriptor(
  '/protowire.RPC/MessageStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.protowire.KaspadMessage,
  proto.protowire.KaspadMessage,
  /**
   * @param {!proto.protowire.KaspadMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protowire.KaspadMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.protowire.KaspadMessage,
 *   !proto.protowire.KaspadMessage>}
 */
const methodInfo_RPC_MessageStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.protowire.KaspadMessage,
  /**
   * @param {!proto.protowire.KaspadMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protowire.KaspadMessage.deserializeBinary
);


/**
 * @param {!proto.protowire.KaspadMessage} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.protowire.KaspadMessage>}
 *     The XHR Node Readable Stream
 */
proto.protowire.RPCClient.prototype.messageStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/protowire.RPC/MessageStream',
      request,
      metadata || {},
      methodDescriptor_RPC_MessageStream);
};


/**
 * @param {!proto.protowire.KaspadMessage} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.protowire.KaspadMessage>}
 *     The XHR Node Readable Stream
 */
proto.protowire.RPCPromiseClient.prototype.messageStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/protowire.RPC/MessageStream',
      request,
      metadata || {},
      methodDescriptor_RPC_MessageStream);
};


module.exports = proto.protowire;

