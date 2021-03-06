const { config } = require('chai');
const merge = require('deepmerge');

const baseConfig = require('./base.conf.js');

config.includeStack = true; // enable chai custom login messages

global.wdioEnvironment = 'desktop';

exports.config = merge(
    baseConfig.config,
    {
        suites: {
            example: ['./specs/suites/example.desktop.js'],
        },
        specs: ['./specs/suites/*.desktop.js'],
        exclude: ['./specs/suites/*.mobile.js'],
        port: 9515,
        path: '/',
        services: ['chromedriver'],
        capabilities: [{
            maxInstances: 5,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--no-sandbox', '--window-size=1366,968', '--log-level=3'],
            },
        }],
        deprecationWarnings: true,
        baseUrl: 'http://localhost',
    }
);