const mongoose = require('mongoose');

function connectToDb(){
    mongoose.connect(process.env.MONGODB_URI, {
    }).then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });
}

module.exports = connectToDb;   