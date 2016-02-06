function start(){
  console.log("Request handler 'start' was called");
  return "Hello Start!";
}

function upload(){
  console.log("Request hander 'upload' was called");
  return "Hello Uploads";
}

exports.start = start;
exports.upload = upload;
