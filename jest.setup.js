const fetch = require('cross-fetch');
require('jest-fetch-mock').enableMocks();
global.fetch = fetch;
