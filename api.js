const express = require('express');
const router = express.Router();

// your first API endpoint... 
router.get("/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

// TImestamp endpoint
router.get("/timestamp/:datestring", function(req, res) {
  let datestring = req.params.datestring;
  let date = new Date(datestring);
  if (!date.getTime()) date = new Date(parseInt(datestring));
  if (!date.getTime()) res.json({ error: 'Invalid Date' });
  else res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

module.exports = router;
