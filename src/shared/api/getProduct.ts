import type { ProductDTO } from "@/shared/model";
import { fetchApi } from "./default";

const PRODUCT_MOCK: ProductDTO = {
  title: "Название товара",
  price: {
    price: 34900,
    currency: "RUB",
  },
  imageSrc: "/images.png",
};

const getProduct = async () => {
  const result = await fetchApi<ProductDTO>(PRODUCT_MOCK);
  return result
};

export { getProduct };
