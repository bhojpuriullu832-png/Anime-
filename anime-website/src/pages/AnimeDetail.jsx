import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Plus, ThumbsUp, Share, Star, Clock, Calendar } from 'lucide-react';
import { getAnimeById, getTrendingAnime } from '../data/animeData';
import AnimeCarousel from '../components/AnimeCarousel';

const AnimeDetail = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [activeTab, setActiveTab] = useState('episodes');
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [similarAnime, setSimilarAnime] = useState([]);

  useEffect(() => {
    const animeData = getAnimeById(id);
    setAnime(animeData);
    
    // Get similar anime (for demo, just get trending anime)
    setSimilarAnime(getTrendingAnime().filter(a => a.id !== parseInt(id)).slice(0, 6));
  }, [id]);

  if (!anime) {
    return (
      <div className="min-h-screen bg-netflix-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Generate episode list for demo
  const generateEpisodes = (seasonNum, episodeCount) => {
    return Array.from({ length: episodeCount }, (_, i) => ({
      number: i + 1,
      title: `Episode ${i + 1}`,
      description: `Episode ${i + 1} of ${anime.title} Season ${seasonNum}`,
      duration: Math.floor(Math.random() * 10) + 20, // 20-30 minutes
      thumbnail: anime.image
    }));
  };

  const currentSeasonData = anime.seasons ? anime.seasons.find(s => s.season === selectedSeason) : null;
  const episodes = currentSeasonData ? generateEpisodes(selectedSeason, currentSeasonData.episodes) : generateEpisodes(1, anime.episodes);

  return (
    <div className="min-h-screen bg-netflix-black">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={anime.banner}
            alt={anime.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl pt-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {anime.title}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
                {anime.description}
              </p>

              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Star size={20} fill="currentColor" className="text-yellow-400" />
                  <span className="text-white font-semibold">{anime.rating}/10</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={20} className="text-gray-400" />
                  <span className="text-gray-300">{anime.year}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={20} className="text-gray-400" />
                  <span className="text-gray-300">{anime.episodes} Episodes</span>
                </div>
                <span className="bg-netflix-red text-white px-3 py-1 rounded text-sm font-semibold">
                  {anime.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {anime.genres.map((genre, index) => (
                  <span 
                    key={index}
                    className="bg-gray-800/60 text-gray-300 px-3 py-2 rounded-full text-sm"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <button className="bg-white text-black px-8 py-3 rounded font-bold text-lg flex items-center space-x-2 hover:bg-gray-200 transition-colors">
                  <Play size={24} fill="currentColor" />
                  <span>Play</span>
                </button>
                
                <button className="bg-gray-600/80 text-white px-8 py-3 rounded font-bold text-lg flex items-center space-x-2 hover:bg-gray-600 transition-colors">
                  <Plus size={24} />
                  <span>My List</span>
                </button>

                <button className="border-2 border-gray-600 text-gray-300 p-3 rounded-full hover:border-white hover:text-white transition-colors">
                  <ThumbsUp size={24} />
                </button>

                <button className="border-2 border-gray-600 text-gray-300 p-3 rounded-full hover:border-white hover:text-white transition-colors">
                  <Share size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative -mt-32 z-10 bg-netflix-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex space-x-8 border-b border-gray-800 mb-8">
            <button
              onClick={() => setActiveTab('episodes')}
              className={`py-4 px-2 font-semibold transition-colors ${
                activeTab === 'episodes' 
                  ? 'text-white border-b-2 border-netflix-red' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Episodes
            </button>
            <button
              onClick={() => setActiveTab('details')}
              className={`py-4 px-2 font-semibold transition-colors ${
                activeTab === 'details' 
                  ? 'text-white border-b-2 border-netflix-red' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Details
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'episodes' && (
            <div>
              {/* Season Selector */}
              {anime.seasons && anime.seasons.length > 1 && (
                <div className="mb-6">
                  <h3 className="text-white text-lg font-semibold mb-3">Select Season</h3>
                  <div className="flex space-x-2">
                    {anime.seasons.map((season) => (
                      <button
                        key={season.season}
                        onClick={() => setSelectedSeason(season.season)}
                        className={`px-4 py-2 rounded font-medium transition-colors ${
                          selectedSeason === season.season
                            ? 'bg-netflix-red text-white'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        Season {season.season}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Episodes List */}
              <div className="grid gap-4">
                {episodes.map((episode) => (
                  <div 
                    key={episode.number}
                    className="flex bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    <div className="w-32 h-20 flex-shrink-0">
                      <img
                        src={episode.thumbnail}
                        alt={episode.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4 flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-semibold">{episode.title}</h4>
                        <p className="text-gray-400 text-sm">{episode.description}</p>
                      </div>
                      <div className="text-gray-400 text-sm flex items-center space-x-4">
                        <span>{episode.duration}m</span>
                        <Play size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'details' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white text-xl font-semibold mb-4">About {anime.title}</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <span className="text-gray-400">Original Title:</span>
                    <span className="ml-2">{anime.originalTitle}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Studio:</span>
                    <span className="ml-2">{anime.studio}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Year:</span>
                    <span className="ml-2">{anime.year}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Status:</span>
                    <span className="ml-2">{anime.status}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Rating:</span>
                    <span className="ml-2">{anime.rating}/10</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Episodes:</span>
                    <span className="ml-2">{anime.episodes}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-white text-xl font-semibold mb-4">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {anime.genres.map((genre, index) => (
                    <span 
                      key={index}
                      className="bg-gray-800 text-gray-300 px-3 py-2 rounded-full text-sm"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Similar Anime */}
        <div className="mt-16">
          <AnimeCarousel
            title="More Like This"
            animeList={similarAnime}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;