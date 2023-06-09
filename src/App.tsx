import Header from "./Components/Header";
import ProductsList from "./Components/ProductsList";
import Provider from "./context/Provider";

export default function App() {
  return (
    <Provider>
      <Header />
      <ProductsList />
    </Provider>
  );
}
