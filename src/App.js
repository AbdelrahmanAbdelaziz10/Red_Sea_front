import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutPage from "./Pages/About/AboutPage";
import BrandPage from "./Pages/BrandPage/BrandPage";
import Contact from "./Pages/Contact/Contact";
import HomePage from "./Pages/Home/HomePage";
import PackagingPage from "./Pages/Packaging/PackagingPage";
import PolicyPage from "./Pages/PrivacyPolicy/PolicyPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import TermsPage from "./Pages/TermsUsing/TermsPage";
import ZahraProduct from "./Pages/ProductsPage/ZahraProduct";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/elzahra" element={<ZahraProduct />} />
          <Route path="/brand" element={<BrandPage />} />
          <Route path="/privacy_policy" element={<PolicyPage />} />
          <Route path="/terms_using" element={<TermsPage />} />
          <Route path="/packaging" element={<PackagingPage />} />
          <Route path="/products/:productId" element={<ZahraProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
