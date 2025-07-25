import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Plus, ThumbsUp, Star } from 'lucide-react';

const AnimeCard = ({ anime, size = 'normal' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    small: 'w-48 h-72',
    normal: 'w-56 h-80',
    large: 'w-64 h-96'
  };

  const imageSizeClasses = {
    small: 'h-32',
    normal: 'h-40',
    large: 'h-48'
  };

  return (
    <div 
      className={`relative ${sizeClasses[size]} group cursor-pointer transition-transform duration-300 hover:scale-105`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/anime/${anime.id}`} className="block h-full">
        {/* Image Container */}
        <div className={`relative ${imageSizeClasses[size]} overflow-hidden rounded-lg`}>
          <img
            src={anime.image}
            alt={anime.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Hover Overlay */}
          <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <Play size={48} className="text-white" fill="currentColor" />
          </div>

          {/* Rating Badge */}
          <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-bold flex items-center space-x-1">
            <Star size={12} fill="currentColor" className="text-yellow-400" />
            <span>{anime.rating}</span>
          </div>

          {/* New Release Badge */}
          {anime.newRelease && (
            <div className="absolute top-2 left-2 bg-netflix-red text-white px-2 py-1 rounded text-xs font-bold">
              NEW
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-3 bg-netflix-gray rounded-b-lg">
          <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2 leading-tight">
            {anime.title}
          </h3>
          
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-xs">{anime.year}</span>
            <span className="text-gray-400 text-xs">{anime.episodes} eps</span>
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-1 mb-3">
            {anime.genres.slice(0, 2).map((genre, index) => (
              <span 
                key={index}
                className="text-gray-300 text-xs bg-gray-700 px-2 py-1 rounded"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className={`flex items-center justify-between transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="flex space-x-2">
              <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Play size={16} fill="currentColor" />
              </button>
              <button className="border-2 border-gray-400 text-gray-400 p-2 rounded-full hover:border-white hover:text-white transition-colors">
                <Plus size={16} />
              </button>
              <button className="border-2 border-gray-400 text-gray-400 p-2 rounded-full hover:border-white hover:text-white transition-colors">
                <ThumbsUp size={16} />
              </button>
            </div>
            
            <span className="text-gray-400 text-xs">{anime.status}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AnimeCard;