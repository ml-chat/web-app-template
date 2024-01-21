const mongoose = require('mongoose');

// Replace these values with your MongoDB server and database details
const mongoUrl = 'mongodb://10.20.0.5:27017/testdatabase';

// Optional: Set Mongoose connection options
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to MongoDB
mongoose.connect(mongoUrl, mongooseOptions)
  .then(() => {
    console.log('Connected to MongoDB');

    // Perform MongoDB operations here...

    // Close the connection when done
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

