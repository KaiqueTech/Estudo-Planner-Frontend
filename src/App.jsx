import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
//import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./Context/AuthContext"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

