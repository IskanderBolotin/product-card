import { useEffect, useState } from "react";
import type { ProductDTO } from "@/shared/model";
import { getProduct, ProductCard } from "@/shared";
import s from "./app.module.scss";

const App: React.FC = () => {
  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    const getProductResult = async () => {
      const res = await getProduct();
      setProduct(res);
    };
    getProductResult();
  }, []);

  return (
    <div className="app-container">
      <ul className={s.list} role="list">
        <li className={s.item}>
          <ProductCard data={product} />
        </li>
        <li className={s.item}>
          <ProductCard data={product} />
        </li>
        <li className={s.item}>
          <ProductCard data={product} />
        </li>
      </ul>
    </div>
  );
};

export { App };
