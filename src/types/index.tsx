export interface ICard {
  id: number;
  title: string;
  category: string;
  price: number;
  coverSrc: string;
}

export interface IHash<T> {
  [key: string]: T;
}

export interface IUseFilterProps {
  data: ICard[];
  filterSchema: IHash<IFilterField>;
}

export type TFilterValue = (
  filterValue: string | string[],
  data: ICard[]
) => {};

export interface IFilterField {
  value: string[] | string;
  filterMethod: TFilterValue;
}

export type TSetStateFilter = (
  value: React.SetStateAction<IHash<IFilterField>>
) => void;
