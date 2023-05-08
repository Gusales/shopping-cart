const formatCurrency = (value: string) => {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};

export default formatCurrency;
