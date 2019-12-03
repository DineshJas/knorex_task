const Options = require('../models/dropdownModel');

exports.saveOption = (req, res) => {
  let optionObj = new Options();
  optionObj.options = req.body.dropdownOptions;
  optionObj.save(() => {
    res.json({
      message: 'New option created.',
      data: optionObj
    });
  });
};
