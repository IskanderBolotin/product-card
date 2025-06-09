import type { PriceType } from "./price";

export type ProductDTO = {
  title: string;
  price: PriceType;
  imageSrc: string;
};