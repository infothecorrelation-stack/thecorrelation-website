'use client';


import React from 'react'
import {
  Users,
  GraduationCap,
  HelpCircle,
  Clock,
  BarChart3,
  Briefcase,
  CheckCircle2,
  MonitorSmartphone,
  Laptop,
  Wallet,
  Star,
  Building,
  Brain,
  TrendingUp,
  Database,
  Send,
  ArrowRight,
  PhoneCall,
  ChevronDown,
  Rocket,
  BookOpen,
  Award,
  CheckCircle,
  User,
  Trophy,
  Clipboard,
  ChevronUp,
  Phone,
  List,
  RefreshCw
} from "lucide-react";
import Image from "next/image";
import Head from "next/head";


import { useState } from 'react';
import { Check } from 'lucide-react';
import CBAStructure from '@/components/CBAStructure';
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
import CBAPriceSection from '@/components/CBAPriceSection';
import {charteredBusinessAnalyticsConfig} from '@/data/courseData'
import CareerExpertCTA from "@/components/LeadButtonSection";


const CharteredBusinessAnalytics = () => {

 const stats = [
  { title: "100%", label: "Job Assurance" },
  { title: "Online/Offline", label: "Program Mode" },
   { title: "4 Hours", label: "Daily Efforts" },
  { title: "6 Months", label: "Program Duration" },
];
  
   
 
  

const [openIndex, setOpenIndex] = useState(null);


  const faqs = [
  {
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the Chartered Business Analyst (CBA) Program?",
    content:
      "The CBA is a 6-month part-time program designed to teach Data Analytics, Business Intelligence, and Business Strategy, helping you become job-ready for Business Analyst roles.",
  },
  {
    icon: <HelpCircle className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Do I need technical or coding experience to join?",
    content:
      "No. The program starts from the basics and requires no prior coding or analytics background, making it suitable for beginners.",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Who can enroll in the CBA program?",
    content:
      "Graduates, working professionals, and career changers looking to enter Business Analytics or Data Analytics can join. Basic English understanding is required.",
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the learning schedule?",
    content:
      "The program runs part-time with two 1.5-hour sessions each day, Monday to Friday, designed to fit alongside job or college schedules.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What subjects and tools does the CBA program cover?",
    content:
      "The curriculum includes Python, SQL, Excel, EDA, Power BI, Business Strategy, Consulting Frameworks, Agile, SDLC, and soft skills required for Business Analyst roles.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Does the program include real-world projects?",
    content:
      "Yes. You will solve real business problems using analytics, build dashboards, and create insights similar to industry Business Analyst tasks.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Will I receive a certification after completion?",
    content:
      "Yes. You receive a Chartered Business Analyst certification along with Data Analytics and Business Analytics completion certificates.",
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Does the CBA program provide placement support?",
    content:
      "Yes, you get resume building, mock interviews, soft skill training, and direct access to hiring partners for Business Analyst roles.",
  },
  {
    icon: <Laptop className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What laptop specifications are required?",
    content:
      "A laptop with at least an Intel i3/i5 or Ryzen 3/5, 8GB RAM, and a 256GB SSD is recommended for analytics and dashboard work.",
  },
  {
    icon: <Wallet className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the program fee and payment structure?",
    content:
      "The fee is ₹80,000 (offline) or ₹55,000 (online), with flexible EMI options and a Study Now, Pay Later option where you pay after placement.",
  },
];



const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Head>
  {/* Title */}
  <title>
    Chartered Business Analytics Program | TheCorrelation
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content="TheCorrelation’s Chartered Business Analytics Program in Indore teaches SQL, Excel, Power BI, Tableau, and Analytics through real-world projects with expert mentorship."
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="chartered business analytics program, business analytics course indore, power bi course, tableau course, sql analytics, thecorrelation"
  />

  {/* Canonical URL (match Navbar) */}
  <link
    rel="canonical"
    href="https://thecorrelation.in/courses/chartered-bussiness-analytics"
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
    content="Chartered Business Analytics Program | TheCorrelation"
  />
  <meta
    property="og:description"
    content="Master SQL, Excel, Power BI, Tableau, and Analytics with TheCorrelation’s Chartered Business Analytics Program."
  />
  <meta
    property="og:url"
    content="https://thecorrelation.in/courses/chartered-bussiness-analytics"
  />
  <meta
    property="og:image"
    content="https://thecorrelation.in/og-chartered-ba.png"
  />
  <meta property="og:locale" content="en_IN" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Chartered Business Analytics Program | TheCorrelation"
  />
  <meta
    name="twitter:description"
    content="Learn SQL, Excel, Power BI, Tableau, and Analytics through real-world projects at TheCorrelation."
  />
  <meta
    name="twitter:image"
    content="https://thecorrelation.in/og-chartered-ba.png"
  />

  {/* Mobile */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>

       <section className="relative text-white">
      
        {/* Optimized Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/CBA-HomeHero.png"
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
                   Transform Your Career in Bussiness Analytics 
                </span>
              </div>
      
              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl font-black leading-tight">
                 Chartered <br /> Program in
                </h1>
      
                <div className="text-3xl lg:text-4xl font-bold text-yellow-300 typewriter">
                  Bussiness Analytics
                </div>
              </div>
      
              {/* Description */}
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                Develop industry-ready Business Analytics skills with a practical curriculum covering data analysis, business intelligence, dashboarding, consulting frameworks, and decision-making—through hands-on projects and expert mentorship.

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
      About the Chartered Business Analytics Program
    </h2>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <p className="text-lg text-gray-600 mb-6">
          The Chartered Business Analytics (CBA) program is designed to help
          learners become confident, data-driven business professionals. The
          program blends analytics, business intelligence, and strategic
          thinking to support better decision-making across industries.
        </p>

        <div className="space-y-4">
          {[
            {
              title: "Business-Centric Analytics Curriculum",
              desc: "Learn Excel, SQL, Python for analytics, Power BI, statistics, and business intelligence concepts",
            },
            {
              title: "Industry Expert Guidance",
              desc: "Get trained by experienced industry professionals with strong academic and corporate backgrounds",
            },
            {
              title: "Real-World Business Projects",
              desc: "Work on practical case studies, dashboards, and analytics projects based on real business scenarios",
            },
            {
              title: "Career & Placement Support",
              desc: "Receive resume building, interview preparation, and placement assistance for Business Analyst roles",
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
            6 Months
          </div>
          <p className="text-gray-600 mb-6">Part-Time Professional Program</p>

          <div className="grid grid-cols-2 gap-4 text-center">
            {[
              { label: "Learning Hours", value: "180+" },
              { label: "Business Projects", value: "10+" },
              { label: "Analytics Tools", value: "15+" },
              { label: "Placement Support", value: "Included" },
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
      
            <CBAStructure></CBAStructure>
      
            <SoftSkillSection></SoftSkillSection>

             <BookSection config={charteredBusinessAnalyticsConfig} ></BookSection>


             <LeadForm></LeadForm>


             <CertificateSection></CertificateSection>

              <SuccessStoriesSection></SuccessStoriesSection>

              <Scholarship></Scholarship>


              <YourJourneySection></YourJourneySection>
      
            <LogicBoxSection></LogicBoxSection>
      
            
      
           
             
            
      
            

            
      
            
      
            
      
      
            
                       

      


      
      <CBAPriceSection/>

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

export default CharteredBusinessAnalytics
