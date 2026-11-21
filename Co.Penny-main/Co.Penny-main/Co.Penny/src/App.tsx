import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductListPage from "./pages/ProductListPage";
import CheckInPage from "./pages/CheckInPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/checkin" element={<CheckInPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
