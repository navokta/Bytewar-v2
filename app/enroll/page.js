import EnrollForm from "../../components/EnrollForm";
import PaymentSection from "../../components/PaymentSection";

export default function EnrollPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Enroll for ByteWar
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Join the ultimate coding competition and showcase your skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <EnrollForm />
          <PaymentSection />
        </div>
      </div>
    </div>
  );
}