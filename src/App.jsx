import { HomeScreen } from "./pages/HomeScreen";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginScreen } from "./pages/LoginScreen";
import { useAuth } from "../firebase";
import { Profile } from "./pages/Profile";
function App() {
  const currentUser = useAuth();
  const user = currentUser?.email;
  // console.log(currentUser?.uid);

  return (
    <Routes>
      {!user ? (
        <Route path="/" element={<Navigate to="/login" />} />
      ) : (
        <Route path="/login" element={<Navigate to="/profile" />} />
      )}
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
