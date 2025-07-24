import EnrollForm from "../../components/EnrollForm";
import PaymentSection from "../../components/PaymentSection";

export default function EnrollPage() {
  return (
    <div className="min-h-screen bg-red-50 py-12 px-4 text-green-400">
      <h1 className="text-4xl font-extrabold text-center mb-8">Enroll for ByteWar</h1>
      <EnrollForm />
      <PaymentSection />
    </div>
  );
}
