'use client';

import React from 'react'
import { useEffect,useState } from 'react';
import {
  Users,
  Star,
  GraduationCap,
  BookOpen,
  Clock,
  BarChart3,
  Briefcase,
  CheckCircle2,
  MonitorSmartphone,
  Laptop,
  Wallet,
  Check,
  Building,
  Brain,
  TrendingUp,
  Database,
  Send,
  ArrowRight,
  PhoneCall,
  ChevronDown,
  Rocket,
  Award,
  CheckCircle,
  User,
  Trophy,
  HelpCircle,
  Clipboard,
  ChevronUp,
  Phone,
  List,
  RefreshCw
} from "lucide-react";
import Image from "next/image";
import Head from "next/head";


import CDSPstructure from '@/components/CDSPstructure';
import WhoShouldJoin from "@/components/WhoShouldJoin";
import Tools from "@/components/Tools";
import CourseStructure from "@/components/CourseStructure";
import SoftSkillSection from "@/components/SoftSkillSection";
import LogicBoxSection from "@/components/LogicBoxSection";
import CertificateSection from "@/components/CertificateSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import FacultySection from "@/components/FacultySection";
import YourJourneySection from "@/components/YourJourneySection";
import Scholarship from "@/components/Scholarship";
import BookSection from "@/components/BookSection";
import LeadForm from '@/components/LeadForm';
import CDSPriceSection from '@/components/CDSPriceSection';
import {charteredDataScienceConfig} from '@/data/courseData';
import CareerExpertCTA from "@/components/LeadButtonSection";

const CharteredDataScience = () => {

  const stats = [
  { title: "100%", label: "Job Assurance" },
  { title: "Online/Offline", label: "Program Mode" },
   { title: "4 Hours", label: "Daily Efforts" },
  { title: "10 Months", label: "Program Duration" },
];
  
    
    
   


  const [openIndex, setOpenIndex] = useState(null);


  const faqs = [
  {
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the Chartered Data Scientist (CDS) Program?",
    content:
      "The CDS program is a 10-month part-time training designed to help you master Data Science, Machine Learning, Deep Learning, and AI with hands-on practical learning and industry-focused projects.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Do I need technical or coding knowledge to join?",
    content:
      "No prior knowledge is required. The program starts from Python, Statistics, and Analytics basics, making it beginner-friendly for all backgrounds.",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Who can join the CDS program?",
    content:
      "Students, fresh graduates, and working professionals from any field can join. The only requirement is willingness to learn and attend regular sessions.",
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the learning schedule?",
    content:
      "The course runs part-time with two 1.5-hour live sessions daily (Monday–Friday), designed to fit alongside studies or a job.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What topics does the curriculum cover?",
    content:
      "You’ll learn Python, Statistics, EDA, ML, Deep Learning, NLP, Computer Vision, SQL, Power BI, Cloud Deployment, and real-world project execution.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Does the program include real projects?",
    content:
      "Yes. You will work on multiple guided projects plus applied assignments to build a strong industry-ready portfolio.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What certifications will I receive?",
    content:
      "You’ll receive certifications in Data Analytics, Foundational ML, Advanced ML, Deep Learning, and the Chartered Data Scientist credential.",
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Does the CDS program provide placement support?",
    content:
      "Yes. You get resume building, interview preparation, mock interviews, and direct access to hiring partners.",
  },
  {
    icon: <Laptop className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What are the laptop requirements?",
    content:
      "A laptop with at least Intel i5/Ryzen 5, 8–16GB RAM, and a 256GB SSD is recommended for smooth ML and AI practice.",
  },
  {
    icon: <Wallet className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the course fee and payment structure?",
    content:
      "The total fee is ₹1,45,000 with multiple options—Classical Monthly Payments or the Pay After Placement option for flexibility.",
  },
];


const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Head>
  {/* Page Title */}
  <title>
    Chartered Data Science Program | TheCorrelation
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="TheCorrelation’s Chartered Data Science Program in Indore helps you master Python, Statistics, Machine Learning, Deep Learning, and AI through real-world projects and expert mentorship."
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="chartered data science program, data science course indore, ai data science program, machine learning course, thecorrelation"
  />

  {/* Canonical URL (Must match Navbar) */}
  <link
    rel="canonical"
    href="https://thecorrelation.in/courses/chartered-data-science"
  />

  {/* Indexing */}
  <meta name="robots" content="index, follow" />
  <meta
    name="googlebot"
    content="index, follow, max-snippet:-1, max-image-preview:large"
  />

  {/* Local SEO */}
  <meta name="geo.region" content="IN-MP" />
  <meta name="geo.placename" content="Indore" />

  {/* Brand Authority */}
  <meta name="author" content="TheCorrelation" />
  <meta name="publisher" content="TheCorrelation" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="TheCorrelation" />
  <meta
    property="og:title"
    content="Chartered Data Science Program | TheCorrelation"
  />
  <meta
    property="og:description"
    content="Become an industry-ready data science professional with TheCorrelation’s Chartered Data Science Program."
  />
  <meta
    property="og:url"
    content="https://thecorrelation.in/courses/chartered-data-science"
  />
  <meta
    property="og:image"
    content="https://thecorrelation.in/og-chartered-ds.png"
  />
  <meta property="og:locale" content="en_IN" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Chartered Data Science Program | TheCorrelation"
  />
  <meta
    name="twitter:description"
    content="Master Data Science, Machine Learning and AI with real-world projects at TheCorrelation."
  />
  <meta
    name="twitter:image"
    content="https://thecorrelation.in/og-chartered-ds.png"
  />

  {/* Mobile */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>

       <section className="relative text-white">
      
        {/* Optimized Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/CDS-HomeHero.jpg"
            alt="ADA Hero Banner"
            fill
            priority
            className="object-cover object-right md:object-center"
          />
        </div>
      
      
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      
        {/* Content Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
      
            {/* LEFT SIDE */}
            <div className="space-y-8">
      
              {/* Badge */}
              <div className="inline-flex items-center bg-black/40 rounded-full px-6 py-3 backdrop-blur-sm">
                <span className="text-yellow-300 mr-2"></span>
                <span className="text-sm text-white font-medium">
                  Transform Your Career in Data Science
                </span>
              </div>
      
              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl font-black leading-tight">
                  Chartered  <br /> Program in
                </h1>
      
                <div className="text-3xl lg:text-4xl font-bold text-yellow-300 typewriter">
                 Chartered Data Science 
                </div>
              </div>
      
              {/* Description */}
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                Build end-to-end Data Science expertise with a structured curriculum covering Python, statistics, machine learning, deep learning, NLP, and real-world AI projects—guided by experienced industry professionals.

              </p>
      
              {/* ⭐ FIXED STATS (Perfect alignment) ⭐ */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 
        gap-4 sm:gap-8 lg:gap-26 py-6">
      
        {stats.map((item, idx) => (
          <div 
            key={idx}
            className="flex flex-col items-center justify-center min-h-[90px] text-center"
          >
            {/* TITLE (single line, always centered) */}
            <div className="text-2xl md:text-3xl lg:text-3xl font-bold text-yellow-300 leading-none whitespace-nowrap">
        {item.title}
      </div>
      
      
            {/* LABEL (centered under title) */}
            <div className="text-sm text-gray-300 leading-none mt-2 whitespace-nowrap">
              {item.label}
            </div>
          </div>
        ))}
      
      </div>
      
      
      
              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 mb-4">
                <button
                  onClick={() => {
                    const formElement = document.getElementById("contact-form");
                    if (formElement) formElement.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all hover-lift pulse-glow"
                >
                  Apply Now
                </button>
              </div>
      
            </div>
      
            {/* RIGHT SIDE VISUAL — unchanged */}
            <div></div>
      
          </div>
        </div>
      
        {/* Bottom Wave */}
        <div className="absolute bottom-[-1px] left-0 right-0">
  <svg
    className="block"
    viewBox="0 0 1440 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
      fill="white"
    />
  </svg>
</div>
      </section>

     


      <section id="about" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
      About the Chartered Data Science Program
    </h2>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <p className="text-lg text-gray-600 mb-6">
          The Chartered Data Science (CDS) program is designed to build a strong
          foundation in Data Science and Artificial Intelligence. It combines
          core theory with practical implementation to prepare learners for
          real-world data-driven roles across industries.
        </p>

        <div className="space-y-4">
          {[
            {
              title: "Comprehensive Data Science Curriculum",
              desc: "Master Python, Statistics, SQL, Exploratory Data Analysis, Machine Learning, and Deep Learning concepts",
            },
            {
              title: "Expert-Led Learning",
              desc: "Learn from experienced Data Scientists and mentors with strong academic and industry backgrounds",
            },
            {
              title: "Hands-on Projects & Case Studies",
              desc: "Apply concepts through real-world datasets, ML models, and practical business use cases",
            },
            {
              title: "Career & Skill Development Support",
              desc: "Get guidance on resumes, interviews, and industry best practices for Data Science roles",
            },
          ].map((item, idx) => (
            <div className="flex items-start gap-3" key={idx}>
              <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Stats Card */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            10 Months
          </div>
          <p className="text-gray-600 mb-6">Structured Learning Program</p>

          <div className="grid grid-cols-2 gap-4 text-center">
            {[
              { label: "Learning Hours", value: "180+" },
              { label: "Hands-on Projects", value: "10+" },
              { label: "Core DS Tools", value: "25+" },
              { label: "Career Guidance", value: "Included" },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-2xl font-bold text-gray-900">
                  {card.value}
                </div>
                <p className="text-sm text-gray-600">{card.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <WhoShouldJoin></WhoShouldJoin>
      
            <Tools />
      
            <CDSPstructure></CDSPstructure>
      
            <SoftSkillSection></SoftSkillSection>

            <BookSection config={charteredDataScienceConfig} ></BookSection>

            <LeadForm></LeadForm>

             <CertificateSection></CertificateSection>

             <SuccessStoriesSection></SuccessStoriesSection>

              <Scholarship></Scholarship>

              <YourJourneySection></YourJourneySection>
      
            <LogicBoxSection></LogicBoxSection>
      
            <CDSPriceSection/>
      
            
             
            
      
            

            
      
            
      
           
      
      
            
              



      
      

      

      

      <section className="py-20 bg-white">
              <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
                  Frequently Asked Questions
                </h2>
      
                <div className="max-w-6xl mx-auto space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="faq-item bg-gray-50 rounded-lg shadow-md overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="faq-header w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center ${faq.bg}`}
                          >
                            {faq.icon}
                          </div>
                          <span className="text-xl font-semibold text-gray-800">
                            {faq.title}
                          </span>
                        </div>
                        {openIndex === index ? (
                          <ChevronUp className="w-6 h-6 text-gray-400 transition-transform" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400 transition-transform" />
                        )}
                      </button>
                      {openIndex === index && (
                        <div className="faq-content px-8 pb-6">
                          <p className="text-gray-600 ml-16">{faq.content}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>


     

      <CareerExpertCTA/>
    </div>
  );
}

export default CharteredDataScience