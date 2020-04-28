const fileOperations = require('../file_operations');


// add the data 
var add = (data) => {    
    // obj file hash
    let obj_file_hash = fileOperations.saveData.save_obj(data);
    // create tree with obj file hash
    let tree_data = "obj\t" + obj_file_hash + "\n";
    let tree_hash = fileOperations.saveData.save_tree(tree_data);

    // create file_obj
    let file_obj_data = "tree\t" + tree_hash + "\n";
    let file_hash =  fileOperations.saveData.save_file_obj(file_obj_data, data);

    console.log(file_hash);

}







module.exports = {
    add: add,
}



