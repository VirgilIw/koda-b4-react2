import { useState } from "react";

const SearchBtn = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="flex mx-auto justify-center p-5 bg-black">
        <label className="flex items-center gap-4">
          <input
            type="text"
            id="name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Input your answer here..."
            autoComplete="off"
            className="text-black bg-white p-2 text-xl font-bold rounded-md"
          />
          <button type="submit" className="cursor-pointer">
            <img
              src="src/assets/image.png"
              alt="search-icon"
              className="w-10 h-10"
            />
          </button>
        </label>
      </div>
    </form>
  );
};
export default SearchBtn;
