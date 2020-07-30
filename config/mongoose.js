const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactsDB', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
module.exports = db;