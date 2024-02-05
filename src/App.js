import "./App.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Menu from "./Menu.js";
import Pizza from "./Pizza.js";
import pizzaData from "./pizzaData.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} />
        ))}
      </ul>
      <Footer />
    </div>
  );
}
