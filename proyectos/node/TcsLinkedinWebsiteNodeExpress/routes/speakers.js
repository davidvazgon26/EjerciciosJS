const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;

  router.get('/', async (req, res) => {
    const speakers = await speakersService.getList();
    res.json(speakers);
  });

  router.get('/:shortname', (req, res) => {
    res.send(`Detail paga of ${req.params.shortname}`);
  });

  return router;
};
