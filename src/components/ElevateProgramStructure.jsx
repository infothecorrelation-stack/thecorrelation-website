import React, { useState, useEffect } from 'react';
import {
  Leaf,
  TrendingUp,
  Rocket,
  Target,
  BookOpen,
  CheckCircle
} from "lucide-react";

export default function DataScienceCurriculum() {
  const defaultConfig = {
    main_title: "Certified Data Scientist Program",
    subtitle: "Master the complete data science journey from fundamentals to expert-level skills",
    certification_title: "Become a Certified Data Scientist 🎓"
  };

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
      "Industry Use Cases",
      "Roles & Skills Overview",
      "Tools & Tech Stack"
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
      "Data Structures Basics",
      "Python Best Practices"
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
      "Pandas DataFrames",
      "Data Filtering",
      "Aggregation & Grouping",
      "Exploratory Analysis"
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
      "Business Metrics",
      "Data Cleaning",
      "Case Studies",
      "KPI Analysis",
      "Insights & Reporting"
    ]
  },
  {
    id: 5,
    title: "Introduction to Machine Learning",
    level: "intermediate",
    color: "#dc2626",
    image: "/Introduction-to-machine-learning-5.png",
    objective: "Learn core machine learning concepts and workflows",
    topics: [
      "ML Overview",
      "Supervised vs Unsupervised",
      "Training Pipelines",
      "Bias–Variance Tradeoff",
      "Model Evaluation"
    ]
  },
  {
    id: 6,
    title: "Practical ML Models",
    level: "intermediate",
    color: "#dc2626",
    image: "/Practical-ml-models-6.png",
    objective: "Build and evaluate real-world ML models",
    topics: [
      "Linear & Logistic Regression",
      "Decision Trees",
      "KNN",
      "Naive Bayes",
      "Model Comparison"
    ]
  },
  {
    id: 7,
    title: "Advanced ML – I",
    level: "intermediate",
    color: "#dc2626",
    image: "/Advanced-ml-7.png",
    objective: "Improve model performance using advanced techniques",
    topics: [
      "Ensemble Learning",
      "Bagging & Boosting",
      "Random Forests",
      "Gradient Boosting",
      "Hyperparameter Tuning"
    ]
  },
  {
    id: 8,
    title: "Advanced ML – II",
    level: "intermediate",
    color: "#dc2626",
    image: "/Advanced-ml-8.png",
    objective: "Master industry-grade machine learning algorithms",
    topics: [
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "Feature Importance",
      "Model Optimization"
    ]
  },
  {
    id: 9,
    title: "Advanced Statistics",
    level: "advanced",
    color: "#dc2626",
    image: "/Advanced-statistics-9.png",
    objective: "Strengthen statistical foundations for ML & AI",
    topics: [
      "Probability Distributions",
      "Hypothesis Testing",
      "Confidence Intervals",
      "ANOVA",
      "Statistical Inference"
    ]
  },
  {
    id: 10,
    title: "Neural Networks",
    level: "advanced",
    color: "#dc2626",
    image: "/Neural-network-10.png",
    objective: "Understand neural network fundamentals",
    topics: [
      "Perceptrons",
      "Backpropagation",
      "Activation Functions",
      "Loss Functions",
      "Optimization Algorithms"
    ]
  },
  {
    id: 11,
    title: "Computer Vision",
    level: "advanced",
    color: "#dc2626",
    image: "/Computer-vision-11.png",
    objective: "Build vision-based AI systems",
    topics: [
      "Image Processing",
      "CNN Architectures",
      "Object Detection",
      "Image Classification",
      "Transfer Learning"
    ]
  },
  {
    id: 12,
    title: "Natural Language Processing",
    level: "advanced",
    color: "#dc2626",
    image: "/Natural-language-processing-12.png",
    objective: "Process and analyze textual data using NLP",
    topics: [
      "Text Preprocessing",
      "Word Embeddings",
      "Sentiment Analysis",
      "NER",
      "Transformers Basics"
    ]
  },
  {
    id: 13,
    title: "Generative AI",
    level: "capstone",
    color: "#dc2626",
    image: "/Gen-ai-13.png",
    objective: "Build applications using Generative AI & LLMs",
    topics: [
      "LLM Fundamentals",
      "Prompt Engineering",
      "RAG Pipelines",
      "OpenAI APIs",
      "GenAI Use Cases"
    ]
  },
  {
    id: 14,
    title: "Web Scraping",
    level: "capstone",
    color: "#dc2626",
    image: "/Web-scraping-14.png",
    objective: "Extract data from websites programmatically",
    topics: [
      "BeautifulSoup",
      "Requests",
      "Scrapy",
      "APIs",
      "Data Storage"
    ]
  },
  {
    id: 15,
    title: "Model Deployment",
    level: "capstone",
    color: "#dc2626",
    image: "/Model-deployment-15.png",
    objective: "Deploy ML models to production",
    topics: [
      "Flask & FastAPI",
      "Docker",
      "Cloud Deployment",
      "Model Monitoring",
      "CI/CD Basics"
    ]
  },
  {
    id: 16,
    title: "Capstone Project",
    level: "capstone",
    color: "#dc2626",
    image: "/Capstone-project-16.png",
    objective: "Solve a real-world business problem end-to-end",
    topics: [
      "Problem Framing",
      "Data Collection",
      "Model Building",
      "Deployment",
      "Final Presentation"
    ]
  }
];

  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-900 overflow-auto">

      <header className="text-center py-8 px-4 md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
          {defaultConfig.main_title}
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          {defaultConfig.subtitle}
        </p>
      </header>

      <div className="px-4 md:px-8 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {modules.map((module) => {
            return (
              <div
                key={module.id}
                className="group cursor-pointer transition-transform hover:-translate-y-2"
              >
                <div
                  className="bg-white rounded-xl overflow-hidden border border-red-500 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                  
                >
                  {/* Square Image Section */}
                  <div className="relative aspect-square w-full h-[420px] overflow-hidden bg-gray-50">
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

                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">
                      {module.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4">
                      {module.objective}
                    </p>

                    <ul className="space-y-1.5 mt-auto">
                      {module.topics.map((topic, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-xs text-gray-600"
                        >
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
          })}
        </div>
      </div>

      <div className="text-center py-12 px-4 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          Complete All 16 Modules
        </h2>
        <p className="text-xl md:text-2xl text-red-600 font-semibold">
          {defaultConfig.certification_title}
        </p>
      </div>

    </div>
  );
}