"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/router";

const certificates = [
  { image: "/PGP-E-Certificate.png", name: "Post Graduate Program" },
  { image: "/Foundation-ML-E-Certificate.png", name: "Foundation in Machine Learning" },
  { image: "/Adv-ML-E-Certificate.png", name: "Advanced Machine Learning" },
  { image: "/Data-Analytics-E-Certificate.png", name: "Data Analytics" },
  { image: "/DL-and-GenAI-E-Certificate.png", name: "Deep Learning & GenAI" },
  { image: "/Business-Analytics-Analytics-E-Certificate.png", name: "Business Analytics" },
];

const CertificateSection = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [screenWidth, setScreenWidth] = useState(null);

  /* ✅ SSR-safe window width detection */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateWidth = () => setScreenWidth(window.innerWidth);
    updateWidth();

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  /* Auto play */
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    pauseAutoPlay();
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
    pauseAutoPlay();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
    pauseAutoPlay();
  };

  const getVisibleCertificates = () => {
    return Array.from({ length: 5 }, (_, i) => {
      const offset = i - 2;
      const index = (currentIndex + offset + certificates.length) % certificates.length;
      return { ...certificates[index], offset, index };
    });
  };

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Your Certificates
        </h2>

        <div className="relative mb-16">
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg"
          >
            <ChevronRight />
          </button>

          <div className="relative h-[350px] flex items-center justify-center overflow-hidden">
            {screenWidth &&
              getVisibleCertificates().map((cert) => {
                const isCenter = cert.offset === 0;
                const isNearby = Math.abs(cert.offset) === 1;

                let scale = 0.7,
                  opacity = 0.3,
                  translateX = cert.offset * 260,
                  translateY = 0;

                if (screenWidth < 640) {
                  scale = isCenter ? 1 : 0.6;
                  opacity = isCenter ? 1 : 0.2;
                  translateX = cert.offset * 200;
                } else if (screenWidth < 1024) {
                  scale = isCenter ? 1 : isNearby ? 0.8 : 0.6;
                  opacity = isCenter ? 1 : isNearby ? 0.6 : 0.3;
                } else {
                  scale = isCenter ? 1.1 : isNearby ? 0.9 : 0.7;
                  opacity = isCenter ? 1 : isNearby ? 0.7 : 0.3;
                  translateY = isCenter ? -20 : 0;
                }

                return (
                  <div
                    key={cert.index}
                    onClick={() => !isCenter && goToSlide(cert.index)}
                    className="absolute transition-all duration-500 cursor-pointer"
                    style={{
                      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                      opacity,
                      zIndex: 10 - Math.abs(cert.offset),
                    }}
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="rounded-xl shadow-xl max-w-[280px]"
                    />
                  </div>
                );
              })}
          </div>

          <h3 className="text-center text-2xl font-bold mt-6">
            {certificates[currentIndex].name}
          </h3>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Certificate Benefits</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Industry-recognized certification",
              "LinkedIn shareable",
              "Resume booster",
              "Career advancement",
            ].map((text, i) => (
              <div key={i} className="flex items-start">
                <CheckCircle className="text-red-600 mr-3" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
