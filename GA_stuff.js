'use strict';
require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');

const app = express();
app.enable('trust proxy');

// The following environment variable is set by app.yaml when running on App
// Engine, but will need to be set manually when running locally. See README.md.
const {GA_TRACKING_ID} = process.env;

const trackEvent = (category, action, label, value) => {
  const data = {
    // API Version.
    v: '1',
    // Tracking ID / Property ID.
    tid: GA_TRACKING_ID,
    // Anonymous Client Identifier. Ideally, this should be a UUID that
    // is associated with particular user, device, or browser instance.
    cid: '555',
    // Event hit type.
    t: 'event',
    // Event category.
    ec: category,
    // Event action.
    ea: action,
    // Event label.
    el: label,
    // Event value.
    ev: value,
  };

  return fetch('http://www.google-analytics.com/debug/collect', {
    params: data,
  });
};

app.get('/', async (req, res, next) => {
  // Event value must be numeric.
  try {
    await trackEvent(
      'Example category',
      'Example action',
      'Example label',
      '100'
    );
    res.status(200).send('Event tracked.').end();
  } catch (error) {
    // This sample treats an event tracking error as a fatal error. Depending
    // on your application's needs, failing to track an event may not be
    // considered an error.
    next(error);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

// [END gae_flex_analytics_track_event]
module.exports = app;