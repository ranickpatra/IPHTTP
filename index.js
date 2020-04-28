const file_operations = require('./file_operations/');
const dataManager = require('./dataManager');
const fs = require('fs');


dataManager.addData.add_file('./test.file');




// function test() {
//     var hash = crypto.createHash('sha256');
//     fs.createReadStream("test.file", { highWaterMark: 32*1024 }).on('data', (chunk) => {
//         console.log("new chunl received");
//         hash.update(chunk);
//     }).on('end', () => {
//         console.log(hash.digest('hex'));
//     });
// }

// function fileHash(filename, algorithm = 'md5') {
//     return new Promise((resolve, reject) => {
//         // Algorithm depends on availability of OpenSSL on platform
//         // Another algorithms: 'sha1', 'md5', 'sha256', 'sha512' ...
//         let shasum = crypto.createHash(algorithm);
//         try {
//             let s = fs.ReadStream(filename)
//             s.on('data', function (data) {
//                 shasum.update(data)
//             })
//             // making digest
//             s.on('end', function () {
//                 const hash = shasum.digest('hex')
//                 return resolve(hash);
//             })
//         } catch (error) {
//             return reject('calc fail');
//         }
//     });
// }

