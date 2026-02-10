import React from "react";
import { BookOpen } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function DataScienceCurriculum() {

  const phases = [
    {
      phase: "Data Analytics Professional",
      modules: [1, 2, 3, 4],
    }
  ];

  const modules = [
  {
    id: 1,
    title: "Kickstart with Data Science",
    level: "beginner",
    color: "#dc2626",
    image: "/Kickstart-with-data-science-1.png",
    objective: "Understand the data science ecosystem and career roadmap",
    topics: [
      "What is Data Science?",
      "Data Science Lifecycle",
      "Math & Statistics Basics",
      "Statistical Analysis with MS Excel",
      "Statistics for Data Science"
    ]
  },
  {
    id: 2,
    title: "Python Foundations",
    level: "beginner",
    color: "#dc2626",
    image: "/Python-foundations-2.png",
    objective: "Build strong programming fundamentals using Python",
    topics: [
      "Variables & Data Types",
      "Conditional Statements",
      "Loops & Functions",
      "Exceptional Handling",
      "Practice Problems & Python Best Practices"
    ]
  },
  {
    id: 3,
    title: "Data Analytics with Python",
    level: "beginner",
    color: "#dc2626",
    image: "/Data-analytics-with-python-3.png",
    objective: "Analyze datasets using Python libraries",
    topics: [
      "NumPy Fundamentals",
      "Pandas Data Frames",
      "Data Filtering, Aggregation & Grouping",
      "Data Visualization with Matplotlib & Seaborn",
      "Advanced Visualization with Plotly"
    ]
  },
  {
    id: 4,
    title: "Applied Data Analytics",
    level: "beginner",
    color: "#dc2626",
    image: "/Applied-data-analytics-4.png",
    objective: "Apply analytics techniques to real-world datasets",
    topics: [
      "Exploratory Data Analysis",
      "Data Cleaning",
      "SQL",
      "Power BI",
      "DAX Queries"
    ]
  },
  
];

  const getModulesByIds = (ids) =>
    modules.filter((m) => ids.includes(m.id));

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Certified Data Analytics Professional
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A Module-wise, industry-aligned learning journey from fundamentals to deployment
          </p>
        </div>

        {/* PHASES */}
        <div className="space-y-20">

          {phases.map((phase, idx) => {
            const phaseModules = getModulesByIds(phase.modules);

            return (
              <div key={idx}>

                {/* Phase Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  {phase.phase}
                </h2>

                {/* MOBILE – Swiper */}
                <div className="block md:hidden">
  <Swiper
    modules={[Autoplay]}
    spaceBetween={16}
    slidesPerView={1.1}
    loop={true}
    autoplay={{
      delay: 2500, // ⏱️ change speed if needed
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    }}
  >
    {phaseModules.map((module) => (
      <SwiperSlide key={module.id}>
        <ModuleCard module={module} />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

                {/* DESKTOP – Grid */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                  {phaseModules.map((module) => (
                    <ModuleCard key={module.id} module={module} />
                  ))}
                </div>

              </div>
            );
          })}

        </div>

        {/* Footer CTA */}
        <div className="text-center mt-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Complete All 4 Modules
          </h3>
          <p className="text-xl text-red-600 font-semibold">
            Become a Data Analytics Professional 🎓
          </p>
        </div>

      </div>
    </section>
  );
}

/* ---------------- CARD COMPONENT ---------------- */

const ModuleCard = ({ module }) => {
  return (
    <div className="group transition-transform hover:-translate-y-2">
      <div className="bg-white rounded-xl overflow-hidden border border-red-500 hover:shadow-xl transition-all duration-300 flex flex-col h-full">

        {/* Image */}
        <div className="relative aspect-square h-[380px] bg-gray-50 overflow-hidden">
          <img
            src={module.image}
            alt={module.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div
            className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
            style={{ background: module.color }}
          >
            {module.id}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-bold text-lg mb-2 text-gray-900">
            {module.title}
          </h3>

          <p className="text-sm text-gray-600 mb-4">
            {module.objective}
          </p>

          <ul className="space-y-1.5 mt-auto">
            {module.topics.map((topic, i) => (
              <li key={i} className="flex gap-2 text-xs text-gray-600">
                <BookOpen
                  className="w-3.5 h-3.5 shrink-0"
                  style={{ color: module.color }}
                />
                <span className="line-clamp-1">{topic}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};
