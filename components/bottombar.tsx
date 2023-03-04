import React, { useEffect, useState } from "react";

const BottomBar = (props) => {
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isPageScrollable =
        document.documentElement.clientHeight <
        document.documentElement.scrollHeight;

      setIsScrollable(isPageScrollable);
    };

    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      const isPageScrollable =
        document.documentElement.clientHeight <
        document.documentElement.scrollHeight;

      setIsScrollable(isPageScrollable);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isScrollable && props.filteredPosts > 0 ? (
        <div className="pt-10 text-center">
          <button
            className="pb-12 mx-auto text-3xl mb-16 text-violet-700"
            onClick={handleClick}
          >
            To the top! 👏
          </button>
          <div className="pt-1 bg-violet-700 rounded-t-md"></div>
        </div>
      ) : null}
    </>
  );
};

export default BottomBar;
