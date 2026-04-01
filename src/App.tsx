import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import "./App.scss";

function App() {
  // Dito natin ilalagay ang state para kontrolado ang Header at Sidebar sabay
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`app-container ${isCollapsed ? "app--collapsed" : ""}`}>
      {/* 1. Sidebar - Pasa natin yung state at toggle function */}
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

      <div className="main-wrapper">
        {/* 2. Header - Laging nasa taas, sa labas ng Routes */}
        <Header isSidebarCollapsed={isCollapsed} />

        {/* 3. Content Area - Dito lang magpapalit-palit ang pages */}
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
