import { Routes, Route } from "react-router-dom";

import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import PromptHistory from "./pages/PromptHistory";
import Favorites from "./pages/Favorites";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/history" element={<PromptHistory />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default AppRoutes;