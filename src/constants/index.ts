import { ICard, IHash } from "../types";

export const FILTERS_FIELDS: IHash<string> = {
  categories: "categories",
  search: "search",
};

export const CATEGORIES: string[] = ["Processors", "Smartphone", "Tablet"];

export const DATA_LIST: ICard[] = [
  {
    id: 1,
    title: "AMD Ryzen Threadripper PRO 3995WX",
    category: "Processors",
    price: 2500,
    coverSrc:
      "https://images.unsplash.com/photo-1600348759986-dc35c2ec7743?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    title: "Intel Core i9-12900K",
    category: "Processors",
    price: 2000,
    coverSrc:
      "https://images.unsplash.com/photo-1555617981-dac3880eac6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    title: "Apple iPhone 13 Pro",
    category: "Smartphone",
    price: 1100,
    coverSrc:
      "https://images.unsplash.com/photo-1656078411660-05f2cf994d33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    title: "Samsung Galaxy S22 Ultra 5G",
    category: "Smartphone",
    price: 1500,
    coverSrc:
      "https://images.unsplash.com/photo-1651054008618-34348b76164c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    title: "Xiaomi Mi 11 Ultra",
    category: "Smartphone",
    price: 3000,
    coverSrc:
      "https://images.unsplash.com/photo-1619410801513-dfb019c4763f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2060&q=80",
  },
  {
    id: 6,
    title: "Oppo Find X5 Pro",
    category: "Smartphone",
    price: 800,
    coverSrc:
      "https://images.unsplash.com/photo-1649859396073-13ff3244ec1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 7,
    title: "Google Pixel 6 Pro",
    category: "Smartphone",
    price: 4000,
    coverSrc:
      "https://images.unsplash.com/photo-1636373873339-721de2167b29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 8,
    title: "Apple iPad Pro 11 2021",
    category: "Tablet",
    price: 2000,
    coverSrc:
      "https://images.unsplash.com/photo-1601836211234-ca6cbde9a1cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: 9,
    title: "Xiaomi Pad 5 Pro",
    category: "Tablet",
    price: 3000,
    coverSrc:
      "https://images.unsplash.com/photo-1590103514924-009a76183beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];
