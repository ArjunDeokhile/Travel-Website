import React from 'react';
import bgVideo from './video/bg-video.mp4';
import { Bell, ChevronDown, Search, Menu } from 'lucide-react';
import App1 from './App1';
import { useNavigate } from 'react-router-dom';
import stories from './stories';
import AssistiveButton from './AssistiveButton';


function App() {
  
  return (
    <div className="relative w-screen h-screen overflow-auto font-Be Vietnam Pro text-white bg-black">
      {/* Background Video */}
       
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/10 z-0" />

      {/* Top Utility Bar */}
      <div className="w-full fixed top-0 left-0 z-50 bg-black/90 text-gray-300 text-xs px-6 py-2 flex justify-between items-center">
        <div>Language: EN | INR</div>
        <div>24/7 Support · Travel Assurance</div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full fixed top-8 left-0 z-50 backdrop-blur-md bg-black/50 text-white h-16 shadow-md">
        <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center relative">
          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-tight">
            Trav<span className="text-cyan-400">Go</span>
          </div>

          {/* Centered Menu */}
          <ul className="absolute left-1/2 transform -translate-x-1/2 flex gap-6 text-sm font-medium tracking-wide">
            <li className="text-cyan-400 cursor-pointer ">Home</li>
            <li className="hover:text-cyan-400 cursor-pointer">Explore</li>
            <li className="hover:text-cyan-400 cursor-pointer">Adventures</li>
            <li className="hover:text-cyan-400 cursor-pointer">Blog</li>
            <li className="hover:text-cyan-400 cursor-pointer">Support</li>
          </ul>

          {/* Right Side */}
          <div className="ml-auto flex items-center gap-4">
            <Search className="hover:text-cyan-400 cursor-pointer" />
            <Bell className="hover:text-cyan-400 cursor-pointer" />
            <div className="w-8 h-8 rounded-full bg-gray-500 overflow-hidden border-2 border-white">
              <img
                src="https://i.pravatar.cc/40"
                alt="User"
                className="cursor-pointer w-full h-full object-cover"
                
              />
            </div>
            <button className="text-xs bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-full font-medium cursor-pointer">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-20 pt-40 pb-32 px-6 md:px-20 flex flex-col items-start text-left">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
          Discover the World <span className="text-cyan-400">Beyond Limits</span>
        </h1>
        <p className="text-lg mt-4 max-w-2xl text-white/80">
          Fuel your soul with unforgettable journeys. From coastal serenity to mountain peaks — live the travel life you've always dreamed.
        </p>
        <div className="mt-8 flex gap-4">
        
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold cursor-pointer">
            Start Exploring
          </button>
          
  <div className=" bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-full font-semibold cursor-pointer inline-block" >
    Watch Stories
  </div>

        </div>
      </section>



      {/* Search Section */}
      <section className="relative z-20 px-6 md:px-20 py-12">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md text-white rounded-full px-5 py-3 shadow-xl">
            <Search size={18} className="text-white opacity-80  " />
            <input
              type="text"
              placeholder="Search destinations..."
              className="bg-transparent w-full outline-none text-sm placeholder-white/70"
            />
          </div>
          <ul className="mt-4 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 space-y-2 text-sm text-white">
            {['Vancouver, CND', 'Abu Dhabi, UAE', 'Kerela, IND', 'Dubai, UAE', 'Toronto, CND'].map((city) => (
              <li key={city} className="hover:bg-white/10 px-3 py-2 rounded cursor-pointer">
                {city}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Travel Stories / Modular Sections */}
      <section className="relative z-20 px-6 md:px-20 py-20 bg-yellow/90">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Traveler Stories</h2>
        <div className="grid md:grid-cols-3 gap-8 text-white/90">
          <div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Into the Fjords of Norway</h3>
            <p className="text-sm mt-2">Breathtaking fjords, icy waterfalls, and untamed beauty.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Sands of the Sahara</h3>
            <p className="text-sm mt-2">Camel rides, nomad camps, and starlit nights in the desert.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Lost in Kyoto</h3>
            <p className="text-sm mt-2">Temples, geishas, and the aroma of matcha in ancient Japan.</p>
          </div>
        </div>
      </section>

      {/* Call another Page */}
      <App1 />

      {/* Footer */}
      <footer className="relative z-20 py-10 px-6 md:px-20 bg-black/95 text-gray-400 text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 TravGo. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Use</span>
            <span className="hover:text-white cursor-pointer">Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
