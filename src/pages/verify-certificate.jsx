export const metadata = {
  title: "Verify Certificate | TheCorrelation",
  description:
    "Verify your certificate issued by TheCorrelation. Enter your details to check authenticity.",
};

export default function VerifyCertificate() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#a9a6f6] via-white to-[#673cb8] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Certificate Verification
          </h1>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Verify the authenticity of a certificate issued by{" "}
            <span className="font-semibold text-slate-800">
              TheCorrelation
            </span>.  
            Please ensure the details entered match the certificate exactly.
          </p>
        </div>

        {/* Card Container */}
        <div className="relative bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden">
          {/* Accent Bar */}
          

          {/* Iframe Wrapper */}
          <div className="relative w-full h-[120vh]">
            <iframe
              src="https://forms.office.com/Pages/ResponsePage.aspx?id=diKqTE1Nm02lFshUC3TfuU8F6WVyDwxKg1Gdxf_g7qdUNjg1MDRWN1pCRDhNNlRNRkI1VFpYOVVUQi4u&embed=true"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              marginWidth="0"
              marginHeight="0"
              allowFullScreen
            />
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm font-semibold text-slate-700 mt-8">
          Facing issues with verification? Reach us at{" "}
          <a
            href="mailto:admissions@thecorrelation.in"
            className="font-semibold text-blue-600 hover:underline"
          >
            admissions@thecorrelation.in
          </a>
        </p>
      </div>
    </section>
  );
}
