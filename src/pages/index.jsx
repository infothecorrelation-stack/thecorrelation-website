

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // ✅ FIXED (App Router)
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Head from 'next/head';

import {  EffectFade } from 'swiper/modules';

import 'swiper/css/effect-fade';


import Hero from '@/components/Hero';
import CommitmentCard from '@/components/CommitmentCard';
import Tools from '@/components/Tools';
import ProcessSection from '@/components/ProcessSection';
import BetterSection from '@/components/BetterSection';
import LogicBoxSection from '@/components/LogicBoxSection';
import FacultySection from '@/components/FacultySection';
import SuccessStoriesSection from '@/components/SuccessStoriesSection';
import PartnerBrands from '@/components/PartnerBrands';
import ReachOutForm from '@/components/ReachOutForm';
import AboutUsSection from '@/components/AboutUsSection';
import courseContent from '@/data/courseContent';
import CourseSlidder from '@/components/CourseSlidder';
import StepsSection from '@/components/StepsSection';
import WhoShouldJoin from '@/components/WhoShouldJoin';
import WhichCourseIsBetter from '@/components/WhichCourseIsBetter';
import HomeHero from '@/components/HomeHero';
import YourJourneySection from '@/components/YourJourneySection';
import DataScienceSection from '@/components/DataScienceSection';
import LeadForm from '@/components/LeadForm'; // Update this path based on your structure
import CertificateSection from '@/components/CertificateSection';
import {
  BookOpen,User,Clipboard,Code2,Database,ChevronRight,BarChart3,LineChart,BrainCircuit,HelpCircle,Rocket,ShoppingCart,Brain,Sparkles,Bot,Monitor,CreditCard,MapPin,Building,Search,ArrowRight,Check,
} from 'lucide-react';






  

const Home = () => {

  return (
    <div >
      <Head>
  {/* Primary SEO */}
  <title>
    Data Science & AI Courses in Indore | TheCorrelation School of AI & Data Science
  </title>

  <meta
    name="description"
    content="Looking for Data Science & AI courses in Indore? TheCorrelation School of AI & Data Science offers industry-ready programs in Data Science, AI, Machine Learning & Generative AI with real projects and placement support."
  />

  <link rel="canonical" href="https://thecorrelation.in/" />

  {/* Search Engine Indexing */}
  <meta name="robots" content="index, follow" />
  <meta
    name="googlebot"
    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />

  {/* Local SEO – Indore */}
  <meta name="geo.region" content="IN-MP" />
  <meta name="geo.placename" content="Indore" />
  <meta name="geo.position" content="22.7196;75.8577" />
  <meta name="ICBM" content="22.7196, 75.8577" />

  {/* Brand / Trust */}
  <meta name="author" content="TheCorrelation School of AI & Data Science" />
  <meta name="publisher" content="TheCorrelation School of AI & Data Science" />
  <meta name="application-name" content="TheCorrelation" />

  {/* Keywords (Secondary Signal Only) */}
  <meta
    name="keywords"
    content="data science courses in indore, ai courses in indore, data science institute in indore, machine learning course indore, generative ai course indore, thecorrelation"
  />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="TheCorrelation School of AI & Data Science" />
  <meta
    property="og:title"
    content="Data Science & AI Courses in Indore | TheCorrelation School of AI & Data Science"
  />
  <meta
    property="og:description"
    content="Top Data Science & AI institute in Indore offering hands-on training, real-world projects, expert mentors and placement support."
  />
  <meta property="og:url" content="https://thecorrelation.in/" />
  <meta property="og:image" content="https://thecorrelation.in/og-image.png" />
  <meta property="og:locale" content="en_IN" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Data Science & AI Courses in Indore | TheCorrelation School of AI & Data Science"
  />
  <meta
    name="twitter:description"
    content="Join the best Data Science & AI courses in Indore with industry projects and placement support."
  />
  <meta name="twitter:image" content="https://thecorrelation.in/og-image.png" />

  {/* Mobile / UX */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />

  {/* Favicons */}
  <link rel="icon" href="/Top-logo1.png" />
  <link rel="apple-touch-icon" href="/Top-logo1.png" />
</Head>




      {/* Hero Section */}

      <HomeHero></HomeHero>

      {/* Success Stories Section */}
      <SuccessStoriesSection />

      <CourseSlidder></CourseSlidder>

      <WhichCourseIsBetter></WhichCourseIsBetter>

     <DataScienceSection/>
      


      <AboutUsSection></AboutUsSection>


      


      

      <LeadForm></LeadForm>

       <YourJourneySection/>
      

      {/* Faculty Section */}
      


      <WhoShouldJoin></WhoShouldJoin>


      
      <CertificateSection/>

      
    </div>
  );
};

export default Home;
