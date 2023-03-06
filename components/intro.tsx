import { useEffect, useState } from "react";

const Intro = () => {
  const [currentQuipIndex, setCurrentQuipIndex] = useState(0);
  const quips = [
    "This is where I write stuff!",
    "Hei bloggen!",
    "It's a blog, I guess!",
    "Is it a portfolio?",
    "Catchy blog title!",
    "Is it a blog?",
    "Roll for initiative!",
    "2d6+4 fire damage!",
    "Made you some content!",
    "Keyboard compatible!",
    "It's free real estate!",
    "I'm a psychologist!",
    "Blog dust! Don't breathe it!",
  ];
  const currentQuip = quips[currentQuipIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuipIndex((currentQuipIndex) => {
        let randomIndex = Math.floor(Math.random() * quips.length);
        while (randomIndex === currentQuipIndex) {
          // Ensure that the new index is not the same as the current one
          randomIndex = Math.floor(Math.random() * quips.length);
        }
        return randomIndex;
      });
    }, 4000);
    return () => clearInterval(interval);
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
