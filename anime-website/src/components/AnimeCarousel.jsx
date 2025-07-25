import React from "react";

function AnimeCarousel({ title, animeList }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-700">
        {animeList.map((anime) => (
          <div
            key={anime.id}
            className="min-w-[180px] max-w-[180px] bg-[#222] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer"
          >
            <img src={anime.image} alt={anime.title} className="w-full h-56 object-cover" />
            <div className="p-2">
              <h3 className="font-semibold text-base truncate">{anime.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimeCarousel;