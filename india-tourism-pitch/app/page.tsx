'use client';

import { useState } from 'react';

const slides = [
  {
    title: "Incredible India",
    subtitle: "Where Ancient Heritage Meets Modern Innovation",
    content: "India welcomes 10.93 million tourists annually, offering unparalleled diversity in culture, landscapes, and experiences.",
    gradient: "from-orange-500 via-white to-green-500",
    icon: "🇮🇳"
  },
  {
    title: "Market Opportunity",
    subtitle: "A Booming Tourism Sector",
    content: [
      "Tourism contributes 6.8% to India's GDP ($194 billion)",
      "Expected to reach $512 billion by 2028",
      "39 UNESCO World Heritage Sites",
      "Growing at 12.3% annually"
    ],
    gradient: "from-blue-600 to-purple-600",
    icon: "📈"
  },
  {
    title: "Heritage & Culture",
    subtitle: "5,000 Years of Rich History",
    content: [
      "Taj Mahal - Symbol of eternal love",
      "Ancient temples and forts across the nation",
      "Diverse festivals: Diwali, Holi, Eid, Christmas",
      "Traditional arts, dance, and music forms"
    ],
    gradient: "from-amber-600 to-red-600",
    icon: "🕉️"
  },
  {
    title: "Natural Wonders",
    subtitle: "From Himalayas to Tropical Beaches",
    content: [
      "Himalayan mountain ranges in the North",
      "Tropical beaches of Goa and Kerala",
      "Wildlife sanctuaries and tiger reserves",
      "Backwaters, deserts, and hill stations"
    ],
    gradient: "from-green-600 to-teal-600",
    icon: "🏔️"
  },
  {
    title: "Culinary Excellence",
    subtitle: "A Gastronomic Journey",
    content: [
      "Regional cuisines from 28 states",
      "Street food culture recognized globally",
      "Ancient Ayurvedic wellness traditions",
      "Michelin-starred restaurants in major cities"
    ],
    gradient: "from-red-600 to-orange-600",
    icon: "🍛"
  },
  {
    title: "Spiritual Tourism",
    subtitle: "Birthplace of Four Major Religions",
    content: [
      "Varanasi - 3,000 year old spiritual center",
      "Buddhist circuits: Bodh Gaya, Sarnath",
      "Golden Temple in Amritsar",
      "Yoga and meditation retreats"
    ],
    gradient: "from-purple-600 to-pink-600",
    icon: "🧘"
  },
  {
    title: "Modern Infrastructure",
    subtitle: "World-Class Facilities",
    content: [
      "150+ international airports",
      "Extensive railway network (4th largest)",
      "Luxury hotels and heritage stays",
      "E-visa facility for 169 countries"
    ],
    gradient: "from-indigo-600 to-blue-600",
    icon: "✈️"
  },
  {
    title: "Adventure Tourism",
    subtitle: "Thrills for Every Adventurer",
    content: [
      "Trekking in Ladakh and Himachal",
      "Water sports in Goa and Andaman",
      "Desert safaris in Rajasthan",
      "Paragliding, rafting, and skiing"
    ],
    gradient: "from-yellow-600 to-red-600",
    icon: "🏄"
  },
  {
    title: "Investment Highlights",
    subtitle: "Strategic Benefits",
    content: [
      "Government incentives for tourism projects",
      "Low operational costs",
      "Growing middle class (400M+ consumers)",
      "Digital India initiative boosting connectivity"
    ],
    gradient: "from-emerald-600 to-cyan-600",
    icon: "💼"
  },
  {
    title: "Why Invest Now?",
    subtitle: "The Perfect Timing",
    content: [
      "Post-pandemic travel surge",
      "Focus on sustainable tourism",
      "Untapped potential in tier-2/3 cities",
      "Government's 'Dekho Apna Desh' initiative"
    ],
    gradient: "from-rose-600 to-pink-600",
    icon: "⏰"
  },
  {
    title: "Join the Journey",
    subtitle: "Incredible India Awaits",
    content: "Partner with us to unlock the immense potential of India's tourism sector. Together, we'll create unforgettable experiences.",
    gradient: "from-orange-500 via-white to-green-500",
    icon: "🤝"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${slide.gradient} flex items-center justify-center p-8 transition-all duration-500`}>
      <div className="max-w-6xl w-full">
        {/* Main Content */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 min-h-[600px] flex flex-col justify-between">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-7xl mb-6">{slide.icon}</div>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">{slide.title}</h1>
            <h2 className="text-2xl text-gray-600 font-light">{slide.subtitle}</h2>
          </div>

          {/* Content */}
          <div className="flex-grow flex items-center justify-center">
            {Array.isArray(slide.content) ? (
              <ul className="space-y-4 text-left max-w-2xl">
                {slide.content.map((item, index) => (
                  <li key={index} className="flex items-start text-xl text-gray-700">
                    <span className="text-orange-500 mr-3 text-2xl">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-2xl text-gray-700 text-center max-w-3xl leading-relaxed">
                {slide.content}
              </p>
            )}
          </div>

          {/* Navigation */}
          <div className="mt-8">
            <div className="flex justify-center items-center gap-2 mb-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'w-8 bg-orange-500'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={prevSlide}
                className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentSlide === 0}
              >
                ← Previous
              </button>

              <span className="text-gray-600 font-medium">
                {currentSlide + 1} / {slides.length}
              </span>

              <button
                onClick={nextSlide}
                className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentSlide === slides.length - 1}
              >
                Next →
              </button>
            </div>
          </div>
        </div>

        {/* Keyboard Navigation Hint */}
        <div className="text-center mt-6 text-white/80 text-sm">
          Use arrow keys or swipe to navigate
        </div>
      </div>
    </div>
  );
}
