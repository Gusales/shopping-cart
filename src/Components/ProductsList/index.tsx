import { useEffect, useState } from "react";
import { Card } from "../../@types/ProductCard";
import { fetchProducts } from "../../api/fetchProducts";
import ProductCard from "../ProductCard";
import "./style.css";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts("smartphones").then((res) => {
      setProducts(res);
    });
  }, []);

  console.log(products);

  return (
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
  );
}
