import React from "react";
import "./index.css";
@import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      {/* 🪩 Neon Heading */}
      <h1 className="text-5xl font-bold text-center mt-10 animate-neon hover:animate-glowPulse transition-all duration-500">
        🎧 DJ Sethi Live 🎵
      </h1>
{/* 🌟 DJ Profile Section */}
<section className="mt-20 text-center">
  <h2 className="text-3xl font-bold animate-neon">About DJ Sethi</h2>

  <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
    🎧 DJ Sethi – Bringing energy to the dance floor since 2015! 
    Known for EDM, Bollywood & Hip-Hop mixes that set the crowd on fire 🔥
  </p>

  <img
    src="/dj-profile.png"
    alt="DJ Sethi Profile"
    className="mx-auto mt-6 w-48 h-48 rounded-full shadow-[0_0_30px_rgba(255,0,255,0.8)] hover:scale-105 transition-transform duration-300"
  />
{/* 🌟 Upcoming Events Section */}
<section className="mt-20 text-center">
  <h2 className="text-3xl font-bold animate-neon">Upcoming Events</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
    {/* 🎉 Event 1 */}
    <div className="bg-gray-900 p-6 rounded-2xl shadow-[0_0_20px_rgba(255,0,255,0.5)] hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-bold text-pink-400">Club Mirage, Delhi</h3>
      <p className="text-gray-300 mt-2">Saturday, 2nd November 2025</p>
      <p className="mt-3 text-gray-400 text-sm">Get ready for a night full of EDM & Bollywood mashups 🔥</p>
    </div>

    {/* 🎉 Event 2 */}
    <div className="bg-gray-900 p-6 rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-bold text-cyan-400">Sky Lounge, Mumbai</h3>
      <p className="text-gray-300 mt-2">Friday, 15th November 2025</p>
      <p className="mt-3 text-gray-400 text-sm">DJ Sethi spinning live beats all night 🎧</p>
    </div>

    {/* 🎉 Event 3 */}
    <div className="bg-gray-900 p-6 rounded-2xl shadow-[0_0_20px_rgba(255,255,0,0.5)] hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-bold text-yellow-400">Bass Arena, Goa</h3>
      <p className="text-gray-300 mt-2">New Year’s Eve 2025</p>
      <p className="mt-3 text-gray-400 text-sm">Countdown to 2026 with DJ Sethi’s exclusive set 🎆</p>
    </div>
  </div>
</section>

{/* 📞 Contact Me Section */}
<section className="mt-20 text-center mb-20">
  <h2 className="text-3xl font-bold animate-neon">Contact Me</h2>
  <p className="mt-4 text-gray-300">For bookings and collaborations, reach out:</p>

  <div className="mt-6">
    <p className="text-lg text-pink-400 font-semibold">📧 djsethiofficial@gmail.com</p>
    <p className="text-lg text-cyan-400 mt-2">📞 +91 98765 43210</p>
  </div>
{/* 🎶 DJ Music Player Section */}
<section className="mt-20 text-center mb-20">
  <h2 className="text-3xl font-bold animate-neon">🎵 Now Playing</h2>
  <p className="mt-2 text-gray-400">Turn up the bass & feel the vibes 🔥</p>

  <div className="mt-8 flex flex-col items-center">
    {/* 🎧 Music Cover Image */}
    <img
      src="/dj-profile.png"
      alt="DJ Track"
      className="w-60 h-60 rounded-2xl shadow-[0_0_30px_rgba(255,0,255,0.6)] animate-pulse"
    />

    {/* 🎵 Audio Player */}
    <audio
      controls
      autoPlay={false}
      className="mt-6 w-80 bg-transparent border-2 border-pink-500 rounded-full"
    >
      <source src="/dj-beat.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>

    <p className="mt-3 text-pink-400 text-lg font-semibold">
      🔊 DJ Sethi - Club Night Remix
    </p>
  </div>
</section>
<audio
  controls
  className="mt-6 w-80 border-2 border-pink-500 rounded-full bg-black"
>
  <source src="/dj-beat.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>

  <div className="flex justify-center gap-6 mt-8">
    <a
      href="https://instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-500 hover:text-pink-400 text-3xl transition-transform transform hover:scale-125"
    >
      <i className="fab fa-instagram"></i>
    </a>
    <a
      href="https://youtube.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-red-500 hover:text-red-400 text-3xl transition-transform transform hover:scale-125"
    >
      <i className="fab fa-youtube"></i>
    </a>
    <a
      href="https://soundcloud.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-orange-400 hover:text-orange-300 text-3xl transition-transform transform hover:scale-125"
    >
      <i className="fab fa-soundcloud"></i>
    </a>
  </div>
</section>

  {/* 🌐 Social Links */}
  <div className="flex justify-center gap-6 mt-6">
    <a
      href="https://instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-500 hover:text-pink-400 text-3xl transition-transform transform hover:scale-125"
    >
      <i className="fab fa-instagram"></i>
    </a>
    <a
      href="https://youtube.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-red-500 hover:text-red-400 text-3xl transition-transform transform hover:scale-125"
    >
      <i className="fab fa-youtube"></i>
    </a>
    <a
      href="https://soundcloud.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-orange-400 hover:text-orange-300 text-3xl transition-transform transform hover:scale-125"
    >
      <i className="fab fa-soundcloud"></i>
    </a>
  </div>
</section>

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
