import React from "react";
import { Music, Headphones } from "lucide-react";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white font-sans relative overflow-hidden">
      {/* Background pulse animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-700 to-purple-800 opacity-20 animate-pulse"></div>

      {/* Header Section */}
      <div className="relative z-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Headphones size={40} className="text-pink-500 animate-bounce" />
          <h1 className="text-5xl font-extrabold text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]">
            DJ Sethi Live
          </h1>
        </div>
        <p className="text-lg text-gray-300">
          Bass itna tez ki dil hil jaye 💥
        </p>
      </div>

      {/* Song Download Section */}
      <div className="mt-10 bg-[#0f0f1a] p-8 rounded-2xl shadow-lg w-80 md:w-[400px] text-center border border-pink-700/40 relative z-10">
        <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center justify-center gap-2">
          Download Songs <Music size={22} />
        </h2>

        <div className="space-y-4">
          {/* Song 1 */}
          <div className="flex justify-between items-center bg-gray-900/70 px-4 py-3 rounded-xl hover:shadow-[0_0_15px_#ec4899] transition-all">
            <span>DJ Beat</span>
            <a
              href="/songs/dj-beat.mp3"
              download
              className="bg-pink-600 hover:bg-pink-700 text-white py-1 px-3 rounded-full flex items-center gap-1 transition-all hover:scale-105"
            >
              ⬇️ Download
            </a>
          </div>

          {/* Song 2 */}
          <div className="flex justify-between items-center bg-gray-900/70 px-4 py-3 rounded-xl hover:shadow-[0_0_15px_#ec4899] transition-all">
            <span>Remix Track</span>
            <a
              href="/songs/remix-track.mp3"
              download
              className="bg-pink-600 hover:bg-pink-700 text-white py-1 px-3 rounded-full flex items-center gap-1 transition-all hover:scale-105"
            >
              ⬇️ Download
            </a>
          </div>

          {/* Song 3 */}
          <div className="flex justify-between items-center bg-gray-900/70 px-4 py-3 rounded-xl hover:shadow-[0_0_15px_#ec4899] transition-all">
            <span>Club Vibes</span>
            <a
              href="/songs/club-vibes.mp3"
              download
              className="bg-pink-600 hover:bg-pink-700 text-white py-1 px-3 rounded-full flex items-center gap-1 transition-all hover:scale-105"
            >
              ⬇️ Download
              
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-10 text-gray-400 text-sm">
        © 2025 <span className="text-pink-400">DJ Sethi</span> | All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
