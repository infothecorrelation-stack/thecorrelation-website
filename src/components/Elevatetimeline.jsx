import React, { useState } from "react";
import {
  BarChart3,
  Lightbulb,
  FlaskConical,
  Monitor,
  Zap,
  Trophy,
} from "lucide-react";

const LearningJourneyTimeline = () => {
  const [expandedAccordions, setExpandedAccordions] = useState({});

  const toggleAccordion = (stepId) => {
    setExpandedAccordions((prev) => ({
      ...prev,
      [stepId]: !prev[stepId],
    }));
  };

  const steps = [
    {
      id: 1,
      number: "STEP 01",
      title: "Data Analytics Professional",
      icon: BarChart3,
      skills: ["Excel", "SQL", "Python Analytics"],
      description:
        "Build a strong foundation in data analysis by working with real datasets, performing data cleaning, exploratory analysis, and creating professional dashboards for business insights.",
      badge: "Data Analytics Certificate",
      color: "red",
      position: "left",
    },
    {
      id: 2,
      number: "STEP 02",
      title: "Machine Learning Practitioner",
      icon: Lightbulb,
      skills: ["Regression Models"],
      description:
        "Learn core machine learning concepts including supervised learning, regression techniques, model evaluation, and interpretation to solve real-world prediction problems.",
      badge: "Foundational Machine Learning Certificate",
      color: "red",
      position: "right",
    },
    {
      id: 3,
      number: "STEP 03",
      title: "Advanced ML Specialist",
      icon: FlaskConical,
      skills: ["Ensemble Techniques", "Clustering", "SVM"],
      description:
        "Master advanced machine learning algorithms, ensemble methods, clustering techniques, and statistical analysis including time series to build high-performance models.",
      badge: "Advanced Machine Learning Certificate",
      color: "red",
      position: "left",
    },
    {
      id: 4,
      number: "STEP 04",
      title: "AI & Deep Learning Engineer",
      icon: Monitor,
      skills: ["Deep Learning", "Computer Vision", "NLP"],
      description:
        "Develop deep learning models using neural networks, work with computer vision and NLP applications, and explore generative and agentic AI systems used in modern AI products.",
      badge: "Deep Learning & AI Certificate",
      color: "red",
      position: "right",
    },
    {
      id: 5,
      number: "STEP 05",
      title: "Applied Data Science Professional",
      icon: Zap,
      skills: ["Deployment", "ML Pipelines", "Capstone Projects"],
      description:
        "Apply your end-to-end data science skills by building, deploying, and managing ML pipelines, completing real-world capstone projects, and creating an industry-ready portfolio.",
      badge: "AI-ML Deployment Certificate",
      color: "red",
      position: "left",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <p className="text-red-600 text-sm font-medium tracking-widest uppercase mb-3">
            Career Transformation Program
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Learning Journey
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            From Analytics Fundamentals to Industry-Ready Applied Data Scientist
          </p>
        </header>

        {/* TIMELINE WRAPPER (Fix #1) */}
        <div className="relative">
          {/* Timeline Lines */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-900 via-red-600 to-red-900 rounded-full -translate-x-1/2" />
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-red-900 via-red-600 to-red-900 rounded-full" />

          {/* Steps */}
          <div className="space-y-8 md:space-y-12">
            {steps.map((step) => {
              const Icon = step.icon;
              const isExpanded = expandedAccordions[step.id];

              return (
                <div key={step.id} className="relative">
                  <div className="flex flex-col md:flex-row md:items-center">
                    {/* Node */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-red-600 border-4 border-gray-100 shadow-lg" />
                    </div>

                    {/* Desktop */}
                    <div className="hidden md:flex w-full">
                      {step.position === "left" && (
                        <div className="w-1/2 pr-12 flex justify-end">
                          <div className="max-w-md">
                            <StepCard
                              step={step}
                              Icon={Icon}
                              isExpanded={isExpanded}
                              toggleAccordion={toggleAccordion}
                            />
                          </div>
                        </div>
                      )}

                      {step.position === "right" && (
                        <div className="w-1/2 pl-12 flex justify-start ml-auto">
                          <div className="max-w-md">
                            <StepCard
                              step={step}
                              Icon={Icon}
                              isExpanded={isExpanded}
                              toggleAccordion={toggleAccordion}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Mobile (Fix #2) */}
                    <div className="md:hidden pl-12 pr-4 w-full">
                      <StepCard
                        step={step}
                        Icon={Icon}
                        isExpanded={isExpanded}
                        toggleAccordion={toggleAccordion}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FINAL CREDENTIAL (Outside Timeline – Fix #1) */}
        <div className="mt-16">
          <div className="max-w-lg mx-auto">
            <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-900 rounded-2xl p-1">
              <div className="bg-gray-100 rounded-xl p-6 md:p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="text-red-600 text-xs font-bold uppercase mb-2">
                  Final Credential
                </p>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  Executive Certificate in Applied Data Science
                </h2>
                <p className="text-gray-600 text-sm mt-3">
                  Industry-recognized certification for career advancement
                </p>
                <div className="flex justify-center gap-6 mt-6">
                  <Stat value="5" label="Certifications" />
                  <Stat value="12+" label="Projects" />
                  <Stat value="100%" label="Career Ready" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StepCard = ({ step, Icon, isExpanded, toggleAccordion }) => {
  return (
    <div
      onClick={() => toggleAccordion(step.id)}
      className="bg-white rounded-2xl p-5 md:p-6 border border-red-100 shadow-sm hover:shadow-lg transition-all cursor-pointer md:cursor-default"
    >
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <span className="text-red-600 text-xs font-bold">
            {step.number}
          </span>
          <h3 className="text-lg font-bold text-gray-900">
            {step.title}
          </h3>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-[500px] mt-4" : "max-h-0 md:max-h-full md:mt-4"
        }`}
      >
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {step.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-red-50 text-red-600 border border-red-200"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-600">{step.description}</p>
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-red-300">
            🎓 <span className="text-xs">{step.badge}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ value, label }) => (
  <div className="text-center">
    <p className="text-2xl font-bold text-gray-900">{value}</p>
    <p className="text-xs text-gray-500">{label}</p>
  </div>
);

export default LearningJourneyTimeline;
