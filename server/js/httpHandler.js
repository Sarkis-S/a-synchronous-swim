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
    return res.end();
  };
  // if(req.method==='GET'&&dataType==='image'){

  // }

  if(req.method==='GET'){



    res.writeHead(200, headers);


    return res.end(module.exports.randomMove())
  };
};
