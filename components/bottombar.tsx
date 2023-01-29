import React from "react";


const BottomBar = (props) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>{props.filteredPosts > 0 ? <div className="sm:text-right text-center">
    <button className="mx-auto text-3xl mb-16 sm:mb-0 pb-4" onClick={handleClick}>
      To the top! 👏
    </button>
    <div className="pt-1 bg-violet-500 bottom-0 rounded-t-md"></div>
  </div> : <></> }
    </>
  );
  };
  

export default BottomBar;
