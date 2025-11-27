// src/api/StatsAPI.js
import axios from "axios";

export const fetchStats = async () => {
  try {
    const res = await axios.get("http://localhost:5000/dashboard/stats");
    return res.data; // return the object directly
  } catch (err) {
    console.error("Failed to fetch stats:", err);
    return {
      totalOrders: 0,
      totalCustomers: 0,
      totalRevenue: 0,
      averageFeedback: 0,
    };
  }
};
