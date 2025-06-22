import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import backgroundImage from '../assets/images/FrontPage/FrontPageBG.jpg';
import FooterSection from '../components/Footer';

const FrontPage = () => {
  return (
    <>
      <section
        className="h-screen bg-fixed bg-center scroll-smooth bg-cover relative text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/20 z-10"></div>

        <header className="relative z-20 flex justify-between items-center px-6 py-4">
          <h1 className="text-3xl font-bold">Randibaz App</h1>
          <nav className="hidden md:flex gap-6 text-white font-medium">
            <a href="#">Products</a>
            <a href="#">Learn</a>
            <a href="#">Safety</a>
            <a href="#">Support</a>
            <a href="#">Download</a>
          </nav>
          <button className="bg-white text-black px-4 py-1 rounded-full font-semibold hover:bg-gray-100">
            Log in
          </button>
        </header>

        <main className="relative z-20 flex flex-col items-center justify-center text-center px-4 mt-28">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">
            Find Your Match
          </h1>
          <div className="flex gap-4 mt-6 flex-wrap justify-center">
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold shadow hover:scale-105 transition">
              <FaApple size={20} />
              App Store
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold shadow hover:scale-105 transition">
              <FaGooglePlay size={20} />
              Google Play
            </button>
          </div>
        </main>
      </section>
      <FooterSection />
    </>
  );
};

export default FrontPage;
