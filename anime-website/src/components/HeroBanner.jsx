import { useState, useEffect } from 'react';
import { Play, Info, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroBanner = ({ featuredAnime }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (featuredAnime && featuredAnime.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === featuredAnime.length - 1 ? 0 : prevIndex + 1
        );
      }, 10000); // Change every 10 seconds

      return () => clearInterval(interval);
    }
  }, [featuredAnime]);

  if (!featuredAnime || featuredAnime.length === 0) {
    return null;
  }

  const currentAnime = featuredAnime[currentIndex];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentAnime.banner}
          alt={currentAnime.title}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              {currentAnime.title}
            </h1>

            {/* Rating and Year */}
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-red-600 text-white px-2 py-1 text-sm font-bold rounded">
                {currentAnime.rating}/10
              </span>
              <span className="text-gray-300 text-lg">{currentAnime.year}</span>
              <span className="text-gray-300 text-lg">{currentAnime.episodes} Episodes</span>
              <span className="border border-gray-400 text-gray-300 px-2 py-1 text-sm">
                {currentAnime.status}
              </span>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-6">
              {currentAnime.genres.map((genre, index) => (
                <span 
                  key={index}
                  className="text-gray-300 text-sm bg-gray-800/60 px-3 py-1 rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
              {currentAnime.description}
            </p>

            {/* Buttons */}
            <div className="flex items-center space-x-4">
              <Link 
                to={`/anime/${currentAnime.id}`}
                className="bg-white text-black px-8 py-3 rounded font-bold text-lg flex items-center space-x-2 hover:bg-gray-200 transition-colors"
              >
                <Play size={24} fill="currentColor" />
                <span>Play</span>
              </Link>
              
              <Link 
                to={`/anime/${currentAnime.id}`}
                className="bg-gray-600/80 text-white px-8 py-3 rounded font-bold text-lg flex items-center space-x-2 hover:bg-gray-600 transition-colors"
              >
                <Info size={24} />
                <span>More Info</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Audio Control */}
        <div className="absolute bottom-32 right-8">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="bg-gray-800/60 text-white p-3 rounded-full border border-gray-600 hover:bg-gray-700 transition-colors"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </div>

        {/* Indicators */}
        {featuredAnime.length > 1 && (
          <div className="absolute bottom-8 right-8 flex space-x-2">
            {featuredAnime.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;