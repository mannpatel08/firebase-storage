import React, { useState } from "react";

const SearchFilter = ({ setSearch }) => {

  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    setValue(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <input
      className="search"
      placeholder="Search files..."
      value={value}
      onChange={handleSearch}
    />
  );
};

export default SearchFilter;