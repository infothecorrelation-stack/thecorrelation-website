"use client";

import { Award, Shield, Clock, Wallet, PlayCircle } from "lucide-react";

export default function PGProgramFee() {
  const config = {
    main_heading: "Post Graduation Program",
    program_subtitle: "Applied Data Science",
    course_description:
      "An industry-immersive, fully offline PG program designed to transform you into a job-ready data science professional with hands-on mentorship.",
    registration_fee: "₹2,000",
    total_fee: 187000,
    highlights: [
      "Full-Time Offline Classes",
      "Hands-On Industry Projects",
      "1-on-1 Expert Mentorship",
      "Career Acceleration Support",
      "Placement Assistance",
      "Continual Doubt-Clearing Sessions",
      "Industry-Recognised Certificate",
      "Free Study Materials & Printed Books Provided",
      "3-Month Internship",
      "100% Job Assistance Program",
      "Live Real-World Case Studies & Assignments",
      "Resume Building + Mock Interview Preparation",
    ],
    payment_benefits: [
      { icon: Award, text: "No Hidden Charges" },
      { icon: Shield, text: "Secure Payment Gateway" },
      { icon: Clock, text: "Instant Enrollment" },
      { icon: Wallet, text: "Assured Learning Investment" },
    ],
    register_link: "https://pages.razorpay.com/PGPenrolment",
    whatsapp_link:
      "https://wa.me/917415346222?text=Hey%2C%20I%27m%20interested%20in%20the%20PG%20Program%20in%20Applied%20Data%20Science.",
    phone_link: "tel:+917415346222",
  };

  const fmt = (n) => "₹" + n.toLocaleString("en-IN");

  return (
    <div className="flex flex-col lg:flex-row font-sans px-4 py-6 lg:px-8 lg:py-10 mx-auto my-6">
      {/* Left Section */}
      <div className="flex-1 bg-gray-100 p-8 lg:p-12 flex flex-col">
        <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col">
          <div className="mb-8">
            <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
              Fully Offline · Campus Program
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-3 text-gray-900">
              {config.main_heading}
            </h1>
            <p className="text-2xl font-medium mb-4 text-red-600">
              {config.program_subtitle}
            </p>
            <p className="text-lg text-gray-700">{config.course_description}</p>
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-6 text-gray-900">
              What's Included
            </h2>
            <div className="space-y-4">
              {config.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 12 12" fill="none">
                      <polyline points="2,6 5,9 10,3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-base font-medium text-gray-900">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3 bg-orange-50 border-2 border-orange-200 rounded-xl p-4">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
              <PlayCircle className="w-5 h-5 text-white" />
            </div>
            <p className="text-sm text-orange-900">
              <span className="font-semibold">5-Day Demo Classes</span>{" "}
              included — attend before committing.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-white p-8 lg:p-12 flex flex-col">
        <div className="max-w-xl mx-auto w-full flex-1 flex flex-col gap-6">
          {/* Registration Fee */}
          <div className="bg-red-50 border-2 border-red-100 rounded-xl p-4 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-900">Registration Fee</p>
              <p className="text-xs mt-1 text-red-600 font-semibold">
                Refundable · adjusted in total fee
              </p>
            </div>
            <span className="text-lg font-bold text-gray-900">
              {config.registration_fee}
            </span>
          </div>

          {/* Total Fee */}
          <div className="bg-gray-100 rounded-2xl p-6 text-center">
            <p className="text-xl font-medium text-gray-600 mb-1">
              Total Program Fee (before scholarship)
            </p>
            <div className="text-3xl font-bold text-gray-900">
              {fmt(config.total_fee)}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              All taxes included 
            </p>
          </div>

          {/* EMI Banner */}
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-start gap-3">
            <div className="w-7 h-7 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Wallet className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-green-900">
                Flexible Payment Options Available
              </p>
              <p className="text-xs text-green-800 mt-1 leading-relaxed">
                We offer both{" "}
                <span className="font-semibold">one-time full payment</span> and{" "}
                <span className="font-semibold">flexible EMI / instalment plans</span>{" "}
                to suit your budget. Talk to our team to choose what works best for you.
              </p>
            </div>
          </div>

          {/* Breakdown — no amounts for scholarships */}
          <div className="border-2 border-gray-200 rounded-xl p-4 flex flex-col gap-1">
            <div className="flex justify-between text-sm text-gray-500 py-1">
              <span>Program fee</span>
              <span className="font-semibold text-gray-900">{fmt(config.total_fee)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500 py-1">
              <span>Registration (adjusted)</span>
              <span className="font-semibold text-green-600">– ₹2,000</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500 py-1 flex-wrap gap-1">
              <span>Test-based scholarship</span>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-0.5 rounded-full">
                Based on entrance score
              </span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500 py-1 flex-wrap gap-1">
              <span>Profile-based scholarship</span>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-0.5 rounded-full">
                Based on your profile
              </span>
            </div>
            <div className="flex justify-between items-center border-t-2 border-gray-100 pt-3 mt-1">
              <span className="text-base font-bold text-gray-900">You Pay</span>
              <span className="text-sm font-semibold text-gray-500 italic">
                Determined after counselling
              </span>
            </div>
          </div>

          {/* Scholarship Note */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg px-3 py-2 text-xs text-yellow-900 leading-relaxed -mt-3">
            ★ Your final fee depends on your Entrance Test score & profile evaluation. Register and appear for the test to unlock your personalised scholarship.
          </div>

          {/* Payment Highlights */}
          <div className="grid grid-cols-2 gap-4">
            {config.payment_benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-center gap-3"
                >
                  <Icon className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-sm font-medium text-gray-900">{benefit.text}</p>
                </div>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-auto">
            <a href={config.register_link} className="flex-1">
              <div className="w-full min-h-[56px] bg-green-600 text-white font-semibold rounded-xl flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl hover:bg-green-700">
                Register Now
              </div>
            </a>
            <a href={config.phone_link} className="flex-1 block md:hidden">
              <div className="w-full min-h-[56px] bg-green-600 text-white font-semibold rounded-xl flex items-center justify-center transition-all duration-200 shadow-lg hover:bg-green-700">
                Talk to Team
              </div>
            </a>
            <a href={config.whatsapp_link} target="_blank" rel="noopener noreferrer" className="flex-1 hidden md:block">
              <div className="w-full min-h-[56px] bg-green-600 text-white font-semibold rounded-xl flex items-center justify-center transition-all duration-200 shadow-lg hover:bg-green-700">
                Talk to Team
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}