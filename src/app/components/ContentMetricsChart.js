import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ContentMetricsChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: data.map(item => 
          new Date(item.timestamp).toLocaleString('en-US', {
            month: 'short', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit'
          })
        ),
        datasets: [
          {
            label: 'Views',
            data: data.map(item => item.count),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true, position: 'top' },
          tooltip: { enabled: true },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Date & Time',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Count',
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
};

export default ContentMetricsChart;
