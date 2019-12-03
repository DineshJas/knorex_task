const router = require('express').Router();

const dropDownController = require('./controllers/dropdownController')

router.get('/', (req,res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to the server...'
    })
});

router.post('/save/option', dropDownController.saveOption);

module.exports = router;