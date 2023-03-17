import { useEffect, useState } from "react";

const Intro = () => {
  const quips = [
    "This is where I write stuff!",
    "Hello, there!",
    "Catchy title!",
    "I made you some content!",
    "It's free real estate!",
  ];

  const getRandomQuipIndex = (currentQuipIndex) => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quips.length);
    } while (newIndex === currentQuipIndex);
    return newIndex;
  };

  const [currentQuipIndex, setCurrentQuipIndex] = useState(null);

  useEffect(() => {
    setCurrentQuipIndex(getRandomQuipIndex(-1));
  }, []);

  const currentQuip = currentQuipIndex !== null ? quips[currentQuipIndex] : "";

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-6 mb-6 md:mb-4">
      <h1 className="text-3xl select-none md:text-6xl tracking-tight md:pr-8 rounded-md">
        Jens Bech-Sørensen
      </h1>
      <div className="text-center pt-1 text-black md:text-left text-xl mt-4 md:pl-8 select-none">
        {currentQuip}
      </div>
    </section>
  );
};

export default Intro;
