import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: String,
  active: Boolean,
  quantity: Number,
  date: Date,
});

const Example = mongoose.model('Example', schema);

export default Example;
