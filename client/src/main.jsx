import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthContextWrapper } from "./contexts/AuthContext.jsx";
import { MovieContextWrapper } from "./contexts/MovieContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextWrapper>
      <MovieContextWrapper>
        <App />
      </MovieContextWrapper>
    </AuthContextWrapper>
  </BrowserRouter>
);
