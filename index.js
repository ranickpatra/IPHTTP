const file_operations = require('./file_operations/');
const dataManager = require('./dataManager');
const Stream = require('stream');
const http = require('http');


dataManager.addData.add_file('./test.file');


http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'img/jpg' })
    // cretae a readable stream
    const readableStream = new Stream.Readable({read(size) {}});
    // pipe it to response
    readableStream.pipe(res);
    // read required data
    dataManager.getData.read_file(
        '4ce9558906b9ec9c8271154023a090d3d048a61818486f5d2c7b1985e3f28a80',
        readableStream);
    
}).listen(8080);

