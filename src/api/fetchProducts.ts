export const fetchProducts = async (query: any) => {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}`
  );
  const { results } = await response.json();
  return results;
};
