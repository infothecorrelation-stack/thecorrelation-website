"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  Rocket,
  Brain,
  Check,
  GraduationCap,
  Clock,
  Users,
  Briefcase,
  Laptop,
  BookOpen,
  CheckCircle2,
  MonitorSmartphone,
  Wallet,
  FileCheck,
  RefreshCw,
  BarChart3,
  Award,
  Send,
  PhoneCall,
  CheckCircle,
  User,
  Trophy,
  HelpCircle,
  Clipboard,
  ChevronDown,
  ChevronUp,
  Phone,
  List,
  ArrowRight,
  MessageCircle,
  BookText,
  FileText,
  Smile,
  FileSignature,
  ClipboardCheck,
  BadgeCheck,
  BookOpenCheck,
  Landmark,
  Users2,
  FilePen,
  Volume2,
  Languages,
  ClipboardList,
  Compass,
  CalendarDays,
  LayoutGrid,
  
} from "lucide-react";
import Image from "next/image";
import Head from "next/head";

// Adjust paths based on your project structure
import Scholarship from "@/components/Scholarship";
import PlacementOverview from "@/components/PlacementOverview";
import Tools from "@/components/Tools";
import CoursePriceSection from "@/components/PGPCoursePriceSection";
import ReachOutForm from "@/components/ReachOutForm";
import CourseStructure from "@/components/CourseStructure";
import SoftSkillSection from "@/components/SoftSkillSection";
import LogicBoxSection from "@/components/LogicBoxSection";
import CertificateSection from "@/components/CertificateSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import YourJourneySection from "@/components/YourJourneySection";
import AboutUsSection from "@/components/AboutUsSection";
import FacultySection from "@/components/FacultySection";
import WhoShouldJoin from "@/components/WhoShouldJoin";
import BookSection from "@/components/BookSection";
import LeadForm from "@/components/LeadForm";
import { postGraduationConfig } from "@/data/courseData";
import CareerExpertCTA from "@/components/LeadButtonSection";
import ElevateProgramStructure from "@/components/ElevateProgramStructure";
import Elevatetimeline from "@/components/Elevatetimeline";
import ElevatePriceSection from "@/components/ElevateFeeStructure";
import CompactLeadForm from "@/components/CompactLeadForm";


const PostGraduation2 = () => {
  const stats = [
    {
      title: (
        <>
          (Sat + Sun)
          <br />
          3 hrs each
        </>
      ),
      label: "Weekend-Only Live Classes ",
    },
    { title: "Online", label: "Program Mode" },
    {
      title: (
        <>
          10-12
          <br />
          hrs/week
        </>
      ),
      label: "Total Effort",
    },
    { title: "6 Months", label: "Program Duration" },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
  {
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the Data Science Elevate Program?",
    content:
      "The Data Science Elevate Program is an intensive, industry-focused learning pathway designed to take you from core analytics to advanced machine learning and AI. It combines structured classroom learning, hands-on projects, and mentorship to make you job-ready.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Do I need prior coding or mathematics experience?",
    content:
      "No prior coding or advanced mathematics background is required. The program starts with Python, statistics, and analytics fundamentals, ensuring learners from non-technical backgrounds can confidently progress.",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Who should enroll in the Elevate Program?",
    content:
      "This program is ideal for students, graduates, working professionals, and career switchers who want to build a strong foundation and advance into Data Science, Machine Learning, and AI roles.",
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the learning format and time commitment?",
    content:
      "The Elevate Program follows a structured, progressive learning model with daily guided sessions, hands-on practice, and project work. The schedule is designed to simulate real-world industry workflows.",
  },
  {
    icon: <FileCheck className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What kind of projects will I work on?",
    content:
      "You’ll work on industry-aligned projects covering data analytics, machine learning models, deep learning applications, and end-to-end deployment. These projects are designed to strengthen your portfolio.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Does the Elevate Program include real-world exposure?",
    content:
      "Yes. The program emphasizes practical exposure through case studies, live datasets, real-world problem statements, and capstone projects guided by industry mentors.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What certifications will I receive?",
    content:
      "You will earn multiple milestone certifications, including Data Analytics, Machine Learning, Advanced ML, and a final Executive Certificate in Applied Data Science upon successful completion.",
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Is career support provided after completion?",
    content:
      "Yes. Learners receive structured career guidance including resume building, portfolio reviews, mock interviews, and job-readiness mentoring aligned with current industry hiring standards.",
  },
  {
    icon: <Laptop className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What are the technical requirements for the program?",
    content:
      "A laptop with at least an Intel i5 or Ryzen 5 processor, 8–16 GB RAM, and 256 GB SSD is recommended. No high-end GPU is required for most of the coursework.",
  },
  {
    icon: <Wallet className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the fee structure for the Elevate Program?",
    content:
      "The Elevate Program offers flexible payment options with structured installments. Detailed fee information and payment plans can be discussed with the admissions team.",
  },
];


const benefits = [
  {
    id: 1,
    icon: Compass,
    title: "Guided Learning, Not Self-Paced",
    description:
      "You are guided step-by-step on what to learn, when to learn, and how to apply concepts through structured sessions and mentor direction.",
  },
  {
    id: 2,
    icon: CalendarDays,
    title: "Weekend-Only Live Classes",
    description:
      "Live instructor-led sessions every Saturday & Sunday (3 hours each), designed specifically for working professionals.",
  },
  {
    id: 3,
    icon: LayoutGrid,
    title: "Integrated LMS Experience",
    description:
      "Access pre-watch videos, live class links, recordings, assignments, projects, and post-reads — all in one centralized LMS.",
  },
  {
    id: 4,
    icon: Briefcase,
    title: "Job Recommendation & Career Support",
    description:
      "Receive structured job recommendations, profile-aligned applications, resume support, and interview preparation assistance.",
  },
];


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* 🔥 SEO META TAGS */}
      <Head>
        {/* Primary SEO */}
        <title>Data Science Elevate Program | TheCorrelation</title>

        <meta
          name="description"
          content="TheCorrelation’s Post Graduate Program in Data Science & AI in Indore helps you master Python, SQL, Machine Learning, Deep Learning and Generative AI through real-world projects and expert mentorship."
        />

        <meta
          name="keywords"
          content="pgp data science indore, post graduate program in data science, ai pgp course, machine learning pgp, generative ai pgp, thecorrelation"
        />

        <link
          rel="canonical"
          href="https://thecorrelation.in/courses/post-graduation-program"
        />

        {/* Indexing Control */}
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* Local SEO Signal */}
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
          content="Post Graduate Program in Data Science & AI | TheCorrelation"
        />
        <meta
          property="og:description"
          content="Industry-ready Post Graduate Program in Data Science & AI with real projects, tools, and expert mentors at TheCorrelation."
        />
        <meta
          property="og:url"
          content="https://thecorrelation.in/courses/post-graduation-program"
        />
        <meta
          property="og:image"
          content="https://thecorrelation.in/og-pgp.png"
        />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Post Graduate Program in Data Science & AI | TheCorrelation"
        />
        <meta
          name="twitter:description"
          content="Master Data Science, AI and Machine Learning with TheCorrelation’s PGP program in Indore."
        />
        <meta
          name="twitter:image"
          content="https://thecorrelation.in/og-pgp.png"
        />

        {/* Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section className="relative text-white">
        {/* Optimized Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/PGP-HomeHero.jpg"
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
                  Elevate <br /> Program in
                </h1>

                <div className="text-3xl lg:text-4xl font-bold text-yellow-300 typewriter">
                  Data Science
                </div>
              </div>

              {/* Description */}
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                Build industry-ready data science skills through a structured,
                weekend-friendly program covering analytics, machine learning,
                GenAI, and deployment. Learn by doing, not just watching.
              </p>

              {/* ⭐ FIXED STATS (Perfect alignment) ⭐ */}
              <div
                className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 
      gap-4 sm:gap-8 lg:gap-30 py-6"
              >
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
                
              </div>
            </div>

            {/* RIGHT SIDE VISUAL — unchanged */}
            <div>
              <div className="w-full max-w-md lg:ml-auto">
    <CompactLeadForm
      courseName="elevate-program"
      courseDisplayName="Data Science Elevate Program"
    />
   </div>
            </div>
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
            About the Data Science Elevate Program
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Data Science Elevate is a guided executive learning program
                created for professionals who want to build serious data science
                and AI capabilities without leaving their jobs.
                <br />
                Unlike self-paced courses, this program follows a strict
                instructor-led timeline, combining pre-watch learning, live
                weekend classes, and hands-on assignments.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Industry-Aligned Curriculum",
                    desc: "Learn Data Science, Machine Learning, Deep Learning, and Model Deployment used in real industry environments",
                  },
                  {
                    title: "Expert Faculty & Mentorship",
                    desc: "Learn from experienced Data Scientists and mentors from IIT, IIM, ISI, and industry leaders",
                  },
                  {
                    title: "Real-World Projects & Internship",
                    desc: "Work on live national and international projects with guided in-office internship exposure",
                  },
                  {
                    title: "Job Assurance & Career Support",
                    desc: " mentorship, resume building, mock interviews, and strong placement support",
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
                <p className="text-gray-600 mb-6">
                  Full-Time Immersive Program
                </p>

                <div className="grid grid-cols-2 gap-4 text-center">
                  {[
                    { label: "Weekly Learning Hours", value: "10-12 Hrs" },
                    { label: "Real-World Projects", value: "10+" },
                    { label: "Mentorship", value: "Yes" },
                    { label: "Job Assurance", value: "Yes" },
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

      <ElevateProgramStructure/>

      <SoftSkillSection></SoftSkillSection>

      <Elevatetimeline/>

      

      <LeadForm></LeadForm>

      <CertificateSection></CertificateSection>

      <SuccessStoriesSection></SuccessStoriesSection>

      

      <YourJourneySection></YourJourneySection>


<section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-red-600 text-xl font-semibold tracking-widest uppercase mb-3">
            What You Get
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Elevate Program Advantage
          </h2>
          <p className="text-gray-600 text-lg">
            A structured, mentor-driven learning experience designed for
            real-world outcomes and career growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="
            grid gap-6
            grid-cols-1
            sm:grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            justify-center
          "
        >
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="
                  bg-white
                  border border-red-100
                  rounded-2xl
                  p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  flex flex-col
                "
              >
                {/* Icon */}
               <div className="w-12 h-12 mx-auto rounded-xl bg-red-600 flex items-center justify-center mb-5">
  <Icon className="w-6 h-6 text-white" />
</div>


                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>


      <ElevatePriceSection/>

      

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

      <CareerExpertCTA />
    </div>
  );
};

export default PostGraduation2;
