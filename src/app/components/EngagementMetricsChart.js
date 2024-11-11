import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const EngagementMetricsChart = ({ likes, messages }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: 'pie',
      data: {
        labels: ['Likes', 'Messages'],
        datasets: [
          {
            data: [likes, messages],
            backgroundColor: ['#36A2EB', '#FF6384'],
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
  }, [likes, messages]);

  return <canvas ref={chartRef}></canvas>;
};

export default EngagementMetricsChart;
