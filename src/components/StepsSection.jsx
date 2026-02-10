'use client';
import React from 'react'

const StepsSection = () => {
  const steps = [
  {
    title: 'Step 1',
    heading: 'Career Consultation with Experts',
    desc: 'Connect with our academic and career advisors to understand program outcomes and align your goals.',
    color: 'bg-blue-500',
  },
  {
    title: 'Step 2',
    heading: 'Registration & Profile Review',
    desc: 'Complete your registration and get a detailed profile evaluation by our admissions team.',
    color: 'bg-green-500',
  },
  {
    title: 'Step 3',
    heading: 'Eligibility & Scholarship Assessment',
    desc: 'Appear for aptitude and profile assessments to explore eligibility and scholarship opportunities.',
    color: 'bg-yellow-500',
  },
  {
    title: 'Step 4',
    heading: 'Fee Structure & EMI Options',
    desc: 'Receive a customized fee plan with flexible EMI and financing options.',
    color: 'bg-red-500',
  },
  {
    title: 'Step 5',
    heading: 'Industry-Aligned Learning Journey',
    desc: 'Learn through live sessions, practical assignments, and real-world projects designed by industry experts.',
    color: 'bg-purple-500',
  },
  {
    title: 'Step 6',
    heading: 'Practical Exposure & Career Readiness',
    desc: 'Build hands-on experience through case studies, capstone projects, and applied learning initiatives.',
    color: 'bg-pink-500',
  },
  {
    title: 'Step 7',
    heading: 'Career Support & Certification',
    desc: 'Receive dedicated job assistance, interview preparation, resume support, and industry-recognized certification.',
    color: 'bg-indigo-500',
  },
];


  return (
    <div>
      <section id="steps-journey" className="relative ">
        {/* Header */}
        <div className="bg-gray-100 p-8 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center">Your Journey With Us</h1>
        </div>

        {/* Steps */}
        <div className="relative ">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${step.color} h-[40vh] sticky top-0 flex items-center justify-center `}
              style={{
                zIndex: 10 + index,
                marginTop: index > 0 ? '-5vh' : '0',
              }}
            >
              {/* Vertical STEP with Horizontal Number */}
              <div 
                className="absolute left-4 sm:left-6 md:left-10 top-1/2 transform -translate-y-1/2 flex items-center"
                style={{ zIndex: 50 }}
              >
                {/* Vertical STEP text */}
                <div className="text-white font-bold text-lg md:text-2xl leading-none">
                  {'STEP'.split('').map((char, i) => (
                    <div key={`char-${index}-${i}`} className="mb-1 md:mb-4 text-center">{char}</div>
                  ))}
                </div>
                
                {/* Horizontal Step Number */}
                <div className="ml-10 text-white  text-3xl md:text-6xl">
                  {index + 1}
                </div>
              </div>

              {/* Step Content */}
              <div className="text-center px-6 max-w-2xl ml-16 sm:ml-20 md:ml-24">
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">{step.heading}</h3>
                <p className="text-white text-lg opacity-90">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default StepsSection