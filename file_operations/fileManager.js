// required modules
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

// directory for save file_obj
const file_obj_directory = 'data/file_objects';
// directory to save obj
const obj_directory = 'data/objects';


// create directories
var create_path = (dir_path) => {
    // split the directories
    dir_path = dir_path.split('/');
    // iterate to crete directory
    let tmp_dir_path = '';
    for(let i=0; i<dir_path.length; i++) {
        tmp_dir_path = path.join(tmp_dir_path, dir_path[i]);
        // creating directory
        if(!fs.existsSync(tmp_dir_path)) {
            fs.mkdirSync(tmp_dir_path);
        }
    }
}


// check for file's esistence
var is_exists = (dir_path, file_name='') => {
    let file_path = path.join(dir_path, file_name);
    if(fs.existsSync(file_path)) {
        return true;
    }
    return false;
}

// get file hash
var get_file_hash = (data) => {
    return file_hash = crypto.createHash('sha256').update(data).digest('hex');
}


// get the obj path based on data
var get_obj_path_detailse = (file_hash) => {
    // slicing the hash to store in directory
    let inner_hash_directory = file_hash.slice(0,2);
    let file_name = file_hash.slice(2,file_hash.length);
    // cretae directory if not exists
    let dir_path = path.join(obj_directory, inner_hash_directory);
    // return the data
    return {
        'dir_path': dir_path,
        'file_name': file_name,
        'file_path': path.join(dir_path, file_name)
    }
}

// get the file_obj path based on data
var get_file_obj_path_detailse = (file_hash) => {
    // slicing the hash to store in directory
    let inner_hash_directory = file_hash.slice(0,2);
    let file_name = file_hash.slice(2,file_hash.length);
    // cretae directory if not exists
    let dir_path = path.join(file_obj_directory, inner_hash_directory);
    // return the data
    return {
        'dir_path': dir_path,
        'file_name': file_name,
        'file_path': path.join(dir_path, file_name)
    }
}

















// export modules
module.exports = {
    create_path: create_path,
    is_exists: is_exists,
    get_obj_path_detailse: get_obj_path_detailse,
    get_file_hash: get_file_hash,
    get_file_obj_path_detailse: get_file_obj_path_detailse,
}