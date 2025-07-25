import { useState, useEffect } from 'react';
import HeroBanner from '../components/HeroBanner';
import AnimeCarousel from '../components/AnimeCarousel';
import { 
  getFeaturedAnime, 
  getTrendingAnime, 
  getNewReleases, 
  getAnimeByGenre,
  searchAnime 
} from '../data/animeData';

const Home = ({ searchQuery }) => {
  const [featuredAnime, setFeaturedAnime] = useState([]);
  const [trendingAnime, setTrendingAnime] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [actionAnime, setActionAnime] = useState([]);
  const [romanceAnime, setRomanceAnime] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setFeaturedAnime(getFeaturedAnime());
    setTrendingAnime(getTrendingAnime());
    setNewReleases(getNewReleases());
    setActionAnime(getAnimeByGenre('Action'));
    setRomanceAnime(getAnimeByGenre('Romance'));
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setSearchResults(searchAnime(searchQuery));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-netflix-black">
      {/* Show search results if there's a search query */}
      {searchQuery && searchResults.length > 0 ? (
        <div className="pt-20">
          <AnimeCarousel
            title={`Search Results for "${searchQuery}"`}
            animeList={searchResults}
          />
        </div>
      ) : searchQuery && searchResults.length === 0 ? (
        <div className="pt-20 px-4 md:px-12">
          <h2 className="text-white text-xl md:text-2xl font-semibold mb-4">
            No results found for "{searchQuery}"
          </h2>
          <p className="text-gray-400">Try searching for something else.</p>
        </div>
      ) : (
        <>
          {/* Hero Banner */}
          <HeroBanner featuredAnime={featuredAnime} />

          {/* Content Sections */}
          <div className="relative -mt-32 z-10">
            {/* Trending Now */}
            <AnimeCarousel
              title="Trending Now"
              animeList={trendingAnime}
              cardSize="large"
            />

            {/* New Releases */}
            <AnimeCarousel
              title="New & Popular"
              animeList={newReleases}
            />

            {/* Action Anime */}
            <AnimeCarousel
              title="Action & Adventure"
              animeList={actionAnime}
            />

            {/* Romance Anime */}
            <AnimeCarousel
              title="Romance & Drama"
              animeList={romanceAnime}
            />

            {/* Top Rated */}
            <AnimeCarousel
              title="Top Rated Anime"
              animeList={[...trendingAnime].sort((a, b) => b.rating - a.rating)}
            />

            {/* Recently Added */}
            <AnimeCarousel
              title="Recently Added"
              animeList={[...newReleases, ...trendingAnime].slice(0, 8)}
              cardSize="small"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;