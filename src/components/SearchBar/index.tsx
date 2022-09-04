import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import TextField from "@mui/material/TextField";

import "./index.sass";
interface ISearchBar {
  handleSearchChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}

const SearchBar: React.FC<ISearchBar> = ({ value, handleSearchChange }) => (
  <div className="searchBarWrapper">
    <SearchIcon className="searchIcon" />
    <TextField
      id="standard-search"
      label="Search field"
      type="search"
      variant="standard"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        handleSearchChange(e)
      }
    />
  </div>
);

export default SearchBar;
