const express = require('express');

// create an express app
const app = express();


// start the server
var startServer = (port=8080, server_start_msg=null, callback) => {
    // get request
    app.get(/^(.+)$/, (req, res) => {
        let content_hash = req.params[0].split('/')[1];  // get the hash of content
        // if not hash thenn return
        if(content_hash.length != 64) {
            res.send(null); // blank response if no hash
            return;
        }
        let file_name = null; // set initial file name null
        // check for file name
        if(req.query['filename'] != undefined)
            file_name = req.query['filename'];
        // call the callback function
        callback(res, content_hash, file_name);
    }).listen(port, () => {     // start listening
        // server start message
        if(server_start_msg != null)
            console.log(server_start_msg);
    });
}



module.exports = {
    startServer: startServer,
}