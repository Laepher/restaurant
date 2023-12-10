import { DateTime } from "next-auth/providers/kakao";

export type MenuType = {
  categories: Array<TCategory>;
};
export type TCategory = {
  id: string;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
};

export type ProductType = {
  products: Array<TProduct>;
};
export type TProduct = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
};

export type OrderType = {
  id: string;
  useEmail: string;
  price: number;
  products: object[];
  status: string;
  createdAt: Date;
  intent_id?: string;
};
