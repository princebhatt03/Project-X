import React from 'react';
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaTwitter,
  FaFacebook,
} from 'react-icons/fa';

const FooterSection = () => {
  const testimonials = [
    {
      name: 'Shannon & Julian',
      text: 'I was feeling lonely back in my hometown because most of my friends had started romantic relationships while I was abroad. We both decided to download Tinder and see what happened. Without the app we may have never met and embarked on this wild, wonderful journey. Thank you for bringing us and so many other couples together around the world. I will forever be grateful.',
    },
    {
      name: 'Courtney & Miranda',
      text: 'Thanks to Tinder I have found the love of my life and we are to be married. After going on a few dates and having a few fun nights I came across Miranda. After reading her profile I couldn’t resist swiping right. After talking for about a week we went out on our first date and I knew there was something special about her!',
    },
    {
      name: 'Gabriel & Fiance',
      text: 'I met my fiancé on Tinder during the quarantine for COVID. She is from Lafayette, Indiana and I am from Cleveland, Ohio. We are both Christians who fell madly in love.',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      {/* Testimonials */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="border border-gray-700 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">{item.name}</h3>
            <hr className="border-gray-600 mb-3" />
            <p className="text-gray-300 text-sm">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="grid md:grid-cols-4 gap-8 text-sm text-gray-400">
        <div>
          <h4 className="text-white font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Consumer Health Data</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
            <li>
              <a href="#">Intellectual Property</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Careers</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">Careers Portal</a>
            </li>
            <li>
              <a href="#">Tech Blog</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Social</h4>
          <div className="flex gap-4 text-xl mt-2">
            <FaInstagram />
            <FaTiktok />
            <FaYoutube />
            <FaTwitter />
            <FaFacebook />
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">FAQ</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">Destinations</a>
            </li>
            <li>
              <a href="#">Press Room</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Promo Code</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
