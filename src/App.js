import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserContext from "./context/UserContext";
import Transaction from "./pages/Transactions";
function App() {
  const [user, setUser] = useState(false);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="/transactions" Component={Transaction} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
