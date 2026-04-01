import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";
import "./Sidebar.scss";

// ITO ANG FIX: Interface definition
interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard size={20} /> },
    { name: "Users", path: "/users", icon: <Users size={20} /> },
  ];

  return (
    <aside className={`sidebar ${isCollapsed ? "sidebar--collapsed" : ""}`}>
      <div className="sidebar__header">
        {!isCollapsed && <span className="sidebar__logo-text">GeminiOS</span>}
        <button className="sidebar__toggle-btn" onClick={toggleSidebar}>
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          {menuItems.map((item) => (
            <li key={item.path} className="sidebar__item">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `sidebar__link ${isActive ? "sidebar__link--active" : ""}`
                }
              >
                <span className="sidebar__icon">{item.icon}</span>
                {!isCollapsed && (
                  <span className="sidebar__text">{item.name}</span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar__footer">
        <button className="sidebar__logout-btn">
          <LogOut size={20} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
