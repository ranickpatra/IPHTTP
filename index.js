const file_operations = require('./file_operations/');
const dataManager = require('./dataManager');
const Stream = require('stream');
const http = require('http');
const server = require('./server');


// dataManager.addData.add_file('./ii.jpg');



server.server.startServer(8080, "Server started at port 8080.....", (res, content_hash, file_name) => {
    // get file meta data
    let file_meta = file_operations.fileManager.get_file_meta_data(content_hash);
    // write the head
    res.writeHead(200, { 
        'Content-Type': file_meta['mime'],
        'Content-disposition': 'filename='+ (file_name != null ? file_name : file_meta['name'])
     });
    
    // cretae a readable stream
    const readableStream = new Stream.Readable({ read(size) { } });
    // pipe it to response
    readableStream.pipe(res);
    // read required data
    dataManager.getData.read_file(content_hash, readableStream);

});