const file_operations = require('./file_operations/');


if (file_operations.saveData.save_file_obj("this is data", "this is file data"))
    console.log("Successful");
else
    console.log("UNsuccessful");