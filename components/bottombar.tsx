import React from "react";

const BottomBar = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sm:text-right text-center">
      <button className="mx-auto text-3xl mb-20 sm:mb-0 pb-4" onClick={handleClick}>
        To the top! 👏
      </button>
      <div className="pt-1 bg-violet-500 rounded-t-md sticky bottom-0"></div>
    </div>
  );
  };
  

export default BottomBar;
