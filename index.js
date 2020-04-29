const file_operations = require('./file_operations/');
const dataManager = require('./dataManager');
const Stream = require('stream');


// dataManager.addData.add_file('./teamviewer_15.4.4445_amd64.deb');

// // create a readable stream
// var readableStream = new Stream.Readable();
// readableStream._read = () => {}
// // pipe the stream with a writable stream
// readableStream.pipe(process.stdout);

// // read required data
// dataManager.getData.read_file('b1b3c97f0b6af71c57a4553aa3e073d6d2c57e983c05618da6e6b5866f06abb3',
//                      readableStream);





// const readableStream = new Stream.Readable();
// readableStream._read = () => {}

// const writableStream = new Stream.Writable();


// writableStream._write = (chunk, encoding, next) => {
//     console.log(chunk.toString())
//     next()
// }

// writableStream._write = () => {};

// writableStream._events =  (d) => {
//     console.log(d);
// };


// readableStream.pipe()

// readableStream.push('ping!')
// readableStream.push('pong!')

