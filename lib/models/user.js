import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
  },
}, {
  timestamps: true,
  versionKey: false,
});

// Avoid model overwrite issues in dev
const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
