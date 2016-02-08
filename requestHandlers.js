var exec = require("child_process").exec;

function start(){
  console.log("Request handler 'start' was called");

  var content = "empty";

  exec("ls -lah", function(err,stdout,stderr){
    content = stdout;
  });

  return content;
}

function upload(){
  console.log("Request hander 'upload' was called");
  return "Hello Uploads";
}

exports.start = start;
exports.upload = upload;
