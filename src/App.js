import React, { useRef, useState } from "react";
import "./index.css";

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => console.error("Audio play error:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-purple-950 to-black text-white flex flex-col items-center justify-center p-6">
      {/* Title Section */}
      <h1 className="text-6xl font-extrabold text-pink-500 mb-3 neon">
        🎧 DJ Sethi Live
      </h1>
      <p className="text-lg mb-8 text-gray-200">Bass itna tez ki dil hil jaye 💥</p>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="relative">
          <img
            src="/dj-profile.png"
            alt="DJ Sethi Profile"
            className="w-48 h-48 rounded-full border-4 border-pink-500 shadow-lg neon-img"
          />
        </div>

        <div className="text-center md:text-left max-w-md">
          <h2 className="text-3xl font-semibold text-pink-400 mb-2">DJ Sethi</h2>
          <p className="text-gray-300">
            🔥 Music Producer | Club Performer | EDM & Bollywood Remixer  
            <br /> Passion for beats that shake the soul and light up the night 🌕
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 mt-4">
            <a href="/" className="hover:text-pink-400 transition">Instagram</a>
            <a href="/" className="hover:text-pink-400 transition">YouTube</a>
            <a href="/" className="hover:text-pink-400 transition">SoundCloud</a>
          </div>
        </div>
      </div>

      {/* DJ Club Image */}
      <div className="mt-10">
        <img
          src="/dj-club.gif"
          alt="DJ playing in club"
          className="rounded-2xl shadow-lg w-72 md:w-96 border-2 border-pink-400"
        />
      </div>

      {/* Play Button */}
      <button
        onClick={togglePlay}
        className="mt-8 bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded-full shadow-lg text-lg font-semibold transition-all duration-300"
      >
        {isPlaying ? "⏸ Pause Music" : "▶ Play Music"}
      </button>

      {/* Audio Player */}
      <audio ref={audioRef}>
        <source src="/dj-beat.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}

export default App;
