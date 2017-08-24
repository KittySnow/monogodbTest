var connectionString, db, mongoose, options;

mongoose = require('mongoose');

var host  = "192.168.1.202";
var port  = "27017";
var db    = "dlb";

connectionString = 'mongodb://dlb1:dlbDE160729@' + host + ':' + port + '/' + db + '';

options = {
    db: {
        native_parser: true
    },
    server: {
        auto_reconnect: true,
        poolSize: 5
    }
};

mongoose.connect(connectionString, options, function(err, res) {
    if (err) {
        console.log('[mongoose log] Error connecting to: ', +connectionString + '. ' + err);
        return process.exit(1);
    } else {
        return console.log('[mongoose log] Successfully connected to: ', +connectionString);
    }
});

db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error:'));

db.once('openUri', function() {
    return console.log('mongoose open success');
});


module.exports = mongoose;