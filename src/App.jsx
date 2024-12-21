import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Layout from "./componenets/layout";
import Home from "./pages/home";
import ProductsPage from "./pages/productsPage";
import About from "./pages/about";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <About />
    </>
  );
}

export default App;
