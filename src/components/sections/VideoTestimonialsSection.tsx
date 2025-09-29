import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLandingPageController } from '../../hooks/useLandingController';
import { RosabellaMoringaConfig } from '../../lib/config-helpers';

const VideoTestimonialsSection = () => {
  const { config } = useLandingPageController();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screenSize, setScreenSize] = useState('desktop');

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!config?.videoTestimonials) return null;

  const { title, videos, cta, guarantee, backgroundColor } = config.videoTestimonials;
  const videosPerSlide = {
    desktop: 4,
    tablet: 2,
    mobile: 1
  };

  const getCurrentTotalSlides = () => {
    switch (screenSize) {
      case 'mobile': return Math.ceil(videos.length / videosPerSlide.mobile);
      case 'tablet': return Math.ceil(videos.length / videosPerSlide.tablet);
      default: return Math.ceil(videos.length / videosPerSlide.desktop);
    }
  };

  const totalSlides = getCurrentTotalSlides();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Reset slide when screen size changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [screenSize]);

  return (
    <section
      className="py-16 px-4"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>

        {/* Desktop View - 4 videos */}
        <div className="hidden lg:block relative">
          <div className="grid grid-cols-4 gap-6">
            {videos.slice(currentSlide * 4, currentSlide * 4 + 4).map((video, index) => (
              <div key={index} className="aspect-[9/16] rounded-2xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster={video.poster}
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>

          {Math.ceil(videos.length / 4) > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Previous videos"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Next videos"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </>
          )}
        </div>

        {/* Tablet View - 2 videos */}
        <div className="hidden md:block lg:hidden relative">
          <div className="grid grid-cols-2 gap-6">
            {videos.slice(currentSlide * 2, currentSlide * 2 + 2).map((video, index) => (
              <div key={index} className="aspect-[9/16] rounded-2xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster={video.poster}
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>

          {Math.ceil(videos.length / 2) > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Previous videos"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Next videos"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </>
          )}
        </div>

        {/* Mobile View - 1 video */}
        <div className="block md:hidden relative">
          <div className="max-w-sm mx-auto">
            <div className="aspect-[9/16] rounded-2xl overflow-hidden">
              <video
                className="w-full h-full object-cover"
                controls
                poster={videos[currentSlide]?.poster}
                preload="metadata"
              >
                <source src={videos[currentSlide]?.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {videos.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Previous video"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Next video"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </>
          )}
        </div>

        {/* CTA Button and Guarantee */}
        <div className="text-center mt-12">
          <button
            className="px-12 py-4 rounded-full text-lg font-semibold transition-colors hover:opacity-90 mb-4"
            style={{
              backgroundColor: '#2d6a4f',
              color: '#ffffff'
            }}
          >
            {cta.text}
          </button>

          <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
            <span className="w-4 h-4 flex items-center justify-center">✓</span>
            {guarantee}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;