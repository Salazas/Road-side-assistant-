import { LiaSistrix } from "react-icons/lia";

const Search = ({ search, setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex w-full items-center gap-2 rounded-full bg-gray-50 px-3 py-2">
      <LiaSistrix className="text-2xl text-gray-500" />

      <input
        className="w-full bg-transparent focus:outline-none"
        placeholder="Search for vehicles"
        type="text"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
