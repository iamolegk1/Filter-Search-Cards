import { IHash, IFilterField, TSetStateFilter } from "../types";

export const setFiltersArrayHandler =
  (setState: TSetStateFilter) => (filterField: string, value: string) =>
    setState((prevState: IHash<IFilterField>) => ({
      ...prevState,
      [filterField]: {
        ...prevState[filterField],
        value: [...(prevState[filterField].value as []), value],
      },
    }));

export const deleteFilterArrayHandler =
  (setState: TSetStateFilter) => (filterField: string, value: string) =>
    setState((prevState: IHash<IFilterField>) => ({
      ...prevState,
      [filterField]: {
        ...prevState[filterField],
        value: (prevState[filterField].value as []).filter(
          (category) => category !== value
        ),
      },
    }));

export const setFiltersStringHandler =
  (setState: TSetStateFilter) => (filterField: string, value: string) =>
    setState((prevState: IHash<IFilterField>) => ({
      ...prevState,
      [filterField]: {
        ...prevState[filterField],
        value,
      },
    }));
