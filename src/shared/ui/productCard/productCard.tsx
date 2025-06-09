import type { ProductDTO } from "@/shared/model";
import s from "./productCard.module.scss";

type Props = {
  data?: ProductDTO
};

const ProductCard: React.FC<Props> = ({ data }) => {
  const { title, imageSrc, price } = data || {};

  return (
    <div className={s.card}>
      <div className={s.image}>
        <div className={s.inner}>
          {
            title !== undefined &&
            <img src={imageSrc} alt={title} />
          }
        </div>
      </div>
      <h3 className={s.title}>
        {
          title !== undefined ?
          title:
          "Загрузка..."
        }
      </h3>
      <div className={s.price}>
        {
          price !== undefined &&
          <>
            <span>{price?.price}</span>&nbsp;<span>{price?.currency}</span>
          </>
        }
      </div>
    </div>
  );
};

export { ProductCard };
