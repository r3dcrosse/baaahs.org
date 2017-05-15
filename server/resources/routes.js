const router = require('express').Router();
const path = require('path');

router.route('/')
  .get((request, response) => {
    console.log('GET request for index.html');
    response.status(200).sendFile(path.join(__dirname, '../../index.html'));
  });

module.exports = router;
