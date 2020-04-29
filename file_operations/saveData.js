const fs = require('fs');
const fileManager = require('./fileManager');
const path = require('path');


// save file_obj
var save_file_obj = (data, file_hash) => {
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


// save multiple objs
var save_objs
var save_objs = (file_path) => {
    // crete a promise for filegenerationa and hash creation
    let promise = new Promise((resolve, reject) => {
        // store the hash of a large file
        let file_hash = fileManager.createHash();
        let objHashes = [];
        try {
        fs.createReadStream(file_path, { highWaterMark: fileManager.chunk_size })
            .on('data', (chunk) => {    // when data is available to read
                // update the file hash
                file_hash.update(chunk);
                // save a chunk of data as obj
                objHashes.push(save_obj(chunk));
            })
            .on('end', () => {  // while file reading end
                // return the hashes
                return resolve({
                    'fileHash': fileManager.getDigestHash(file_hash),   // return the dugested hash
                    'objHashes': objHashes,                 // hashes all object
                    'file_name': path.basename(file_path),       // get the file name
                });
            });
        } catch(error) {    // error
            return reject(error);
        }
    });

    // return the promise
    return promise;
}


// save the object
var save_obj = (data) => {
    // get the hash of data
    let file_hash = fileManager.get_hash(data);
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
    save_objs: save_objs,
    save_tree: save_tree,
    save_file_obj: save_file_obj,
};