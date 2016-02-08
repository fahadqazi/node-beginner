function start(){
  console.log("Request handler 'start' was called");

  function sleep(milliSeconds){
    var startTime = new Date().getTime();
    while(new Date().getTime() < startTime + milliSeconds);
  }

  sleep(10000);
  return "Hello Start!";
}

function upload(){
  console.log("Request hander 'upload' was called");
  return "Hello Uploads";
}

exports.start = start;
exports.upload = upload;
