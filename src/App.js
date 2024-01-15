import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import redseaLogo from "./images/redsea logo.png";
import AboutPage from "./Pages/About/AboutPage";
import BrandPage from "./Pages/BrandPage/BrandPage";
import Contact from "./Pages/Contact/Contact";
import HomePage from "./Pages/Home/HomePage";
import PackagingPage from "./Pages/Packaging/PackagingPage";
import PolicyPage from "./Pages/PrivacyPolicy/PolicyPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import TermsPage from "./Pages/TermsUsing/TermsPage";
import ZahraProduct from "./Pages/ProductsPage/ZahraProduct";
import Footer from "./Components/Footer/Footer";
import ltl from "./direction/ltr.css";
import rtl from "./direction/rtl.css";
import Error404 from './Pages/Error404/Error404';

export const ContextLang = createContext();

function App() {
  const [navshow,setNavshow]=useState("true")
  const [selectedLanguage, setSelectedLanguage] = useState("ar");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <ContextLang.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      <div className={selectedLanguage === "ar" ? "App rtl" : "App ltr"}>
        {loading ? (
          <div className="loading d-flex justify-content-center">
            <div className="loading_logo">
              <img src={redseaLogo} alt="" />
            </div>
          </div>
        ) : (
          <Router basename="/">
            <Routes>
              <Route path="/" element={<HomePage navshow={navshow} />} />
              <Route path="/about" element={<AboutPage navshow={navshow}/>} />
              <Route path="/products" element={<ProductsPage navshow={navshow} setNavshow={setNavshow}/>} />
              <Route path="/products/:productId" element={<ZahraProduct navshow={navshow} setNavshow={setNavshow}/>} />
              <Route path="/brand" element={<BrandPage navshow={navshow}/>} />
              <Route path="/packaging" element={<PackagingPage navshow={navshow}/>} />
              <Route path="/contact" element={<Contact navshow={navshow}/>} />
              <Route path="/privacy_policy" element={<PolicyPage navshow={navshow}/>} />
              <Route path="/terms_using" element={<TermsPage navshow={navshow}/>} />
              <Route path="*" element={<Error404 />} />
            </Routes>

          </Router>
        )}
      </div>
    </ContextLang.Provider>
  );
}

export default App;
