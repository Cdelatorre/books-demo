import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { parseCart } from "../utils/cartUtils";

const Home = () => {
  const { products } = useContext(CartContext)
  const parsedCart = parseCart(products)

  return (
    <div>
      <h1>Casa</h1>
      <ul>
        {Object.keys(parsedCart).map((key, index) => {
          return (
            <li key={index}>{key} x {parsedCart[key]}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Home;
