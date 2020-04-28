const fs = require('fs');
const fileManager = require('./fileManager');

// return a promise with a 
var read = (file_hash) => {
    // get file_obj path
    let file_obj_path = fileManager.get_file_obj_path_detailse(file_hash);
    // read trees list
    let trees = fs.readFileSync(file_obj_path['file_path'], 'utf-8').trim();
    trees = trees.split('\n');
    // get last tree hash
    let tree = trees[trees.length - 1].split('\t')[1];

    let objs = fs.readFileSync(fileManager.get_obj_path_detailse(tree)['file_path'], 'utf-8')
                                    .trim().split('\n');
    
    objs.forEach(obj => {
        obj = obj.split('\t')[1];
        process.stdout.write(
            fs.readFileSync(
                fileManager.get_obj_path_detailse(obj)['file_path'], 'utf-8'
            )
        );
    });


}




module.exports = {
    read: read,
}


