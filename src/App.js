import React from "react";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      {/* 🪩 Neon Heading */}
      <h1 className="text-5xl font-bold text-center mt-10 animate-neon hover:animate-glowPulse transition-all duration-500">
        🎧 DJ Sethi Live 🎵
      </h1>

      {/* 💥 Tagline */}
      <p className="text-lg mt-4">Bass itna tez ki dil hil jaye 💥</p>

      {/* 🎛️ DJ GIF */}
      <div className="flex justify-center mt-8">
        {/* 🧍‍♂️ Profile Section */}
<div className="mt-10 flex flex-col items-center text-center">
  <img
    src="/profile.jpg" // <-- apni photo ka naam yahan likho (public folder me rakhna)
    alt="DJ Sethi Profile"
    className="w-32 h-32 rounded-full border-4 border-pink-500 shadow-[0_0_25px_rgba(255,0,255,0.7)] mb-4"
  />
  <h2 className="text-2xl font-semibold text-pink-400">DJ Sethi</h2>
  <p className="text-gray-300 mt-2 max-w-md">
    🔥 Music Producer | Club Performer | EDM & Bollywood Remixer  
    Passion for beats that shake the soul and light up the night 💿
  </p>

  {/* 🌐 Social Links */}
  <div className="flex space-x-6 mt-4">
    <a
      href="https://instagram.com/"
      target="_blank"
      rel="noreferrer"
      className="hover:text-pink-500 transition duration-300"
    >
      Instagram
    </a>
    <a
      href="https://youtube.com/"
      target="_blank"
      rel="noreferrer"
      className="hover:text-red-500 transition duration-300"
    >
      YouTube
    </a>
    <a
      href="https://soundcloud.com/"
      target="_blank"
      rel="noreferrer"
      className="hover:text-orange-400 transition duration-300"
    >
      SoundCloud
    </a>
  </div>
</div>

        <img
          src="/dj-club.gif" // ensure ye gif public folder me hai
          alt="DJ playing music in club"
          className="w-80 h-80 object-cover rounded-2xl shadow-[0_0_40px_rgba(255,0,255,0.8)] animate-pulse"
        />
      </div>

      {/* 🎶 Neon Equalizer Animation */}
      <div className="flex justify-center mt-6 space-x-2">
        <div
          className="w-2 h-6 bg-pink-500 animate-bounce rounded-full shadow-[0_0_15px_rgba(255,0,255,0.8)]"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-2 h-10 bg-cyan-400 animate-bounce rounded-full shadow-[0_0_15px_rgba(0,255,255,0.8)]"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-2 h-8 bg-pink-500 animate-bounce rounded-full shadow-[0_0_15px_rgba(255,0,255,0.8)]"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-2 h-12 bg-cyan-400 animate-bounce rounded-full shadow-[0_0_15px_rgba(0,255,255,0.8)]"
          style={{ animationDelay: "0.3s" }}
        ></div>
        <div
          className="w-2 h-6 bg-pink-500 animate-bounce rounded-full shadow-[0_0_15px_rgba(255,0,255,0.8)]"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  );
}

export default App;
<section className="mt-20 text-center">
  <h2 className="text-3xl font-bold">About DJ Sethi</h2>
  <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
    DJ Sethi – Mixing beats since 2015 🎧 Bringing EDM, Bollywood, and Hip-Hop to the floor 🔥
  </p>
  <img src="/dj-profile.png" alt="DJ Sethi" className="mx-auto mt-6 w-48 rounded-full shadow-lg" />
</section>
