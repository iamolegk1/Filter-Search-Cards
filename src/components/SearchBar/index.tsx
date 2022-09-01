import * as React from "react";
import SearchIcon from "@material-ui/icons/Search";

import "./index.sass";

interface INotesSearchBar {
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchBar: React.FC<INotesSearchBar> = ({ value, handleChange }) => (
  <div className="searchBarWrapper">
    <SearchIcon className="searchIcon" />
    <input
      type="text"
      placeholder="Enter here"
      value={value}
      onChange={handleChange}
    />
  </div>
);

export default SearchBar;
