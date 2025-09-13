import { NextResponse } from "next/server";
import { connectDB } from "@/utils/db";
import Student from "@/lib/models/Student";

// ✅ Get All Students
export async function GET() {
  try {
    await connectDB();
    const students = await Student.find({});
    return NextResponse.json({ success: true, students });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// ✅ Add New Student
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const newStudent = new Student(body);
    await newStudent.save();
    return NextResponse.json({ success: true, student: newStudent });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// ✅ Edit Student
export async function PUT(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { uuid, name, email, college, certificateLink } = body;

    const updated = await Student.findOneAndUpdate(
      { uuid },
      { name, email, college, certificateLink },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ success: false, message: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, student: updated });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// ✅ Delete Student
export async function DELETE(req) {
  try {
    await connectDB();
    const { uuid } = await req.json();

    const deleted = await Student.findOneAndDelete({ uuid });
    if (!deleted) {
      return NextResponse.json({ success: false, message: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Deleted" });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
