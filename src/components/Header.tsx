import React from "react";
import { Search, Bell, ChevronDown, Sun } from "lucide-react";
import "./Header.scss";

interface HeaderProps {
  isSidebarCollapsed: boolean;
}

const Header: React.FC<HeaderProps> = ({ isSidebarCollapsed }) => {
  return (
    <header className={`header ${isSidebarCollapsed ? "header--wide" : ""}`}>
      <div className="header__search">
        <Search size={18} className="header__search-icon" />
        <input type="text" placeholder="Search anything..." />
      </div>

      <div className="header__actions">
        <button className="header__icon-btn">
          <Sun size={20} />
        </button>

        <button className="header__icon-btn header__icon-btn--notify">
          <Bell size={20} />
          <span className="header__badge"></span>
        </button>

        <div className="header__divider"></div>

        <div className="header__user">
          <img
            src="https://ui-avatars.com/api/?name=Admin+User&background=6366f1&color=fff"
            alt="User"
            className="header__avatar"
          />
          <div className="header__user-info">
            <span className="header__user-name">Admin User</span>
            <span className="header__user-role">Super Admin</span>
          </div>
          <ChevronDown size={16} className="header__chevron" />
        </div>
      </div>
    </header>
  );
};

export default Header;
