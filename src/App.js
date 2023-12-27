import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from "./components/navs/SideNav";
import PageNotFound from "./pages/errors/PageNotFound";
import Dashboard from "./pages/admin/Dashboard";
import MainPage from "./pages/clients/MainPage";
import LandingPage from "./pages/guest/LandingPage";
import Nav from "./components/navs/Nav";
import Header from "./components/containers/Header";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Nav />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot" element={<ForgotPassword />} />
          <Route path="reset-password/*" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>

        <Route path="/admin" element={<SideNav />}>
          <Route index element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>

        <Route path="/loading-dock" element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
