import type { CurrencyType, ProductDTO } from "@/shared/model";
import s from "./productCard.module.scss";

type Props = {
  data?: ProductDTO;
};

const getPrice = (price: number, currency: CurrencyType) => {
  const priceInRubles = price / 100;
  
  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatter.format(priceInRubles);
};
const ProductCard: React.FC<Props> = ({ data }) => {
  const { title, imageSrc, price } = data || {};

  return (
    <div className={s.card}>
      <div className={s.image}>
        <div className={s.inner}>
          {title !== undefined && <img src={imageSrc} alt={title} />}
        </div>
      </div>
      <h3 className={s.title}>{title !== undefined ? title : "Загрузка..."}</h3>
      <div className={s.price}>
        {price !== undefined && (
          <>
            <span>{getPrice(price?.price, price?.currency)}</span>
          </>
        )}
      </div>
    </div>
  );
};

export { ProductCard };
