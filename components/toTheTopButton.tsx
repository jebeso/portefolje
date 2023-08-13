export default function ToTheTopButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="text-center">
        <div className="text-center">
          <button
            className="pb-12 mx-auto text-3xl mb-16 dark:text-gray-300 text-gray-700"
            onClick={handleClick}
          >
            To the top! 👏
          </button>
        </div>
      </div>
    </>
  );
}
