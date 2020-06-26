/**
 * @fileoverview gRPC-Web generated client stub for messageapi
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.messageapi = require('./message_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.messageapi.MessageServiceClient =
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
proto.messageapi.MessageServicePromiseClient =
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
 *   !proto.messageapi.Connect,
 *   !proto.messageapi.Message>}
 */
const methodDescriptor_MessageService_CreateStream = new grpc.web.MethodDescriptor(
  '/messageapi.MessageService/CreateStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.messageapi.Connect,
  proto.messageapi.Message,
  /**
   * @param {!proto.messageapi.Connect} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.messageapi.Message.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.messageapi.Connect,
 *   !proto.messageapi.Message>}
 */
const methodInfo_MessageService_CreateStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.messageapi.Message,
  /**
   * @param {!proto.messageapi.Connect} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.messageapi.Message.deserializeBinary
);


/**
 * @param {!proto.messageapi.Connect} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.messageapi.Message>}
 *     The XHR Node Readable Stream
 */
proto.messageapi.MessageServiceClient.prototype.createStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/messageapi.MessageService/CreateStream',
      request,
      metadata || {},
      methodDescriptor_MessageService_CreateStream);
};


/**
 * @param {!proto.messageapi.Connect} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.messageapi.Message>}
 *     The XHR Node Readable Stream
 */
proto.messageapi.MessageServicePromiseClient.prototype.createStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/messageapi.MessageService/CreateStream',
      request,
      metadata || {},
      methodDescriptor_MessageService_CreateStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.messageapi.Message,
 *   !proto.messageapi.Close>}
 */
const methodDescriptor_MessageService_BroadcastStream = new grpc.web.MethodDescriptor(
  '/messageapi.MessageService/BroadcastStream',
  grpc.web.MethodType.UNARY,
  proto.messageapi.Message,
  proto.messageapi.Close,
  /**
   * @param {!proto.messageapi.Message} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.messageapi.Close.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.messageapi.Message,
 *   !proto.messageapi.Close>}
 */
const methodInfo_MessageService_BroadcastStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.messageapi.Close,
  /**
   * @param {!proto.messageapi.Message} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.messageapi.Close.deserializeBinary
);


/**
 * @param {!proto.messageapi.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.messageapi.Close)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.messageapi.Close>|undefined}
 *     The XHR Node Readable Stream
 */
proto.messageapi.MessageServiceClient.prototype.broadcastStream =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/messageapi.MessageService/BroadcastStream',
      request,
      metadata || {},
      methodDescriptor_MessageService_BroadcastStream,
      callback);
};


/**
 * @param {!proto.messageapi.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.messageapi.Close>}
 *     A native promise that resolves to the response
 */
proto.messageapi.MessageServicePromiseClient.prototype.broadcastStream =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/messageapi.MessageService/BroadcastStream',
      request,
      metadata || {},
      methodDescriptor_MessageService_BroadcastStream);
};


module.exports = proto.messageapi;

