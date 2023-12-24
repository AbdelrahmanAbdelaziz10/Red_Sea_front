import { BrowserRouter , Routes , Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>

    

    </div>
  );
}

export default App;
