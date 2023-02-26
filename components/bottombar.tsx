import React from "react";

const BottomBar = (props) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {props.filteredPosts > 0 ? (
        <div className="pt-10 text-center">
          <button
            className="pb-12 mx-auto text-3xl mb-16 text-violet-700"
            onClick={handleClick}
          >
            To the top! 👏
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default BottomBar;
