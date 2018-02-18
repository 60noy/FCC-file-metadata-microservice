var express = require('express');
var path = require('path');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('/public/index.html');
});

// POST file and return json response of file size
router.post('/submit', function(req, res, next) {
    res.json({'success': true});
    console.log(req.body);
});

router.post('/upload', upload.single('file'), function(req, res, next){
    res.json({'success': true, 'size':  req.file.size});
});

module.exports = router;
