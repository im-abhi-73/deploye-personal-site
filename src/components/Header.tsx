import React from 'react';

const Header = () => {
  return (
    <header className="flex items-start justify-between p-8 text-sm">
      {/* Left Side */}
      <div className="space-y-1">
        <div className="text-gray-600">DROP ME A LINE</div>
        <div>
          <a
            href="/mail"
            className="px-1 text-gray-600 transition-colors duration-300 rounded cursor-pointer hover:bg-yellow-300"
          >
          ABHEEPATIL2002@GMAIL.COM
          </a>
        </div>
      </div>

      {/* Center */}
      <div className="space-y-1">
        <div className="px-5 text-gray-600">BUILDING THE</div>
        <div className="px-5 text-gray-600">FUTURE</div>
        <div className="px-5 text-gray-600">IN CODE</div>
      </div>

      {/* Code Box */}
      <div className="text-right space-y-9">
        <div className="text-gray-600"></div>
        <div className="text-gray-600"></div>
        <div className="text-gray-600"></div>
        <div className="text-gray-800">485 {'>'} 0394.0</div>
      </div>

      {/* Social Links */}
      <div className="space-y-0 text-right">
        <div>
          <a
            href="https://www.linkedin.com/in/abhishek-ahire-071791268/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:bg-yellow-300 px-1 py-0.5 rounded transition-colors duration-300 cursor-pointer"
          >
            LINKEDIN
          </a>
        </div>
        <div>
          <a
            href="https://github.com/im-abhi-73"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:bg-yellow-300 px-1 py-0.5 rounded transition-colors duration-300 cursor-pointer"
          >
            GITHUB
          </a>
        </div>
        <div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:bg-yellow-300 px-1 py-0.5 rounded transition-colors duration-300 cursor-pointer"
          >
            TWITTER
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
