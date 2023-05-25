import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="footer" className=" h-screen bg-black hidden">
      <div className=" grid gap-5 grid-cols-1 md:grid-cols-3 font-ClashGrotesk font-semibold text-white text-4xl lg:text-6xl xl:text-7xl pt-5">
        <div>
          <ul>
            <li className="text-sm font-Technor font-bold text-red-600">
              SOCIAL
            </li>
            <li>INSTAGRAM</li>
            <li>TWITTER</li>
            <li>FACEBOOK</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-sm font-Technor font-bold text-red-600">
              CULTURE COLLECTOR
            </li>
            <li>MUSIC</li>
            <li>CULTURE</li>
            <li>PASSION</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-sm font-bold font-Technor text-red-600">
              TERMS
            </li>
            <li>LICENSE</li>
          </ul>
        </div>
      </div>
      <div
        id="creatortag"
        className=" mt-20 font-ClashGrotesk font-semibold text-sm text-center text-white"
        data-test="footer-text"
      >
        &copy;{currentYear} Made with 💙 by Klevert
      </div>
    </section>
  );
};

export default Footer;
