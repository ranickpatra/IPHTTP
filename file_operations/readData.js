const fs = require('fs');
const fileManager = require('./fileManager');

// return a promise with a 
var read = (file_hash, readable_stream) => {
    // get file_obj path
    let file_obj_path = fileManager.get_file_obj_path_detailse(file_hash);
    // read trees list
    let trees = fs.readFileSync(file_obj_path['file_path']).toString().trim();
    trees = trees.split('\n');
    // get last tree hash
    let tree = trees[trees.length - 1].split('\t')[1];

    let objs = fs.readFileSync(fileManager.get_obj_path_detailse(tree)['file_path'])
                .toString().trim().split('\n');


    // read from each object    
    objs.forEach(obj => {
        // get tdhe hash
        obj = obj.split('\t')[1];
        // read content of file
        let content = fs.readFileSync(fileManager.get_obj_path_detailse(obj)['file_path']);
        // put data into the stream
        readable_stream.push(content);
    });



}




module.exports = {
    read: read,
}


