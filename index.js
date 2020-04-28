const file_operations = require('./file_operations/');
const dataManager = require('./dataManager');
const Stream = require('stream');


// dataManager.addData.add_file('./test.file');

// create a readable stream
var readableStream = new Stream.Readable();
readableStream._read = () => {}
// pipe the stream with a writable stream
readableStream.pipe(process.stdout);

// read required data
dataManager.getData.read_file('4ce9558906b9ec9c8271154023a090d3d048a61818486f5d2c7b1985e3f28a80',
                     readableStream);





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

