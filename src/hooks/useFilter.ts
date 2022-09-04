import { useState, useEffect } from "react";

import {
  setFiltersArrayHandler,
  deleteFilterArrayHandler,
  setFiltersStringHandler,
} from "../utils/filter";
import { ICard, IUseFilterProps, IHash, IFilterField } from "../types";

export const useFilter = ({ data, filterSchema }: IUseFilterProps) => {
  const [filteredData, setFilteredData] = useState<ICard[]>(data);
  const [filters, setFilters] = useState<IHash<IFilterField>>(filterSchema);

  const setFiltersArray = setFiltersArrayHandler(setFilters);
  const deleteFilterArray = deleteFilterArrayHandler(setFilters);
  const setFiltersString = setFiltersStringHandler(setFilters);

  useEffect(() => {
    const newFilteredData = Object.entries(filters).reduce(
      (result, [filterFieldName, { filterMethod }]) => {
        result = filterMethod(
          filters[filterFieldName].value,
          result
        ) as ICard[];
        return result;
      },
      data
    );

    setFilteredData(newFilteredData);
  }, [filters, data]);

  return [
    filters,
    filteredData,
    {
      setFilters,
      setFilteredData,
      setFiltersArray,
      deleteFilterArray,
      setFiltersString,
    },
  ] as const;
};
