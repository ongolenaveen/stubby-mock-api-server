var Stubby = require('stubby').Stubby;
const yaml = require('js-yaml');
const fs   = require('fs');
const os = require('os');
require('dotenv').config();

const endpoints = yaml.load(fs.readFileSync('./endpoints.yaml', 'utf8'));
console.log(endpoints);

var stubby = new Stubby();
stubby.start({
  stubs: process.env.STUBS_PORT,
  admin: process.env.ADMIN_PORT,
  location: os.hostname,
  data: endpoints
});

