import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import NewPasswordPage from "./pages/NewPasswordPage";
import CodePage from "./pages/CodePage";
import OrderPage from "./pages/OrderPage";
import AdminPage from "./pages/AdminPage";
import TablePage from "./pages/TablePage";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="kayit-ol" element={<SignUpPage />} />
          <Route path="Sifremi-unuttum" element={<ForgotPasswordPage />} />
          <Route path="Sifre-yenile" element={<NewPasswordPage />} />
          <Route path="Onay-kod" element={<CodePage />} />
          <Route path="Siparis-sayfasi" element={<OrderPage />} />
          <Route path="Yonetici-giris" element={<AdminPage />} />
          <Route path="kullanicilar" element={<TablePage />} />
          <Route path="Odeme-Onay" element={<SuccessPage />} />
      </Routes>
    </Router>
   
  );
}
export default App;
