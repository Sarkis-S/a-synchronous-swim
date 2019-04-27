const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messagesQueue = require('./messageQueue');
// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////
module.exports.randomMove=()=>{
  var arr=['left', 'right', 'up', 'down'];
  return arr[Math.floor(Math.random()*arr.length)];
};


module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  // res.writeHead(200, headers);
  if(req.method==="OPTIONS"){
    res.writeHead(200, headers);
    res.end();
  };


  // if(req.method==='GET'&&module.exports.backgroundImageFile===path.join('.', 'spec', 'missing.jpg')){
  //   res.writeHead(404, headers);
  //   return res.end();
  // };



  const File=path.join('.', 'background.jpg');
  if(req.method==='GET'){

  fs.exists(File,function(){
    var exists=module.exports.backgroundImageFile===File?true:false;
    if(exists){
      res.writeHead(200,{
        'Content-type': 'image'
      })

    }else{
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.end("ERROR File does not exist");

    }

    next();
    })
    //module.exports.backgroundImageFile = path.join('.', 'background.jpg');

    if(req.method==='POST'){
      res.write(formData);
      //save the file in directory
      //if we get request post
      //not sure how to make them send back
    }

    res.writeHead(200, headers);//404 200
    res.end();

    // res.end(module.exports.randomMove())//end is the
  };
};
