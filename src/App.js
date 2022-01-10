import { Button } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import GridMUI from "./playground/GridMUI";
import ProductContainer from "./components/Products/ProductContainer";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <ProductContainer />
    </div>
  );
}

export default App;
