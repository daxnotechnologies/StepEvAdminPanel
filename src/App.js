import "./App.css";
import Login from "./Components/Login";
import SideBar from "./Components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./Components/Users";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import Campaigns from "./Components/Campaigns";
import ApprovalOfCampain from "./Components/ApprovalOfCampain";
import Settings from "./Components/Settings";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      <div className="flex bg-[#7E7E7E] ">
        <Router>
          <SideBar />
          <div className="flex flex-col w-full ">
          <Header />
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Campaigns" element={<Campaigns />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Funds" element={<ApprovalOfCampain />} />
          </Routes>
          </div>
        </Router>
        
      </div>
    </>
  );
}

export default App;
