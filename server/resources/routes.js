const router = require('express').Router();
const path = require('path');

router.route('/')
  .get((request, response) => {
    response.status(200).sendFile(path.join(__dirname, '../../index.html'));
  });

router.route('/a/:tag')
  .get((request, response) => {
    response.status(200).send({
      tweets: 'fakedata'
    });
  });

module.exports = router;
