import { useState, useEffect } from "react";

const Intro = () => {
  const [currentQuip, setCurrentQuip] = useState("");

  useEffect(() => {
    const quips = [
      "This is where I write stuff!",
      "Hei bloggen!",
      "It's a blog, I guess!",
      "It's a portfolio, I guess!",
    ];
    const randomQuip = quips[Math.floor(Math.random() * quips.length)];
    setCurrentQuip(randomQuip);
  }, []);

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-6 mb-6 md:mb-4">
      <h1 className="text-3xl select-none md:text-6xl tracking-normal md:pr-8 rounded-md">
        Jens Bech-Sørensen
      </h1>

      <div className="text-center pt-1 text-black md:text-left text-xl mt-4 md:pl-8 select-none">
        {currentQuip}
      </div>
    </section>
  );
};

export default Intro;
