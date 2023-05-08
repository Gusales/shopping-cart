import { motion } from "framer-motion";
import { Card } from "../../@types/ProductCard";
import formatCurrency from "../../utils/formatCurrency";
import "./style.css";

export default function ProductCard({ title, thumbnail, price }: Card) {
  const animation = {
    variantA: { scale: 1 },
    variantB: { scale: 1.05 },
  };

  return (
    <motion.div
      className="card"
      variants={animation}
      initial="variantA"
      whileHover="variantB"
    >
      <img
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="Imagem do Produto"
        className="product-image"
      />
      <div className="product-info">
        <h2 className="product-name">{title}</h2>
        <p className="product-price">{formatCurrency(price)}</p>
        <button className="product-button">Adicionar ao carrinho</button>
      </div>
    </motion.div>
  );
}
