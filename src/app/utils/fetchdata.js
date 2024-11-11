import axios from 'axios';

const API_URL = '/api/admin/dashboard';
export const fetchDashboardData = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("Data received from proxy:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
