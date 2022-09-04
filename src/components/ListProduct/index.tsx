import React from "react";

import CardItem from "../CardItem";
import FilterProduct from "../FilterProduct";
import SearchBar from "../SearchBar";

import { useFilter } from "../../hooks/useFilter";

import { DATA_LIST, CATEGORIES, FILTERS_FIELDS } from "../../constants";

import { ICard, IHash, IFilterField } from "../../types";

import "./index.sass";

export const FILTER_INITIAL_VALUES: IHash<IFilterField> = {
  [FILTERS_FIELDS.categories]: {
    value: [],
    filterMethod: (filterValue, data) => {
      if (!filterValue.length) return data;
      return data.filter((item) => filterValue.includes(item.category));
    },
  },
  [FILTERS_FIELDS.search]: {
    value: "",
    filterMethod: (filterValue, data) => {
      if (!filterValue) return data;
      return data.filter((item) =>
        item.title.toLowerCase().includes((filterValue as string).toLowerCase())
      );
    },
  },
};

const ListProduct: React.FC = () => {
  const [
    filters,
    cardList,
    { setFiltersArray, deleteFilterArray, setFiltersString },
  ] = useFilter({ data: DATA_LIST, filterSchema: FILTER_INITIAL_VALUES });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltersString(FILTERS_FIELDS.search, e.target.value);
  };

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const index = (filters as IHash<IFilterField>)[
      FILTERS_FIELDS.categories
    ].value.indexOf(newValue);

    if (index === -1) {
      setFiltersArray(FILTERS_FIELDS.categories, newValue);
    } else {
      deleteFilterArray(FILTERS_FIELDS.categories, newValue);
    }
  };

  const filterCategoriesValue = (filters as IHash<IFilterField>)[
    FILTERS_FIELDS.categories
  ].value as string[];
  const filterSearchValue = (filters as IHash<IFilterField>)[
    FILTERS_FIELDS.search
  ].value as string;

  return (
    <div className="filterSearchListWrapper">
      <div className="filterWrapper">
        <FilterProduct
          categories={CATEGORIES}
          toggleCheckbox={filterCategoriesValue}
          handleToggle={handleToggle}
        />
      </div>
      <div className="searchListWrapper">
        <SearchBar
          value={filterSearchValue}
          handleSearchChange={handleSearchChange}
        />
        <div className="wrapperCards">
          {cardList &&
            cardList?.length > 0 &&
            cardList?.map((card: ICard) => (
              <CardItem key={card.id} content={card} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
