// initializing mongoose
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://alamin:alamin16@cluster0-xf2g2.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log('mongo connected');
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
