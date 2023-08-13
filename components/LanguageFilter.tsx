import { Language } from "../components/stories";

type Props = {
  selectedLanguage: Language | null;
  setSelectedLanguage: (language: Language | null) => void;
};

const LanguageFilter: React.FC<Props> = ({
  selectedLanguage,
  setSelectedLanguage,
}) => {
  const buttonStyling =
    "mr-1 mb-1 border border-violet-400 rounded-full px-3 py-1 outline-none";
  const darkBackgroundStyling = "dark:bg-violet-900";
  const darkBorderStyling = "dark:border-violet-800";

  return (
    <div className="pb-0.5">
      <button
        className={`${buttonStyling} w-44 md:w-42 ${
          selectedLanguage === Language.ENG
            ? `${darkBackgroundStyling} bg-violet-500 border-violet-700 text-white`
            : `${darkBorderStyling}`
        }`}
        onClick={() =>
          setSelectedLanguage(
            selectedLanguage === Language.ENG ? null : Language.ENG
          )
        }
      >
        {selectedLanguage === Language.ENG
          ? "Bob's your uncle!"
          : "Show English only"}
      </button>
    </div>
  );
};
export default LanguageFilter;
