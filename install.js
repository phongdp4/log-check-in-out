var Service = require('node-windows').Service;
const dotenv = require('dotenv');
dotenv.config();

// Create a new service object
var svc = new Service({
    name: process.env.SERVICE_NAME,
    description: 'The nodejs.org example web server.',
    script: 'D:\\log-check-in-out\\build\\index.js',
    nodeOptions: [
        '--harmony',
        '--max_old_space_size=128'
    ]
    //, workingDirectory: '...'
    // , allowServiceLogon: true
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function () {
    svc.start();
});

svc.install();