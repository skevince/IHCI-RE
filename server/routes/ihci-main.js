var path = require('path'),
    _ = require('underscore'),
    async = require('async'),
    lo = require('lodash'),
    uuid = require('uuid'),
    clientParams = require('../middleware/client-params/client-params'),
    proxy = require('../components/proxy/proxy'),
    resProcessor = require('../components/res-processor/res-processor'),
    htmlProcessor = require('../components/html-processor/html-processor'),
    conf = require('../conf'),
    server = require('../server');

var querystring = require('querystring');
var activityApi = require('../api/activity');

var mongoose = require('mongoose')
var TestDB = mongoose.model('test')

async function address(req, res, next) {
    var filePath = path.resolve(__dirname, '../../public/activity/page/address/full.html'),
    options = {
        filePath: filePath,
        fillVars: {},
        renderData: { blankFont: ""},
    };
    htmlProcessor(req, res, next, options);
}
const test = async (req, res, next) => {
    const filePath = path.resolve(__dirname, '../../public/activity-react/complaint.html');
    const options = {
        filePath,
        fillVars: {
            INIT_DATA: {}
        },
        renderData: {},
    };
    req.rSession.expires = 10;
    req.rSession.noRobot = true;
    req.rSession.count = req.rSession.count + 1 || 1
    console.log(req.rSession);
    htmlProcessor(req, res, next, options)
}

const test1 = async (req, res, next) => {
    res.send('dataStr1')
}

const mainPage = async (req, res, next) => {
    const filePath = path.resolve(__dirname, '../../public/activity-react/main.html');

    const cccc = {
        ssdsds: '1',
        awdad: [
            1,2,3,4,5
        ]
    }

    const options = {
        filePath,
        fillVars: {
            INIT_DATA: {
                aaaa: 'aaaaaaaaaa',
                b: cccc
            }
        },
        renderData: {},
    };
    htmlProcessor(req, res, next, options)
}

module.exports = [
    // ['GET', '/wechat/page/activity/address', clientParams(), address],
    // 主页
    ['GET', '/', clientParams(), mainPage],
];