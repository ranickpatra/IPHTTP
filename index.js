const file_operations = require('./file_operations/');
const dataManager = require('./dataManager');
const Stream = require('stream');
const http = require('http');
const server = require('./server');


// dataManager.addData.add_file('./teamviewer_15.5.3_amd64.deb');



server.server.startServer(8080, "Server started at port 8080.....", (res, content_hash, file_name) => {

    res.writeHead(200, { 'Content-Type': 'text/plain' })
    // cretae a readable stream
    const readableStream = new Stream.Readable({ read(size) { } });
    // pipe it to response
    readableStream.pipe(res);
    // read required data
    dataManager.getData.read_file(content_hash, readableStream);

});