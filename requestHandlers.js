var exec = require("child_process").exec;

function start(res){
  console.log("Request handler 'start' was called");

  exec("ls -lah", function(err,stdout,stderr){
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.write(stdout);
    res.end();
  });
}

function upload(res){
  console.log("Request hander 'upload' was called");
  res.writeHead(200, {"Content-Type":"text/plain"});
  res.write("Hello Uploads!");
  res.end();
}

exports.start = start;
exports.upload = upload;
