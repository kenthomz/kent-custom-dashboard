import { Users, DollarSign, TrendingUp, Activity } from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "1,240",
      icon: <Users size={24} />,
      color: "blue",
    },
    {
      title: "Total Sales",
      value: "$12,430",
      icon: <DollarSign size={24} />,
      color: "green",
    },
    {
      title: "Daily Visits",
      value: "8,900",
      icon: <Activity size={24} />,
      color: "purple",
    },
    {
      title: "Growth",
      value: "+12.5%",
      icon: <TrendingUp size={24} />,
      color: "orange",
    },
  ];

  return (
    <div className="dashboard-page">
      <header className="dashboard-page__header">
        <h1>Dashboard Overview</h1>
        <p>Welcome back! Here's what's happening today.</p>
      </header>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-card stat-card--${stat.color}`}>
            <div className="stat-card__icon">{stat.icon}</div>
            <div className="stat-card__content">
              <h3>{stat.title}</h3>
              <p>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder para sa future table o chart */}
      <div className="dashboard-content-placeholder">
        <div className="chart-box">Main Analytics Chart Placeholder</div>
        <div className="recent-box">Recent Activities</div>
      </div>
    </div>
  );
}
