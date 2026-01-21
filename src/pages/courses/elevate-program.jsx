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
  CalendarCheck,
  Target,
  Layers,
  Network,
  Linkedin,
  
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
          <br />3 hrs each
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
      icon: <GraduationCap className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "What is the Elevate Program in Applied Data Science?",
      content:
        "The Elevate Program in Applied Data Science is a 6-month structured data science course designed for working professionals and students who want to learn data analytics, machine learning, and applied data science with flexible timings.",
    },
    {
      icon: <Users className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "Who should join this Applied Data Science program?",
      content:
        "This program is ideal for working professionals, fresh graduates, college students, and career switchers who want to build a career in data science without leaving their job or studies.",
    },
    {
      icon: <Clock className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "Is this a weekend Data Science course?",
      content:
        "Yes. This is a weekend-only Data Science program with live classes on Saturday and Sunday, making it suitable for learners from Tier 1 and Tier 2 cities.",
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "How are the classes conducted?",
      content:
        "Live classes are conducted on weekends (Saturday & Sunday – 3 hours each). From Monday to Friday, learners can watch pre-recorded videos at their own pace.",
    },
    {
      icon: <Clock className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "What is the duration of the Applied Data Science course?",
      content:
        "The total duration of the program is 6 months, following a well-defined learning roadmap that progresses from basics to advanced data science concepts.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "What topics are covered in this Data Science program?",
      content:
        "The curriculum covers Data Analytics, Python, Statistics, SQL, Data Visualization, Machine Learning, Deep Learning fundamentals, and real-world industry projects.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "Can beginners or non-technical students join this course?",
      content:
        "Yes. The program starts from fundamentals and is suitable for beginners and learners from non-technical backgrounds such as commerce, management, or arts.",
    },
    {
      icon: <Laptop className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "What if I miss a live weekend class?",
      content:
        "All live classes are recorded and uploaded to the LMS. Learners receive 1-year LMS access to all recordings for revision and catch-up.",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "Are doubt-clearing sessions included?",
      content:
        "Yes. Weekly doubt-clearing sessions are conducted where learners can ask questions related to recorded videos, live classes, assignments, and projects.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "Do you provide study material or books?",
      content:
        "Yes. After registration, physical study books are delivered via post, along with complete digital learning resources available on the LMS.",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "Will I get real project experience in this program?",
      content:
        "Yes. Learners receive hands-on project experience in Data Analytics, Machine Learning, and Deep Learning, along with continuous mentor feedback.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "Is career support included after course completion?",
      content:
        "Yes. Career acceleration support includes resume building, LinkedIn optimization, Naukri and Indeed profile setup, and structured job search strategy guidance.",
    },
  ];

  const benefits = [
    {
      id: 1,
      icon: Brain,
      title: "AI-Powered Learning Platform",
      description:
        "Learn through an adaptive AI-enabled platform with personalized feedback, GenAI-based practice, and real-world simulations.",
    },
    {
      id: 2,
      icon: Laptop,
      title: "Guided Live Learning (Not Self-Paced)",
      description:
        "A clear learning roadmap that tells you what to learn, when to learn, and how to apply it through structured live sessions.",
    },
    {
      id: 3,
      icon: CalendarCheck,
      title: "Weekend-Only Live Classes",
      description:
        "Instructor-led classes every Saturday and Sunday (3 hours each), ideal for working professionals and final-year students.",
    },
    {
      id: 4,
      icon: Briefcase,
      title: "Hands-On, Real-World Projects",
      description:
        "Build deployable projects using Python, SQL, Power BI, Machine Learning, TensorFlow, and Generative AI.",
    },
    {
      id: 5,
      icon: Users,
      title: "Learn From Industry Experts",
      description:
        "Get trained by IIT faculty and senior AI engineers working on real enterprise-grade AI solutions.",
    },
    {
      id: 6,
      icon: Target,
      title: "Dedicated Mentorship & Career Support",
      description:
        "Skill-gap analysis, personalized career roadmap, resume & LinkedIn optimization, and mock interviews with feedback.",
    },
    {
      id: 7,
      icon: Layers,
      title: "Integrated LMS Access",
      description:
        "Centralized LMS with pre-watch videos, live class links, recordings, assignments, and project resources.",
    },
    {
      id: 8,
      icon: Network,
      title: "Community, Workshops",
      description:
        "Access mentors, peer groups, workshops and profile-based job recommendations.",
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
  <title>
    Data Science & AI Online Weekend Course for Professionals | Elevate Program – TheCorrelation
  </title>

  <meta
    name="description"
    content="Join the Data Science & AI Online Weekend Course for working professionals by TheCorrelation. Master Python, SQL, Machine Learning, Deep Learning and Generative AI through live classes, real-world projects and expert mentorship."
  />

  <meta
    name="keywords"
    content="data science online course for professionals, data science weekend course, ai course for working professionals, machine learning online course, data science elevate program, thecorrelation"
  />

  <link
    rel="canonical"
    href="https://thecorrelation.in/courses/elevate-program"
  />

  {/* Indexing */}
  <meta name="robots" content="index, follow" />
  <meta
    name="googlebot"
    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />

  {/* Local + Trust */}
  <meta name="geo.region" content="IN-MP" />
  <meta name="geo.placename" content="Indore" />

  <meta name="author" content="TheCorrelation School of AI & Data Science" />
  <meta name="publisher" content="TheCorrelation School of AI & Data Science" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="TheCorrelation" />
  <meta
    property="og:title"
    content="Data Science & AI Online Weekend Course for Professionals | Elevate Program"
  />
  <meta
    property="og:description"
    content="A career-focused Data Science & AI online weekend course designed for working professionals. Learn with real projects, expert mentors and placement guidance."
  />
  <meta
    property="og:url"
    content="https://thecorrelation.in/courses/elevate-program"
  />
  <meta
    property="og:image"
    content="https://thecorrelation.in/og-elevate.png"
  />
  <meta property="og:locale" content="en_IN" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Data Science & AI Online Weekend Course for Professionals | Elevate Program"
  />
  <meta
    name="twitter:description"
    content="Upskill with TheCorrelation’s Data Science & AI online weekend course for working professionals."
  />
  <meta
    name="twitter:image"
    content="https://thecorrelation.in/og-elevate.png"
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
                  Become Job-Ready Data Scientist in 6 Months (Weekend Program)
                </span>
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl font-black leading-tight">
                  Elevate <br /> Program in
                </h1>

                <div className="text-3xl lg:text-4xl font-bold text-yellow-300 typewriter">
                  Applied Data Science
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
              <div className="flex flex-col sm:flex-row gap-4 pt-6 mb-6">

  {/* 📱 Mobile → Call */}
  <a
    href="tel:+917415346222"
    className="block md:hidden "
  >
    <div className=" min-h-[56px] px-6 bg-green-600 text-white font-semibold rounded-xl
      flex items-center justify-center gap-2 text-center
      transition-all duration-300 ease-in-out
      shadow-lg hover:bg-green-700 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
    >
      <PhoneCall className="w-5 h-5" />
      <span>Talk to Team</span>
    </div>
  </a>

  {/* 💻 Tablet & Desktop → WhatsApp */}
  <a
    href="https://wa.me/917415346222?text=Hey%2C%20I%20want%20to%20know%20more%20about%20the%20Elevate%20Program%20in%20Applied%20Data%20Science."
    target="_blank"
    rel="noopener noreferrer"
    className="hidden md:block "
  >
    <div className="w-full min-h-[56px] px-6 bg-green-600 text-white font-semibold rounded-xl
      flex items-center justify-center gap-2 text-center
      transition-all duration-300 ease-in-out
      shadow-lg hover:bg-green-700 hover:shadow-xl hover:scale-[1.02]"
    >
      <PhoneCall className="w-5 h-5" />
      <span>Talk to Team</span>
    </div>
  </a>

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
                    title: "Industry-Aligned Data Science Curriculum",
                    desc: "Master Data Science, Machine Learning, Deep Learning, and model deployment with a curriculum aligned to real-world industry requirements and job roles.",
                  },
                  {
                    title: "Expert Faculty & Dedicated Mentorship",
                    desc: "Learn directly from experienced Data Scientists and mentors from IIT, IIM, ISI, and senior professionals working on enterprise-grade AI solutions.",
                  },
                  {
                    title: "Hands-On, Real-World Projects",
                    desc: "Build deployable, portfolio-ready projects using live datasets and real business problem statements guided by industry experts.",
                  },
                  {
                    title: "Career Support & Job Readiness Program",
                    desc: "Get end-to-end career support including personalized mentorship, resume and LinkedIn optimization, mock interviews, and structured placement assistance.",
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

      <SuccessStoriesSection></SuccessStoriesSection>

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-red-600 text-xl font-semibold tracking-widest uppercase mb-3">
              Elevate Program
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Data Science & AI Career Program
            </h2>
            <p className="text-gray-600 text-lg">
              A structured, mentor-driven learning experience designed for real
              job outcomes — not just certificates. Built for students, working
              professionals, non-tech graduates, and career switchers.
            </p>
          </div>

          {/* Cards Grid */}
          <div
            className="
        grid gap-6
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Tools />

      <ElevateProgramStructure />

      <SoftSkillSection></SoftSkillSection>

      <section
        className="bg-[linear-gradient(135deg,#7b25d1,#ff2626,#910000)] text-white py-16 sm:py-20"
        aria-labelledby="director-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <h2
              id="director-heading"
              className="text-3xl sm:text-4xl font-bold mb-3"
            >
              Meet Our Visionary Leader
            </h2>
            <p className="text-lg sm:text-xl text-white/90">
              Leadership driving real-world Data Science careers
            </p>
          </div>

          {/* Card */}
          <article className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10">
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
              {/* Right Image – FIRST on mobile */}

              <div className="flex-shrink-0 lg:w-52 lg:h-110 flex justify-center lg:justify-end order-1 lg:order-2">
                <div
                  className="w-60 bg-white/10 rounded-2xl border-2 border-white/20 flex flex-col items-center text-center p-4"
                  role="img"
                  aria-label="Deepesh Wadhwani profile photo"
                >
                  {/* Image */}
                  <div className="relative w-54 h-48 overflow-hidden rounded-xl mb-4">
                    <Image
                      src="/Director1-Photo.png"
                      alt="Deepesh Wadhwani - Founder & Director"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* LinkedIn Icon */}

                  {/* Name & Role */}
                  <p className="text-white font-semibold text-lg">
                    Deepesh Wadhwani
                  </p>
                  <p className="text-white/80 text-sm">Founder & Lead Mentor</p>

                  <a
                    href="https://www.linkedin.com/in/deepeshwadhwani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile of Deepesh Wadhwani"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-md mt-4 
             bg-[#0A66C2] shadow-md hover:shadow-xl 
             hover:bg-[#004182] transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Left Content – SECOND on mobile */}
              <div className="flex-1 lg:pr-8 order-2 lg:order-1">
                <h3 className="text-2xl sm:text-3xl font-bold mb-1">
                  Deepesh Wadhwani
                </h3>
                <p className="text-lg sm:text-xl text-white/90 mb-4">
                  Founder & Director – TheCorrelation Institute
                </p>

                {/* Condensed Description */}
                <div className="space-y-3 text-base sm:text-lg leading-relaxed">
                  <p>
                    With{" "}
                    <strong className="text-white">
                      15+ years of experience in Data Science, Analytics, and AI
                    </strong>
                    , Deepesh Wadhwani combines deep technical expertise with
                    real business impact to build career-focused education.
                  </p>

                  <p>
                    An alumnus of{" "}
                    <strong className="text-white">
                      IIT Kharagpur and IIM Calcutta (MBA)
                    </strong>
                    , he has worked with global organizations like{" "}
                    <strong className="text-white">
                      Mitsubishi Fuso and Wells Fargo
                    </strong>
                    , solving large-scale analytics problems in Fortune 500
                    environments.
                  </p>

                  <p>
                    He founded{" "}
                    <strong className="text-white">
                      TheCorrelation Institute
                    </strong>{" "}
                    to bridge the gap between academic learning and
                    industry-ready skills, helping thousands transition into
                    high-growth roles in Data Analytics, Machine Learning, and
                    AI.
                  </p>

                  <blockquote className="border-l-4 border-white/40 pl-4 italic">
                    <p className="text-white/90">
                      “Our mission is simple — unlock potential and create
                      future-ready professionals.”
                    </p>
                  </blockquote>
                </div>

                {/* Logos */}
                <ul
                  className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6"
                  aria-label="Institutes and organizations associated with Deepesh Wadhwani"
                >
                  {[
                    { name: "IIT Kharagpur", logo: "/iit-kharagpur.png" },
                    { name: "IIM Calcutta", logo: "/IIM-Calcutta-Logo.svg" },
                    { name: "Mitsubishi Fuso", logo: "/mitsubishi-logo.png" },
                    { name: "Wells Fargo", logo: "/wells-fargo.png" },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-col items-center justify-center bg-white/15 border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition"
                    >
                      <div className="relative w-20 h-12 mb-2">
                        <Image
                          src={item.logo}
                          alt={`${item.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs sm:text-sm text-white/90 font-medium text-center">
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Elevatetimeline />

      <LeadForm></LeadForm>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Elevate Program Plan & Weekly Timeline
            </h2>
            <p className="mt-3 text-gray-600 text-lg">
              A structured, week-by-week roadmap designed for real-world
              outcomes
            </p>
          </div>

          {/* Images */}
          <div className="flex justify-center">
            {/* 📱 Mobile Image */}
            <img
              src="/Elevate-Program-timeline-mobile.jpeg"
              alt="Elevate Program Weekly Timeline Mobile"
              className="block md:hidden w-full max-w-md rounded-2xl shadow-lg"
            />

            {/* 💻 Tablet & Desktop Image */}
            <img
              src="/Elevate-Program-timeline-desktop.jpeg"
              alt="Elevate Program Weekly Timeline Desktop"
              className="hidden md:block w-full max-w-5xl rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <ElevatePriceSection />

      <section className="py-10 bg-white">
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
                  className="faq-header w-full px-2 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 text-black  flex-shrink-0 flex items-center justify-center `}
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
