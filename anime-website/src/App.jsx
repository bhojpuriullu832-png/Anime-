import './App.css';

const animeList = [
  {
    title: 'Attack on Titan',
    image: 'https://static.animecorner.me/2023/09/aot-final-key-visual.jpg',
  },
  {
    title: 'Demon Slayer',
    image: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
  },
  {
    title: 'Jujutsu Kaisen',
    image: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
  },
  {
    title: 'My Hero Academia',
    image: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
  },
  {
    title: 'One Piece',
    image: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
  },
  {
    title: 'Spy x Family',
    image: 'https://cdn.myanimelist.net/images/anime/1764/126627.jpg',
  },
];

function App() {
  return (
    <div className="netflix-bg">
      <header className="netflix-header">
        <h1>AnimeFlix</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">A-Z</a>
          <a href="#">New Releases</a>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to AnimeFlix</h2>
          <p>Everything from A to Z Anime. Watch the latest episodes now!</p>
        </div>
      </section>
      <section className="anime-section">
        <h3>Popular Anime</h3>
        <div className="anime-grid">
          {animeList.map((anime) => (
            <div className="anime-card" key={anime.title}>
              <img src={anime.image} alt={anime.title} />
              <div className="anime-title">{anime.title}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
