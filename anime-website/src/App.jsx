import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import AnimeCarousel from "./components/AnimeCarousel";
import "./index.css";

// Demo data
const newReleases = [
  {
    id: 1,
    title: "Attack on Titan",
    image: "https://i.imgur.com/8Q2Qy4F.jpg",
    description: "Humans fight for survival against man-eating giants.",
  },
  {
    id: 2,
    title: "Jujutsu Kaisen",
    image: "https://i.imgur.com/1bX5QH6.jpg",
    description: "A boy swallows a cursed talisman and joins a secret sorcerer school.",
  },
  {
    id: 3,
    title: "Demon Slayer",
    image: "https://i.imgur.com/2nCt3Sbl.jpg",
    description: "A young boy becomes a demon slayer to save his sister.",
  },
  {
    id: 4,
    title: "My Hero Academia",
    image: "https://i.imgur.com/3Q1Z1Zl.jpg",
    description: "A powerless boy dreams of becoming a superhero.",
  },
];

const trending = [
  {
    id: 5,
    title: "One Piece",
    image: "https://i.imgur.com/4ZQZQ0F.jpg",
    description: "Pirates search for the ultimate treasure.",
  },
  {
    id: 6,
    title: "Spy x Family",
    image: "https://i.imgur.com/5Q5Q5Q5.jpg",
    description: "A spy creates a fake family for a mission.",
  },
  {
    id: 7,
    title: "Chainsaw Man",
    image: "https://i.imgur.com/6Q6Q6Q6.jpg",
    description: "A boy with a chainsaw demon fights monsters.",
  },
  {
    id: 8,
    title: "Mob Psycho 100",
    image: "https://i.imgur.com/7Q7Q7Q7.jpg",
    description: "A psychic boy tries to live a normal life.",
  },
];

function App() {
  return (
    <div className="bg-[#141414] min-h-screen text-white">
      <Navbar />
      <HeroBanner anime={newReleases[0]} />
      <div className="px-4 md:px-10 mt-8">
        <AnimeCarousel title="New Releases" animeList={newReleases} />
        <AnimeCarousel title="Trending Now" animeList={trending} />
      </div>
    </div>
  );
}

export default App;
