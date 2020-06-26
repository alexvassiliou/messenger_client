const { CreateStream, BroadcastStream, Connect, User } = require("./api/message_pb")
const { MessageServiceClient } = require("./api/message_grpc_web_pb");
const { Message } = require("google-protobuf");
var client = new MessageServiceClient('http://localhost:8080');

console.log("connection established");

// var id = "#1234USER";
// var name = "anon";
// var user = new user();
// user.id = id;
// user.name = name