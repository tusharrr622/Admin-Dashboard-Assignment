"use client";
import { useEffect, useState } from "react";
import { fetchDashboardData } from "../utils/fetchData";
import UserMetricsChart from './UserMetricsChart'
import ContentMetricsChart from './ContentMetricsChart'
import EngagementMetricsChart from './EngagementMetricsChart'
import BlockchainMetricsChart from './BlockchainMetricsChart'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchDashboardData();
      setDashboardData(data?.dashboard);
    };
    getData();
  }, []);

  if (!dashboardData) return (
    <div className="flex justify-center items-center h-screen text-3xl font-bold text-gray-800">
      Loading...
    </div>

  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">Admin Dashboard</h2>

        <div id="user-metrics" className="mt-12 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">User Metrics</h3>
          <UserMetricsChart data={dashboardData.userMetrics.daily.chartData} />
        </div>

        <div id="content-metrics" className="mt-12 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Content Metrics</h3>
          <ContentMetricsChart data={dashboardData.contentMetrics.daily.chartData} />
        </div>

        <div className="flex flex-col gap-8 mt-12 md:flex-row md:space-x-4">
          <div
            id="engagement-metrics"
            className="bg-white shadow-md rounded-lg p-6 flex-shrink-0 w-full md:w-1/2 lg:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Engagement Metrics
            </h3>
            <div className="flex justify-center items-center h-[300px] md:h-[400px]">
              <EngagementMetricsChart
                likes={dashboardData.engagementMetrics.daily.totalLikes}
                messages={dashboardData.engagementMetrics.daily.totalMessage}
              />
            </div>
          </div>

          <div
            id="blockchain-metrics"
            className="bg-white shadow-md rounded-lg p-6 flex-shrink-0 w-full md:w-1/2 lg:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Blockchain Metrics
            </h3>
            <div className="flex justify-center items-center h-[300px] md:h-[400px]">
              <BlockchainMetricsChart
                solana={dashboardData.blockchainMetrics.daily.totalWalletOnSolana}
                polygon={dashboardData.blockchainMetrics.daily.totalWalletOnPolygon}
                ethereum={dashboardData.blockchainMetrics.daily.totalWalletOnEthereum}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Dashboard;
