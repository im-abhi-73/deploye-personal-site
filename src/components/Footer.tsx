import React from 'react';

const Footer = () => {
  return (
    <footer className="flex items-end p-2 text-gray-600 text-between justify-bet">
      <div>© {new Date().getFullYear()} Abhishek Ahire. All Rights Reserved.</div>
     
    </footer>
  );
};

export default Footer;