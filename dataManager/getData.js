const fileOperations = require('../file_operations');




// read the file
var read_file = (file_hash, readable_stream) => {
    fileOperations.readData.read(file_hash, readable_stream);
}




module.exports = {
    read_file: read_file,
}