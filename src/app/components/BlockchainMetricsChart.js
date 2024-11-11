import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BlockchainMetricsChart = ({ solana, polygon, ethereum }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Solana', 'Polygon', 'Ethereum'],
        datasets: [
          {
            data: [solana, polygon, ethereum],
            backgroundColor: ['#FFD700', '#32CD32', '#4169E1'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          tooltip: { enabled: true },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [solana, polygon, ethereum]);

  return <canvas ref={chartRef}></canvas>;
};

export default BlockchainMetricsChart;
