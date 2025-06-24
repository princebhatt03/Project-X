import React from 'react';
import { XMarkIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { FaFacebookF } from 'react-icons/fa';

const UserLoginPopUp = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm transition duration-300">
      <div className="bg-[#1e1e1e] text-white w-full max-w-md mx-4 sm:mx-6 md:mx-0 rounded-2xl shadow-xl p-6 sm:p-8 relative animate-fade-in scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          aria-label="Close">
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Logo & Title */}
        <div className="flex flex-col items-center mb-6">
          <div className="text-3xl font-extrabold text-pink-500 mb-2">
            Project-X
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Get Started</h2>
          <p className="text-sm text-center mt-2 text-gray-300 px-2 sm:px-4">
            By tapping Log In or Continue, you agree to our{' '}
            <span className="text-blue-400 cursor-pointer hover:underline">
              Terms
            </span>
            . Learn how we process your data in our{' '}
            <span className="text-blue-400 cursor-pointer hover:underline">
              Privacy Policy
            </span>{' '}
            and{' '}
            <span className="text-blue-400 cursor-pointer hover:underline">
              Cookie Policy
            </span>
            .
          </p>
        </div>

        {/* Login Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 py-2 px-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <button className="w-full flex items-center justify-center gap-3 py-2 px-4 rounded-full bg-[#3b5998] text-white font-semibold hover:bg-[#334f88] transition">
            <FaFacebookF className="w-4 h-4" />
            Log in with Facebook
          </button>

          <button className="w-full flex items-center justify-center gap-3 py-2 px-4 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-600 transition">
            <PhoneIcon className="w-5 h-5" />
            Log in with phone number
          </button>
        </div>

        <p className="text-center text-sm text-blue-400 mt-4 cursor-pointer hover:underline">
          Trouble Logging In?
        </p>

        {/* App Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">Get the app!</p>
          <div className="flex justify-center gap-3 mt-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Available_on_the_App_Store_%28black%29.png"
              alt="App Store"
              className="w-32 h-10 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-32 h-10 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx="true">{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }

        .scale-in {
          animation: scaleIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default UserLoginPopUp;
