const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const fileManager = require('./fileManager');


// save file_obj
var save_file_obj = (data, file_data) => {
    // get the file hash
    let file_hash = fileManager.get_file_hash(file_data);
    // get path detailse
    let path_detailse = fileManager.get_file_obj_path_detailse(file_hash);
    // create the directory
    if (!fileManager.is_exists(path_detailse['dir_path'])) {
        fileManager.create_path(path_detailse['dir_path']);
    }

    // check if file exist or not
    if (!fileManager.is_exists(path_detailse['file_path'])) {
        // write file into disk
        fs.writeFile(path_detailse['file_path'], data, err => {
            if (err != null) {
                throw (err);
            }
        });
    }

    // return the hash
    return file_hash;

}


// save tree
var save_tree = (data) => {
    // save tree like an obj
    return save_obj(data);
}


// save the object
var save_obj = (data) => {
    // get the file hash
    let file_hash = fileManager.get_file_hash(data);
    // get path detailse
    let path_detailse = fileManager.get_obj_path_detailse(file_hash);
    // create the directory
    if (!fileManager.is_exists(path_detailse['dir_path'])) {
        fileManager.create_path(path_detailse['dir_path']);
    }

    // check if file exist or not
    if (!fileManager.is_exists(path_detailse['file_path'])) {
        // write file into disk
        fs.writeFile(path_detailse['file_path'], data, err => {
            if (err != null) {
                throw (err);
            }
        });
    }

    // return the hash
    return file_hash;
}







module.exports = {
    save_obj: save_obj,
    save_tree: save_tree,
    save_file_obj: save_file_obj,
};