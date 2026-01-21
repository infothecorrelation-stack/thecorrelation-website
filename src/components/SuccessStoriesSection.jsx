'use client';
import React from 'react';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';

// ✅ Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// ✅ Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const SuccessStoriesSection = () => {
  const stories = [
    {
      name: 'Akash Goyal',
      qualification: 'Gap of 2 years',
      position: 'AI/ML Engineer',
      company: 'TCS',
      salary: '6.5 LPA',
      image: '/Dummy.png',
      testimonial:
        'It was wonderful to be a part of the journey of being a Data Scientist. Everyone was so kind & helpful. The institute has a positive environment. I am truly blessed to be here. I got to learn a lot.',
    },
    {
      name: 'Sakshi Gupta',
      qualification: 'Fresher (B.Com, MBA)',
      position: 'Data Scientist',
      company: 'HighNest',
      salary: '5 LPA',
      image: '/Dummy.png',
      testimonial:
        "In my experience, TheCorrelation's data science program provides thorough training that sets you up for a successful career. The supportive instructors and practical workshops make complex topics easy to grasp.",
    },
    {
      name: 'Palak Gangwani',
      qualification: 'Academics (School Teacher)',
      position: 'Data Scientist',
      company: 'SketchMyHome.AI',
      salary: '5 LPA',
      image: '/Dummy.png',
      testimonial:
        'TheCorrelation is the perfect place to kickstart your academic and professional journey. With hands-on workshops and expert guidance, you’ll gain the skills and confidence needed.',
    },
    {
      name: 'Rohit Nagtode',
      qualification: 'Fresher (Frontend)',
      position: 'ML Engineer',
      company: 'HighNest',
      salary: '5 LPA',
      image: '/Dummy.png',
      testimonial:
        'Joining TheCorrelation has transformed how I view the world. I learned to use data for a comprehensive, 360-degree analysis.',
    },
    {
      name: 'Shivam Acharya',
      qualification: 'Mechanical Engineering',
      position: 'Data Scientist',
      company: 'Cognizant',
      salary: '19 LPA',
      image: '/Dummy.png',
      testimonial:
        'Coming from a Mechanical Engineering background with no coding experience, TheCorrelation’s PGP program made it possible to transition into Data Science.',
    },
  ];

  return (
   <section className="py-16 bg-[linear-gradient(135deg,#7b25d1,#ff2626,#910000)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Success Stories
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          centeredSlides
          spaceBetween={32}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              centeredSlides: true,
            },
          }}
        >
          {stories.map((story, index) => (
            <SwiperSlide
              key={index}
              className="
                flex justify-center
                transition-all duration-500
                [&.swiper-slide-active]:scale-105
                [&.swiper-slide-active]:z-20
              "
            >
              {/* Card */}
              <div
                className="
                  relative w-full max-w-xl
                  bg-black/20 backdrop-blur-lg
                  rounded-xl p-6
                  h-[300px] flex flex-col
                  transition-all duration-500
                  hover:shadow-xl
                  swiper-slide-active:bg-black/30
                  swiper-slide-active:ring-2
                  swiper-slide-active:ring-white/30
                "
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-lg font-bold text-white">
                    {story.name}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-white mt-1">
                    <span>{story.qualification}</span>
                    <MoveRight className="w-4 h-4 text-white" />
                    <span>{story.position}</span>
                  </div>

                  <div className="mt-1 text-sm text-white font-medium">
                    @ {story.company}
                  </div>

                  {/* Stretchable content */}
                  <p className="text-sm text-white mt-3 leading-relaxed text-justify flex-grow">
                    {story.testimonial}
                  </p>

                  {/* Bottom aligned salary */}
                  <div className="text-right text-lg font-extrabold text-white mt-4">
                    {story.salary}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

  );
};

export default SuccessStoriesSection;
