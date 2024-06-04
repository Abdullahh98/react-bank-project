import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserContext from "./context/UserContext";

import Profile from "./pages/ProfilePage";
import DepositForm from "./pages/Deposit";
import Transactions from "./pages/Transactions";
import Withdraw from "./pages/Withdraw";
import Home from "./pages/Home";
import Users from "./pages/Users";

function App() {
  const [user, setUser] = useState(false);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="/transactions" Component={Transactions} />
          <Route path="/profile" Component={Profile}></Route>
          <Route path="/deposit" Component={DepositForm}></Route>
          <Route path="/withdraw" Component={Withdraw} />
          <Route path="/home" Component={Home}></Route>
          <Route path="/users" Component={Users} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
