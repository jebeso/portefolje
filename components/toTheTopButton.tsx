export default function ToTheTopButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="pt-10 text-center">
        <div className="pt-10 text-center">
          <button
            className="pb-12 mx-auto text-3xl mb-16 dark:text-violet-300 text-violet-700"
            onClick={handleClick}
          >
            To the top! 👏
          </button>
        </div>
      </div>
    </>
  );
}
