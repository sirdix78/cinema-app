import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import HomePage from "./pages/Homepage";
import SignUpPage from "./pages/SignUpPage";
import { Login } from "./pages/Login";
import NotFound from "./pages/NotFoundPage";
import Footer from "./components/Footer";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <>
      <MyNavbar />
      <div className="app-container">
        <div className="routes-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
