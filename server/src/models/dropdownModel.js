const mongoose = require('mongoose');

let dropdownSchema = mongoose.Schema({
    options: {
        type: Array
    },
  });
  
  module.exports = mongoose.model('dropdown_options', dropdownSchema);
  