import React from "react";

function HeroBanner({ anime }) {
  return (
    <section
      className="relative h-[60vw] min-h-[400px] flex items-end"
      style={{ backgroundImage: `url(${anime.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
      <div className="relative z-10 p-8 md:p-16 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">{anime.title}</h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200 drop-shadow-lg line-clamp-3">{anime.description}</p>
        <div className="flex gap-4">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded shadow-lg transition">Watch Now</button>
          <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-6 rounded shadow-lg transition">Add to List</button>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;