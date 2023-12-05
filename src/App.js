import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Navibar from "./components/layout/header/Navibar";
import Product from "./components/layout/product/Product";

function App() {
  return (
    <div className="w-full">
     <Header/>
     <Navibar/>
     <Product/>
     <Footer/>
    </div>
  );
}

export default App;
