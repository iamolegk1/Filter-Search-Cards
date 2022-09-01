import * as React from "react";

import FilterProduct from "../../components/FilterProduct";
import ListProduct from "../../components/ListProduct";
import SearchBar from "../../components/SearchBar";

import "./index.sass";

const Home: React.FC = () => (
  <div className="home">
    <SearchBar />
    <div className="filterListWrapper">
      <div className="filterWrapper">
        <FilterProduct />
      </div>
      <div className="listWrapper">
        <ListProduct />
      </div>
    </div>
  </div>
);

export default Home;
