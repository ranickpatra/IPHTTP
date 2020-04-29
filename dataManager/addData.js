const fileOperations = require('../file_operations');


// add_file 
var add_file = (file_path) => {    
    // create chunk and calculate hashes
    fileOperations.saveData.save_objs(file_path)
    .then((file_hashes) => {    // get the file hashes
        let tree_data = '';     // stores tree data
        file_hashes['objHashes'].forEach(hash => {
            tree_data += "obj\t" + hash + '\n'; // add obj data
        });
        // save tree and get hash
        let tree_hash = fileOperations.saveData.save_tree(tree_data);
        // create data for file_obj
        let file_obj_data = "tree\t" + tree_hash + "\t" + file_hashes['file_name'] + "\n";
        // save file object
        let file_hash =  fileOperations
                            .saveData.save_file_obj(file_obj_data, file_hashes['fileHash']);
        console.log(file_hashes['fileHash']);

    })
    .catch((error) => {     // when error
        console.log("file error");
    });
    
    
    
    
    
    // // create tree with obj file hash
    // let tree_data = "obj\t" + obj_file_hash + "\n";
    // for(let hash of file_hashes[''])
    // let tree_hash = fileOperations.saveData.save_tree(tree_data);

    // // create file_obj
    // let file_obj_data = "tree\t" + tree_hash + "\n";
    // let file_hash =  fileOperations.saveData.save_file_obj(file_obj_data, data);

    // console.log(file_hash);


}







module.exports = {
    add_file: add_file,
}



