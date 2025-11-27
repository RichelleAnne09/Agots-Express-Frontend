// api/StatsAPI.js
import axios from "axios";

// Fetch dashboard stats
export const fetchStats = async () => {
  const res = await axios.get("http://localhost:5000/dashboard/stats");
  return res.data;
};

// Fetch recent orders
export const fetchRecentOrders = async () => {
  const res = await axios.get("http://localhost:5000/dashboard/recent-orders");
  return res.data;
};
