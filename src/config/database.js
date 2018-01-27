import mongoose from 'mongoose';

mongoose.Promise = Promise;

const mongodbUrl = 'mongodb://localhost/myapp';

const connect = () => mongoose.connect(mongodbUrl);

export default {
  connect,
};

