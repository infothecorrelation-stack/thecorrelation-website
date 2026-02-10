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
  Monitor,
  Globe,
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
import ElevateDAStructure from "@/components/ElevateDAStructure";
import Elevatetimeline from "@/components/Elevatetimeline";
import ElevateDAFee from "@/components/ElevateDAFee";
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
    { title: "2.5 Months", label: "Program Duration" },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      icon: <GraduationCap className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "What is the Elevate Data Analytics Program?",
      content:
        "The Elevate Data Analytics Program is a 2.5-month, weekend-focused data analytics course in India designed for working professionals, graduates, and beginners to build job-ready analytics skills.",
    },
    {
      icon: <Users className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "Who can join this Data Analytics course?",
      content:
        "This course is suitable for working professionals, fresh graduates, final-year students, career switchers, and learners from non-technical backgrounds.",
    },
    {
      icon: <CalendarDays className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "Are these data analytics classes conducted on weekends?",
      content:
        "Yes. All live classes are conducted on weekends (Saturday and Sunday), making it ideal for working professionals and college students.",
    },
    {
      icon: <Monitor className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "How are the classes conducted?",
      content:
        "Classes are conducted live online on weekends, supported by guided learning, assignments, and access to class recordings through the LMS.",
    },
    {
      icon: <Clock className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "What is the duration of this Data Analytics course?",
      content:
        "The total duration of the Elevate Data Analytics Program is 2.5 months, following a structured and job-oriented learning roadmap.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "What tools and skills will I learn?",
      content:
        "You will learn Excel, SQL, Python, Power BI, data visualization, and practical business analytics skills used in real-world roles.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "Is this course suitable for non-technical background students?",
      content:
        "Yes. This data analytics course starts from the basics and is designed to be beginner-friendly for learners with no prior technical or coding experience.",
    },
    {
      icon: <Laptop className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "What if I miss a live weekend class?",
      content:
        "All live classes are recorded and uploaded to the LMS, allowing learners to watch sessions later for revision or catch-up.",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "Will I work on real-world data analytics projects?",
      content:
        "Yes. Learners work on hands-on, real-world data analytics projects using real datasets to build a job-ready portfolio.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "Is career support included after course completion?",
      content:
        "Yes. Career support includes resume building, LinkedIn optimization, mock interviews, and guidance for data analyst job roles.",
    },
    {
      icon: <Globe className="w-6 h-6 text-black" />,
      bg: "bg-red-600",
      title: "Is this Data Analytics course available PAN India?",
      content:
        "Yes. This data analytics course in India is available PAN India through live online weekend classes.",
    },
  ];

  const benefits = [
    {
      id: 1,
      icon: Brain,
      title: "Smart Learning Platform",
      description:
        "Practice data analytics with guided exercises, real datasets, and hands-on problem solving.",
    },
    {
      id: 2,
      icon: Laptop,
      title: "Live Instructor-Led Classes",
      description:
        "Weekend live sessions with a clear roadmap — learn what matters and how to apply it.",
    },
    {
      id: 3,
      icon: CalendarCheck,
      title: "Weekend-Only Classes",
      description:
        "Saturday and Sunday classes designed for working professionals and students.",
    },
    {
      id: 4,
      icon: Briefcase,
      title: "Real-World Analytics Projects",
      description:
        "Build job-ready projects using Excel, SQL, Python, and Power BI.",
    },
    {
      id: 5,
      icon: Users,
      title: "Industry Expert Trainers",
      description:
        "Learn from experienced data analysts working on real business problems.",
    },
    {
      id: 6,
      icon: Target,
      title: "Career & Placement Support",
      description:
        "Resume help, mock interviews, and guidance for data analyst roles.",
    },
    {
      id: 7,
      icon: Layers,
      title: "All-in-One LMS Access",
      description:
        "Recordings, assignments, datasets, and project resources in one place.",
    },
    {
      id: 8,
      icon: Network,
      title: "PAN India Community",
      description:
        "Peer learning, mentor support, and career-focused workshops across India.",
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
          Data Analytics Online Weekend Course for Professionals | Elevate
          Program – TheCorrelation
        </title>

        <meta
          name="description"
          content="Join the Data Analytics Online Weekend Course for working professionals by TheCorrelation. Learn Excel, SQL, Python, Power BI, statistics and real-world analytics through live weekend classes, hands-on projects and expert mentorship."
        />

        <meta
          name="keywords"
          content="data analytics online course for professionals, data analytics weekend course, data analyst course online, excel sql python power bi course, elevate program data analytics, thecorrelation"
        />

        <link
          rel="canonical"
          href="https://thecorrelation.in/courses/elevate-program-in-data-analytics"
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

        <meta
          name="author"
          content="TheCorrelation School of AI & Data Science"
        />
        <meta
          name="publisher"
          content="TheCorrelation School of AI & Data Science"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TheCorrelation" />
        <meta
          property="og:title"
          content="Data Analytics Online Weekend Course for Professionals | Elevate Program"
        />
        <meta
          property="og:description"
          content="A career-focused Data Analytics online weekend program for working professionals. Build job-ready analytics skills with real projects, expert mentors and placement guidance."
        />
        <meta
          property="og:url"
          content="https://thecorrelation.in/courses/elevate-program-in-data-analytics"
        />
        <meta
          property="og:image"
          content="https://thecorrelation.in/og-elevate-data-analytics.png"
        />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Data Analytics Online Weekend Course for Professionals | Elevate Program"
        />
        <meta
          name="twitter:description"
          content="Upskill with TheCorrelation’s Data Analytics online weekend course for working professionals."
        />
        <meta
          name="twitter:image"
          content="https://thecorrelation.in/og-elevate-data-analytics.png"
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
                  Transform into a Job-Ready Data Analyst in 2.5 Months (Weekend
                  Learning)
                </span>
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl font-black leading-tight">
                  Elevate <br /> Program in
                </h1>

                <div className="text-3xl lg:text-4xl font-bold text-yellow-300 typewriter">
                  Data Analytics
                </div>
              </div>

              {/* Description */}
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                A structured, weekend-friendly program designed for
                professionals and beginners to master data analytics with
                hands-on training in SQL, Python, data visualization, and
                real-world analytics projects — learn by doing, not just
                watching.
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
                <a href="tel:+917415346222" className="block md:hidden ">
                  <div
                    className=" min-h-[56px] px-6 bg-green-600 text-white font-semibold rounded-xl
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
                  href="https://wa.me/917415346222?text=Hey%2C%20I%20came%20across%20the%20Elevate%20Program%20in%20Data%20Analytics%20on%20your%20website%20and%20would%20like%20to%20know%20more%20about%20it."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:block "
                >
                  <div
                    className="w-full min-h-[56px] px-6 bg-green-600 text-white font-semibold rounded-xl
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
                  courseName="elevate-program-in-data-analytics"
                  courseDisplayName="Elevate Program In Data Analytics"
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
            About the Data Analytics Elevate Program
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Elevate Data Analytics is a structured, weekend-friendly program
                built for professionals and beginners who want to gain practical
                data analytics skills without leaving their current job.
                <br />
                The program follows a live, instructor-led format with guided
                learning, weekend classes, and hands-on assignments — not
                self-paced videos.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Industry-Relevant Data Analytics Curriculum",
                    desc: "Learn Excel, SQL, Python, Power BI, and business analytics aligned with real job roles.",
                  },
                  {
                    title: "Expert Trainers & Guided Mentorship",
                    desc: "Learn from experienced analytics professionals with real industry exposure.",
                  },
                  {
                    title: "Hands-On, Real-World Analytics Projects",
                    desc: "Work on practical projects using real datasets to build a job-ready portfolio.",
                  },
                  {
                    title: "Career Support for Data Analyst Roles",
                    desc: "Resume building, interview preparation, and career guidance for analytics roles.",
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
                  2.5 Months
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

      <ElevateDAStructure />

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

      <LeadForm></LeadForm>

      <ElevateDAFee />

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
