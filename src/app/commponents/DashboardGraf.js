"use client";
import Chart from "chart.js/auto";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const DashboardGraf = () => {
  const chartRef = useRef(null);
  const todos = useSelector((state) => state.Todo.todo);
  const filterhigh = todos.filter((todo) => {
    if (todo.Priority === "High") {
      return true;
    }
  });
  const filterMedium = todos.filter((todo) => {
    if (todo.Priority === "Medium") {
      return true;
    }
  });
  const filterLow = todos.filter((todo) => {
    if (todo.Priority === "Low") {
      return true;
    }
  });
  const filterCritical = todos.filter((todo) => {
    if (todo.Priority === "Critical") {
      return true;
    }
  });
  const filterNormal = todos.filter((todo) => {
    if (todo.Priority === "Normal") {
      return true;
    }
  });
  const filterEmergency = todos.filter((todo) => {
    if (todo.Priority === "Emergency") {
      return true;
    }
  });
  const filterASAP = todos.filter((todo) => {
    if (todo.Priority === "ASAP") {
      return true;
    }
  });
  const filterDeferred = todos.filter((todo) => {
    if (todo.Priority === "Deferred") {
      return true;
    }
  });

  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "High",
          "Medium",
          "Low",
          "Critical",
          "Normal",
          "Emergency",
          "ASAP",
          "Deferred",
        ],
        datasets: [
          {
            label: " Task Master ",
            data: [
              filterhigh.length,
              filterMedium.length,
              filterLow.length,
              filterCritical.length,
              filterNormal.length,
              filterEmergency.length,
              filterASAP.length,
              filterDeferred.length,
            ],
            borderWidth: 1,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [
    filterhigh.length,
    filterMedium.length,
    filterLow.length,
    filterCritical.length,
    filterNormal.length,
    filterEmergency.length,
    filterASAP.length,
    filterDeferred.length,
  ]);

  return (
    <div className="w-[100%] h-[450px]  flex justify-around items-center mt-14 p-4 xl:p-0 lg:p-0 md:p-0 sm:p-0 overflow-hidden">
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default DashboardGraf;
