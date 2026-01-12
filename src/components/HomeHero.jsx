"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion, LazyMotion, domAnimation, m } from "framer-motion";
import { memo, useMemo } from "react";
import CompactLeadForm from "./CompactLeadForm";

// Memoized card data for better performance
const featureCards = [
  {
    title: "Real Industry Projects",
    text: "Build real-world AI and Data Science projects using Python, SQL, and ML tools. Get hands-on experience across data cleaning, modeling, and business insights.",
    schema: {
      "@type": "Service",
      name: "Real Industry Projects",
      description:
        "Hands-on Data Science, Machine Learning, and AI projects built with industry guidance, giving learners real experience in solving business challenges through data-driven insights.",
    },
  },
  {
    title: "Job-Ready Curriculum",
    text: "Learn AI, Data Science, and GenAI with a practical, job-focused curriculum. Master Python, Power BI, ML models, NLP, and Deep Learning for a strong portfolio.",
    schema: {
      "@type": "Service",
      name: "Job-Ready Data Science Curriculum",
      description:
        "Comprehensive AI and Data Science training covering Python, ML models, and GenAI tools, designed to help learners meet current industry skill demands.",
    },
  },
  {
    title: "Expert Mentorship",
    text: "Get mentorship from experienced Data Science and AI professionals. Receive 1:1 guidance, project reviews, and personalized career support.",
    schema: {
      "@type": "Service",
      name: "Expert Data Science Mentorship",
      description:
        "Personalized mentorship from AI and Data Science experts who guide learners through projects, interviews, and professional growth to become career-ready.",
    },
  },
  {
  title: "Career & Placement Support",
  text: "Get end-to-end career support with resume building, interview preparation, mock interviews, and placement assistance to help you secure Data Science and AI roles.",
  schema: {
    "@type": "Service",
    name: "Data Science Career & Placement Support",
    description:
      "Structured career guidance and placement support including resume optimization, mock interviews, and hiring partner connections to help learners land Data Science and AI jobs.",
  },
},

];

// Optimized typewriter words for SEO
const typewriterWords = [
  "Data Science",
  "Machine Learning",
  "Artificial Intelligence",
  "Data Analytics",
  "Data Visualization",
];

// Memoized Feature Cards component
const FeatureCards = memo(() => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full min-h-[180px] max-w-4xl px-8">
      {featureCards.map((card, index) => (
        <article
          key={card.title}
          className="bg-black/20 backdrop-blur-lg rounded-xl p-6 border border-white/30 shadow-lg transition-transform hover:scale-[1.02]"
          itemScope
          itemType="https://schema.org/Service"
        >
          <h3 className="text-xl font-semibold text-white mb-2" itemProp="name">
            {card.title}
          </h3>
          <p className="text-white text-md " itemProp="description">
            {card.text}
          </p>
        </article>
      ))}
    </div>
  );
});

FeatureCards.displayName = "FeatureCards";

const HomeHero = () => {
  // Memoize structured data to prevent recreation
  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "TheCorrelation",
      description:
        "Leading Data Science and AI education platform offering industry-relevant courses and certifications",
      url: typeof window !== "undefined" ? window.location.origin : "",
      logo:
        typeof window !== "undefined"
          ? `${window.location.origin}/logo.png`
          : "",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Education Enquiry",
        description: "Enquire about Data Science courses",
      },
      offers: {
        "@type": "AggregateOffer",
        description: "Data Science and AI courses with industry mentorship",
        category: "Education",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Data Science Courses",
        itemListElement: featureCards.map((card) => card.schema),
      },
    }),
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="relative w-full min-h-screen overflow-hidden flex flex-col lg:flex-row"
        aria-label="Hero section promoting Data Science education at TheCorrelation"
        role="banner"
        itemScope
        itemType="https://schema.org/Organization"
      >
        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Background Image with Blur Overlay - Only for Left Side on Desktop */}
        <div className="absolute inset-0 w-full z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/HomeHero.jpg')"}}>
          </div>
          {/* Left blur gradient overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60"></div>
          </div>
        </div>

        {/* Left Side - Content */}
        <div className="relative w-full lg:w-2/3 z-20 flex flex-col justify-center px-6 lg:pl-24 lg:pr-8 py-16 lg:py-24">
          <m.div
            className="max-w-3xl text-white space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-full flex justify-start items-center">
  <h1 className="
    text-3xl md:text-4xl lg:text-5xl 
    font-bold leading-tight text-white 
    flex flex-wrap lg:flex-nowrap gap-2 
    drop-shadow-lg
  ">
    <span className="whitespace-nowrap">
      Become the Future of
    </span>

    <span className="
      text-orange-400 
      whitespace-nowrap 
      lg:min-w-[220px]
      text-left
    ">
      <Typewriter
        words={typewriterWords}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </span>
  </h1>
</div>


            <p
              className="text-base md:text-lg font-light text-white drop-shadow-lg max-w-2xl"
              itemProp="description"
            >
              Welcome to <strong itemProp="legalName">TheCorrelation</strong> — India's leading hub for 
              <strong> Data Science</strong>, <strong>AI</strong>, and <strong>Machine Learning</strong> education.  
              Our hands-on programs, expert mentors, and globally recognized certifications prepare you to 
              lead the future of technology.  
              <br />
              <br />
              <strong>Begin your AI-powered journey with us today!</strong>
            </p>
          </m.div>

          {/* Bottom Cards */}
          <div className="mt-12 lg:mt-16">
            <FeatureCards />
          </div>
        </div>

        {/* Right Side - Form */}
        <div
  className="
    relative 
    w-full lg:w-1/3 
    z-20

    
    flex items-center justify-center

    px-6 py-16 lg:py-10
    mt-28 mb-6 mr-4 lg:mr-8

    rounded-2xl shadow-2xl
  "
>
  <div className="w-full max-w-md">
    <CompactLeadForm
      courseName="general"
      courseDisplayName="Course Details"
    />
  </div>
</div>

      </section>
    </LazyMotion>
  );
};

export default HomeHero;