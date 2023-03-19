import { Genre } from "./stories";

type Props = {
  selectedGenre: Genre | null;
  setSelectedGenre: (genre: Genre | null) => void;
};

const GenreFilter: React.FC<Props> = ({ selectedGenre, setSelectedGenre }) => {
  const buttonStyling =
    "mr-1 mb-1 border border-violet-400 rounded-full px-3 py-1 outline-none";
  const darkBackgroundStyling = "dark:bg-violet-900";
  const darkBorderStyling = "dark:border-violet-800";
  const transitionStyling = "transition duration-300 ease-in-out";

  return (
    <div className="pb-0.5">
      <button
        className={`${buttonStyling} ${
          selectedGenre === null
            ? `${darkBackgroundStyling} bg-violet-500 ${transitionStyling} border-violet-700 text-white`
            : `${transitionStyling} ${darkBorderStyling}`
        }`}
        onClick={() => setSelectedGenre(null)}
      >
        Any
      </button>
      {Object.values(Genre).map((genre) => (
        <button
          key={genre}
          className={`${buttonStyling} ${
            selectedGenre === genre
              ? `${darkBackgroundStyling} bg-violet-500 ${transitionStyling} dark:border-violet-700 border-violet-600 text-white`
              : `${transitionStyling} ${darkBorderStyling}`
          }`}
          onClick={() => {
            if (selectedGenre === genre) {
              setSelectedGenre(null);
            } else {
              setSelectedGenre(genre);
            }
          }}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
