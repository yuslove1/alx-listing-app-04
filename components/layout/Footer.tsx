import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 p-4 mt-8"> {/* Added margin-top for spacing from content */}
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Copyright */}
        <div className="text-sm text-gray-600 mb-2 sm:mb-0">
          &copy; {new Date().getFullYear()} Listing-App. All rights reserved.
        </div>

        {/* Links (Right-aligned on larger screens) */}
        <div className="flex space-x-4"> {/* Added flex and spacing */}
          <a href="#" className="text-sm text-gray-800 hover:underline">Terms of Service</a>
          <a href="#" className="text-sm text-gray-800 hover:underline">Privacy Policy</a>
          <a href="#" className="text-sm text-gray-800 hover:underline">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;