import { useContext, useEffect } from "react";
import { ClipLoader } from 'react-spinners';
import { Card } from "../../@types/ProductCard";
import { fetchProducts } from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";
import ProductCard from "../ProductCard";
import "./style.css";

export default function ProductsList() {

  const { products, setProducts, isLoading, setIsLoading }: any = useContext(AppContext)

  useEffect(() => {
    setIsLoading(true)
    fetchProducts("smartphones").then((res) => {
      setProducts(res)
      setIsLoading(false);
    });
  }, []);

  console.log(products);

  return (
    ( isLoading && 
      
      <div className="loadingProducts">
      <ClipLoader 
      color="#ff0000"
      className="loader"
      />
      <h3>Carregando Produtos...</h3>
      </div>

      ) || (
      <section className="products-list">
      {products.map(({ id, price, thumbnail, title }: Card) => (
        <ProductCard
          id={id}
          key={id}
          title={title}
          thumbnail={thumbnail}
          price={price}
        />
      ))}
    </section>
    )
  );
}
