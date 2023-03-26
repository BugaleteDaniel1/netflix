import { HomeScreen } from "./pages/HomeScreen";
import { Routes, Route, redirect, Navigate } from "react-router-dom";
import { LoginScreen } from "./pages/LoginScreen";
import { useAuth } from "../firebase";
// tmdb api key = "3570b4768df2a379d2c898dd70c643be"
function App() {
  const currentUser = useAuth();
  const user = currentUser?.email;
  console.log(user);

  return (
    <Routes>
      {!user ? (
        <Route path="/" element={<Navigate to="/login" />} />
      ) : (
        <Route path="/login" element={<Navigate to="/" />} />
      )}
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
}

export default App;
