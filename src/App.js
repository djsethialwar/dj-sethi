import React from "react";
import "./index.css";

function App() {
  const playAudio = () => {
    const audio = document.getElementById("dj-audio");
    if (audio) {
      audio.play();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white flex flex-col items-center justify-center p-6">
      {/* Title */}
      <h1 className="text-5xl font-bold text-pink-500 mb-4 glow flex items-center gap-2">
        🎧 DJ Sethi Live 🎵
      </h1>
      <p className="text-lg mb-6">Bass itna tez ki dil hil jaye 💥</p>

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={`${process.env.PUBLIC_URL}/dj-profile.png`}
          alt="DJ Sethi Profile"
          className="w-40 h-40 rounded-full border-4 border-pink-500 shadow-lg shadow-pink-700 mb-3"
        />
        <h2 className="text-2xl font-semibold text-pink-400">DJ Sethi</h2>
        <p className="text-center max-w-md mt-2">
          🔥 Music Producer | Club Performer | EDM & Bollywood Remixer <br />
          Passion for beats that shake the soul and light up the night 🌙
        </p>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 mb-6">
        <a
          href="/"
          className="hover:text-pink-400 transition"
        >
          Instagram
        </a>
        <a
          href="/"
          className="hover:text-pink-400 transition"
        >
          YouTube
        </a>
        <a
          href="/"
          className="hover:text-pink-400 transition"
        >
          SoundCloud
        </a>
      </div>

      {/* Music Player */}
      <audio id="dj-audio" src={`${process.env.PUBLIC_URL}/dj-beat.mp3`} type="audio/mpeg"></audio>


      <button
        onClick={playAudio}
        className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition transform hover:scale-105 shadow-lg shadow-pink-700"
      >
        ▶ Play Music
      </button>

      <footer className="mt-10 text-sm opacity-70">
        © 2025 DJ Sethi | All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
