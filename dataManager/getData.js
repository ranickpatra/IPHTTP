const fileOperations = require('../file_operations');




// read the file
var read_file = (file_hash) => {
    fileOperations.readData.read(file_hash);
}




module.exports = {
    read_file: read_file,
}