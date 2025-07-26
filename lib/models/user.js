import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password required'],
  },
  phone: {
  type: String,
  required: true,
}
}, {
  timestamps: true,
  versionKey: false,
});

// Prevent duplicate model issues in dev
export default mongoose.models.User || mongoose.model('User', UserSchema);
