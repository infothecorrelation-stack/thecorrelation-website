import {
  CheckCircle,
  Clock,
  Mail,
  Package,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";

export default function PaymentSuccess() {
  // You can later replace these with dynamic values
  

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-24">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12">

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-600" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Payment Successful
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Thank you for enrolling with us. Your payment has been received successfully.
        </p>

        {/* Reference Info */}
        

        {/* Timeline */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            What happens next?
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-green-600 mt-0.5" />
              <span>
                Payment verification – <strong>within 24 hours</strong>
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <span>
                Enrollment number allocation – <strong>1–2 working days</strong>
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-green-600 mt-0.5" />
              <span>Course onboarding details shared via email</span>
            </li>

            <li className="flex items-start gap-3">
              <Package className="w-5 h-5 text-green-600 mt-0.5" />
              <span>
                Books / materials dispatched – <strong>1–2 working days</strong>
              </span>
            </li>
          </ul>
        </div>

        {/* Email Help */}
        <div className="border border-gray-200 rounded-xl p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Didn’t receive the confirmation email?
          </h3>

          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Check your spam or junk folder</li>
            <li>Ensure the email entered during payment is correct</li>
            <li>Please wait up to 24 hours</li>
            <li>Contact support if the issue persists</li>
          </ul>
        </div>

        {/* Important Note */}
        <div className="border border-yellow-300 bg-yellow-50 rounded-xl p-5 mb-8">
          <h3 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Important Note
          </h3>

          <p className="text-sm text-yellow-800 leading-relaxed">
            This page or its screenshot is <strong>not considered proof of successful enrollment</strong>.
            The official payment receipt and confirmation are sent to your registered email
            by <strong> Razorpay</strong>. Please keep that email safe for future communication.
          </p>
        </div>

        {/* Support */}
        <div className="text-sm text-gray-700 mb-8">
          <p className="font-semibold mb-1">Need help?</p>
          <p>Email: <span className="font-medium">admissions@thecorrelation.in</span></p>
          <p>Working Hours: Mon–Fri, 10:00 AM – 6:00 PM IST</p>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="/"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
          >
            Go to Home
          </a>
        </div>

        {/* Trust */}
        <p className="text-xs text-center text-gray-500 mt-6 flex items-center justify-center gap-1">
          <ShieldCheck className="w-4 h-4" />
          Payments are securely processed by Razorpay
        </p>
      </div>
    </div>
  );
}