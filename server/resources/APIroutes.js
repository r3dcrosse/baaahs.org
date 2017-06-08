const APIrouter = require('express').Router();

APIrouter.route('/assets')
  .get((request, response) => {
    response.status(200).send({
      tweets: 'fakedata'
    });
  });

APIrouter.route('/assets/:tag')
  .get((request, response) => {
    response.status(200).send({
      tweets: 'fakedata'
    });
  })
  .post((request, response) => {
    response.status(200).send({
      tweets: 'fakedata'
    });
  });

APIrouter.route('assets/:tag/scans')
  .get((request, response) => {
    response.status(200).send({
      tweets: 'fakedata'
    });
  })
  .put((request, response) => {
    response.status(200).send({
      tweets: 'fakedata'
    });
  });

APIrouter.route('/users')
  .get((request, response) => {
    response.status(200).send({
      tweets: 'fakedata'
    });
  })
  .put((request, response) => {
    response.status(200).send({
      tweets: 'fakedata'
    });
  });

APIrouter.route('*')
  .get((request, response) => {
    console.log('invalid api route');
    response.status(404).send('ERROR 404: API route unknown');
  });

module.exports = APIrouter;
