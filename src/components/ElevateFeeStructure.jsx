"use client";
import React from "react";
import { Check } from "lucide-react";

const ElevatePriceSection = () => {
  const plans = [
    {
      title: "Online Elevate Program",
      price: "₹25,000",
      subtitle: "One-time full payment (Limited-time offer)",
      razorpayLink: "https://rzp.io/l/elevate-online-paynow",
      features: [
        "Original Program Value: ₹55,000",
        "Final Payable Amount: ₹25,000",
        "Weekend-Only Live Classes (Sat & Sun)",
        "Guided Learning with Mentor Support",
        "Integrated LMS Access — FREE",
        "Live Class Recordings — FREE",
        "Assignments & Projects — FREE",
        "Job Recommendation Support — FREE",
        "Career Guidance & Resume Support — FREE",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-red-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Elevate Program — Online Fee Structure
          </h2>
          <p className="text-gray-600 text-lg">
            Transparent pricing with maximum value and zero hidden costs.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="flex justify-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="
                bg-white
                border border-red-100
                rounded-2xl
                p-6
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                flex flex-col
                w-full
                max-w-[560px]
              "
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {plan.title}
              </h3>

              {/* Price */}
              <div className="flex items-end gap-2 mb-1">
                <span className="text-3xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ₹55,000
                </span>
              </div>

              <p className="text-xs text-gray-500 mb-4">
                {plan.subtitle}
              </p>

              {/* Features */}
              <ul className="text-sm space-y-3 my-6 text-gray-700 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.razorpayLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full
                  mt-auto
                  bg-red-600
                  text-white
                  py-3
                  rounded-lg
                  font-semibold
                  transition-all
                  text-center
                  hover:shadow-md
                "
              >
                Enroll Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElevatePriceSection;
