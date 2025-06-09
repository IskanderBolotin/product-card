export type CurrencyType = "RUB" | "USD" | "EUR";

export type PriceType = {
  price: number;
  currency: CurrencyType;
}