import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import { UserContext } from "./context/UserContext";
import { useState } from "react";
function App() {
  const [user, setUser] = useState(false);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/register" Component={Register} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
