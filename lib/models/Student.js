import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  uuid: { type: String, unique: true, required: true },
  name: String,
  email: String,
  college: String,
  certificateLink: String,
});

export default mongoose.models.Student || mongoose.model("Student", StudentSchema);
