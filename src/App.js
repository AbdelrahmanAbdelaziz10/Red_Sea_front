import { BrowserRouter , Routes , Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Contact from "./Pages/Contact/Contact";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import ZahraProduct from "./Pages/ProductsPage/ZahraProduct";
import BrandPage from "./Pages/BrandPage/BrandPage";
import PolicyPage from "./Pages/PrivacyPolicy/PolicyPage";
import TermsPage from "./Pages/TermsUsing/TermsPage";
import PackagingPage from "./Pages/Packaging/PackagingPage";
function App() {
  return (
    <div className="App">
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/elzahra" element={<ZahraProduct />} />
        <Route path="/brand" element={<BrandPage />} />
        <Route path="/privacy_policy" element={<PolicyPage />} />
        <Route path="/terms_using" element={<TermsPage />} />
        <Route path="/packaging" element={<PackagingPage />} />







      </Routes>
    </BrowserRouter>

    

    </div>
  );
}

export default App;
