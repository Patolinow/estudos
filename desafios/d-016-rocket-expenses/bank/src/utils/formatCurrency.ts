export const formattedCurrency = (value: number) =>  new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(value / 100 ?? 0);