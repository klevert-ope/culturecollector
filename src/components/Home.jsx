import React from "react";

const Home = () => {
  return (
    <section id="intro" className=" hidden bg-black p-1 gap-1 grid-cols-1">
      <img className="intro" src="/images/home/towers.png" alt="" />
      <div className=" grid gap-1 grid-cols-4 max-sm:grid-cols-2">
        <img className="intro " src="/images/home/c1 (1).jpg" alt="" />
        <img className="intro " src="/images/home/c1 (4).jpg" alt="" />
        <img className="intro " src="/images/home/c1 (8).jpg" alt="" />
        <img className="intro" src="/images/home/c1 (5).jpg" alt="" />
      </div>
      <div className="grid gap-1 grid-cols-1">
        <img className="intro " src="/images/home/divine.png" alt="" />
      </div>

      <div className=" grid gap-1 grid-cols-4 max-sm:grid-cols-2">
        <img className="intro" src="/images/home/c1 (10).jpg" alt="" />
        <img className="intro" src="/images/home/c1 (6).jpg" alt="" />
        <img className="intro" src="/images/home/c1 (7).jpg" alt="" />
        <img className="intro" src="/images/home/c1 (12).jpg" alt="" />
      </div>
      <img className="intro " src="/images/home/heritage.png" alt="" />
    </section>
  );
};

export default Home;
