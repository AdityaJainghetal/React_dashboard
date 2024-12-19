import React, { useState } from "react";
import Chart from "react-apexcharts";

const Dashboard = () => {
  // Bar Chart
  const barChartOptions = {
    chart: {
      id: "bar-chart",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
  };
  const barChartSeries = [
    {
      name: "Revenue",
      data: [30, 40, 45, 50, 49, 60],
    },
  ];

  // Line Chart
  const lineChartOptions = {
    chart: {
      id: "line-chart",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
  };
  const lineChartSeries = [
    {
      name: "Profit",
      data: [10, 20, 15, 30, 25, 40],
    },
  ];

  // Pie Chart
  const pieChartOptions = {
    labels: ["Product A", "Product B", "Product C"],
  };
  const pieChartSeries = [44, 55, 13];

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {/* Bar Chart */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h2>Bar Chart</h2>
          <Chart
            options={barChartOptions}
            series={barChartSeries}
            type="bar"
            width="100%"
          />
        </div>

        {/* Line Chart */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h2>Line Chart</h2>
          <Chart
            options={lineChartOptions}
            series={lineChartSeries}
            type="line"
            width="100%"
          />
        </div>

        {/* Pie Chart */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h2>Pie Chart</h2>
          <Chart
            options={pieChartOptions}
            series={pieChartSeries}
            type="pie"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
