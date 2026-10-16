import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductListPage from "./pages/ProductListPage";
import CheckInPage from "./pages/CheckInPage";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/checkin" element={<CheckInPage />} />
    </Routes>
  );
}

export default App;
