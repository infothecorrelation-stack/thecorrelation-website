"use client";

import { useState } from "react";
import { Check, Award, Shield, Clock, Wallet } from "lucide-react";

export default function ElevateProgramFee() {
  const [paymentType, setPaymentType] = useState("onetime");

  const config = {
    main_heading: "Elevate Program ",
    program_subtitle: "Data Analytics",
    course_description:
      "Master data science with industry experts and build real-world projects",
    registration_fee: "₹2,000",
    original_price: "₹29,999",
    discounted_price: "₹12,000",
    emi_price: "₹15,135",
    highlights: [
      "Weekend Live Classes (Sat & Sun)",
      "Self-Paced Learning (Mon–Fri)",
      "Hands-On Industry Projects",
      "Beginner-Friendly Curriculum",
      "1-Year LMS Access & Recordings",
      "Weekly Doubt-Clearing Sessions",
      "Career Acceleration Support",
    ],
    payment_benefits: [
      { icon: Award, text: "No Hidden Charges" },
      { icon: Shield, text: "Secure Payment Gateway" },
      { icon: Clock, text: "Instant Enrollment" },
      { icon: Wallet, text: "Assured Learning Investment" },
    ],
  };

  return (
    <div className="flex flex-col lg:flex-row font-sans px-4 py-6 lg:px-8 lg:py-10 mx-auto my-6 ">
  {/* Left Section - Course Details */}
  <div className="flex-1 bg-gray-100 p-8 lg:p-12 flex flex-col">
    <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col">
      {/* Course Header */}
      <div className="mb-8">
        <h1 className="text-4xl lg:text-5xl font-bold mb-3 text-gray-900">
          {config.main_heading}
        </h1>
        <p className="text-2xl font-medium mb-4 text-red-600">
          {config.program_subtitle}
        </p>
        <p className="text-lg text-gray-700">
          {config.course_description}
        </p>
      </div>

      {/* Course Highlights */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-6 text-gray-900">
          What's Included
        </h2>
        <div className="space-y-4">
          {config.highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <p className="text-base font-medium text-gray-900">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Right Section - Pricing Details */}
  <div className="flex-1 bg-white p-8 lg:p-12 flex flex-col">
    <div className="max-w-xl mx-auto w-full flex-1 flex flex-col">

      {/* Pricing Content */}
      <div className="mb-8">
        {/* Registration Fee */}
        <div className="bg-red-50 border-2 border-red-100 rounded-xl p-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-900">
              Registration Fee
            </span>
            <span className="text-lg font-bold text-gray-900">
              {config.registration_fee}
            </span>
          </div>
          <p className="text-xs mt-1 text-gray-600">
            *Will be adjusted in total program fee
          </p>
        </div>

        {/* One-Time Payment */}
        <div className="text-center py-6 rounded-2xl animate-[fadeIn_0.3s_ease-out]">
          <p className="text-sm font-medium mb-2 text-gray-600">
            Total Program Fee
          </p>
          <p className="line-through text-xl mb-2 text-gray-400">
            {config.original_price}
          </p>
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="text-5xl font-bold text-gray-900">
              {config.discounted_price}
            </span>
            <span className="text-2xl font-medium text-red-600">*</span>
          </div>
          <p className="text-xs text-gray-600">
            *All taxes included
          </p>
        </div>
      </div>

      {/* Payment Benefits */}
      <div className="flex-1 mb-8">
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:max-w-none">
          {config.payment_benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 border-2 border-red-200 rounded-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-sm font-medium text-gray-900">
                    {benefit.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="flex gap-4">
        {/* Register Button */}
        <a
          href="https://rzp.io/rzp/J4cIveeO"
          className="flex-1"
        >
          <div className="w-full min-h-[56px] bg-green-600 text-white font-semibold rounded-xl flex items-center justify-center text-center transition-all duration-200 shadow-lg hover:shadow-xl hover:bg-green-700">
            Register Now
          </div>
        </a>

        {/* Talk to Team */}
        <div className="flex-1">
          {/* Mobile → Call */}
          <a href="tel:+917415346222" className="block md:hidden">
            <div className="w-full min-h-[56px] bg-green-600 text-white font-semibold rounded-xl flex items-center justify-center text-center transition-all duration-200 shadow-lg hover:bg-green-700">
              Talk to Team
            </div>
          </a>

          {/* Desktop → WhatsApp */}
          <a
            href="https://wa.me/917415346222?text=Hey%2C%20I%20came%20across%20the%20Elevate%20Program%20in%20Data%20Analytics%20on%20your%20website%20and%20would%20like%20to%20know%20more%20about%20it."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <div className="w-full min-h-[56px] bg-green-600 text-white font-semibold rounded-xl flex items-center justify-center text-center transition-all duration-200 shadow-lg hover:bg-green-700">
              Talk to Team
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
</div>
  );
}
