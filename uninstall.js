var Service = require('node-windows').Service;
const dotenv = require('dotenv');
dotenv.config();

// Create a new service object
var svc = new Service({
    name: process.env.SERVICE_NAME,
    script: require('path').join(__dirname, 'build\\index.js')
});

// Listen for the "uninstall" event so we know when it's done.
svc.on('uninstall', function () {
    console.log('Uninstall complete.');
    console.log('Check service exists: ', svc.exists);
});

// Uninstall the service.
svc.uninstall();