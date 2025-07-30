import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: '',
  },
  lastName: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    default: '', // Was: required: true
  },
  password: {
    type: String,
    default: '', // Was: required: true
  },
  image: {
    type: String,
  },
}, { timestamps: true });


const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
