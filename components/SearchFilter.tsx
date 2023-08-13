type Props = {
  searchTerm: string;
  handleSearchTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchFilter: React.FC<Props> = ({ searchTerm, handleSearchTerm }) => {
  const buttonStyling =
    "mr-1 mb-1 border border-gray-500 rounded-full px-3 py-1 outline-none";
  const searchStyling =
    buttonStyling +
    "mr-0 w-44 outline-none dark:bg-black dark:border-gray-800 dark:placeholder-gray-400";

  return (
    <div>
      <input
        className={searchStyling}
        type="text"
        value={searchTerm}
        onChange={handleSearchTerm}
        placeholder="Filter posts..."
      />
    </div>
  );
};

export default SearchFilter;
