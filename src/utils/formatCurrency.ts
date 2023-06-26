const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
}

export default formatCurrency
