import React from "react";

const BottomBar = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button className="mx-auto text-2xl" onClick={handleClick}>
        <div className="">To the top!</div>
      </button>
      <div className="pt-1 bg-violet-500 rounded-t-md sticky bottom-0"></div>
    </>
  );
};

export default BottomBar;
