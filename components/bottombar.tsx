import React, { useEffect, useState } from "react";
import ToTheTopButton from "./toTheTopButton";

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

  return (
    <>
      {isScrollable && props.filteredPosts > 0 ? (
        <>
          {" "}
          <ToTheTopButton />
          <div className="pt-1 dark:bg-violet-900 bg-violet-700 rounded-t-md"></div>
        </>
      ) : null}
    </>
  );
};

export default BottomBar;
