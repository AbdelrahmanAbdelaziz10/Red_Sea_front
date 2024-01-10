
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import redseaLogo from './images/redsea logo.png';
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
import ltl from './direction/ltr.css';
import rtl from './direction/rtl.css';
import ClimbingBoxLoader  from "react-spinners/ClipLoader";


export const ContextLang = createContext();

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("ar");
  const [loading, setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2500)
  },[])
  return (
    <ContextLang.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      <div className={selectedLanguage=== 'ar'? "App rtl": "App ltr"}>
      {
        loading?
        <div className="loading d-flex justify-content-center">
        <div className="loading_logo">
          <img src={redseaLogo} alt=''/>
        </div>
        </div>
        : <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage  />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:productId" element={<ZahraProduct />} />
            <Route path="/brand" element={<BrandPage />} />
            <Route path="/packaging" element={<PackagingPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy_policy" element={<PolicyPage />} />
            <Route path="/terms_using" element={<TermsPage />} />

          </Routes>
          <div className="triangle_control">
        <div className="triangle" />
      </div>
      <Footer />
        </BrowserRouter>
      }

      </div>
    </ContextLang.Provider>
  );
}

export default App;