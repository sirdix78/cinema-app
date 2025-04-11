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
import { AllMovies } from "./pages/AllMovies";
import { CreateMovie } from "./pages/CreateMovie";
import { EditMovie } from "./pages/EditMovie";
import { ProtectedRoute } from "./components/ProtectedRoute";

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
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/all-movies" element={<AllMovies />} />
            <Route path="/create" element={<CreateMovie />} />
            <Route path="/edit/:movieId" element={<EditMovie />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
