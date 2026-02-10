import React from "react";
import {
  UserCheck,
  ClipboardList,
  BadgePercent,
  CreditCard,
  BookOpen,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

const YourJourneySection = () => {
  const steps = [
  {
    title: "Step 1",
    heading: "Connect with Our Experts",
    desc: "Schedule a free one-on-one consultation with our experienced mentors. Gain clarity on career pathways, program outcomes, and how the curriculum aligns with your professional goals.",
    image: "/step-1.jpg",
    IconComponent: UserCheck,
  },
  {
    title: "Step 2",
    heading: "Registration & Profile Evaluation",
    desc: "Complete your registration and submit your profile. Our admissions team evaluates your background, experience, and interests to ensure the right program fit.",
    image: "/step-2.jpg",
    IconComponent: ClipboardList,
  },
  {
    title: "Step 3",
    heading: "Eligibility & Scholarship Assessment",
    desc: "Take part in an aptitude and profile-based assessment to determine eligibility and explore available scholarship or financial support opportunities.",
    image: "/step-3.jpg",
    IconComponent: BadgePercent,
  },
  {
    title: "Step 4",
    heading: "Fee Structure & EMI Options",
    desc: "Receive a personalized fee structure along with flexible EMI and financing options designed to make quality education accessible.",
    image: "/step-4.jpg",
    IconComponent: CreditCard,
  },
  {
    title: "Step 5",
    heading: "Industry-Aligned Learning Experience",
    desc: "Learn through live instructor-led sessions, practical assignments, hands-on projects, and real-world case studies curated by industry experts.",
    image: "/step-5.jpg",
    IconComponent: BookOpen,
  },
  {
    title: "Step 6",
    heading: "Practical Exposure & Skill Building",
    desc: "Strengthen your skills through applied learning, capstone projects, simulations, and guided practical exposure designed to build job readiness.",
    image: "/step-6.jpg",
    IconComponent: Briefcase,
  },
  {
    title: "Step 7",
    heading: "Career Support & Certification",
    desc: "Benefit from dedicated career assistance including resume building, interview preparation, and placement support, along with industry-recognized certification.",
    image: "/step-7.jpg",
    IconComponent: ShieldCheck,
  },
];


  return (
  <div className="overflow-x-hiddenc">
     <section id="steps-journey" className="relative">
      {/* Header */}
      <div className="py-8 px-4 flex items-center justify-center">
        <h2 className="text-6xl font-bold text-center">Your Journey With Us</h2>
      </div>

      {/* Steps */}
      <div className="relative">
        {steps.map((step, index) => {
          const Icon = step.IconComponent;
          return (
            <div
              key={index}
              className="sticky top-0 h-[50vh] md:h-[40vh] flex items-center justify-center transition-all duration-300 overflow-hidden"
              style={{
                zIndex: 10 + index,
                marginTop: index > 0 ? "-1vh" : "0",
              }}
            >
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${step.image})` }}
              />
              <div className="absolute inset-0 bg-black/60" />

              <div className="flex flex-col md:flex-row items-center md:items-start justify-start max-w-5xl w-full px-4 md:px-8 text-center md:text-left relative z-10">
                {/* Icon */}
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <Icon className="w-14 h-14 text-white" />
                </div>

                {/* Content */}
                <div className="text-white">
                  <h2 className="text-lg md:text-xl font-semibold mb-1">{step.title}</h2>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{step.heading}</h3>
                  <p className="text-base md:text-lg leading-relaxed opacity-90">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  </div>

  );
};

export default YourJourneySection;
