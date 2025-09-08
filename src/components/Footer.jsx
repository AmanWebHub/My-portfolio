import React from "react";

import "../assets/css/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer py-4">
      <div className="container text-center">
        <p className="mb-0">
          &copy; {currentYear}  Aman Raheem. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
