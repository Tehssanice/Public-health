import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function DiagnosticHistory({ patient }) {
  const chartRef = useRef(null);

  // const history = patient.diagnosis_history;
  const history = patient ? patient.diagnosis_history : null;

  useEffect(() => {
    if (!patient || !history || history.length === 0) {
      return;
    }

    const ctx = chartRef.current.getContext("2d");

    // Clear the previous chart instance if it exists
    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: history.map((d) => `${d.month} ${d.year}`),
        datasets: [
          {
            label: "Systolic",
            data: history.map((d) => d.blood_pressure.systolic.value),
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "Diastolic",
            data: history.map((d) => d.blood_pressure.diastolic.value),
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    // Store the chart instance for later destruction
    chartRef.current.chart = chart;

    return () => {
      // Cleanup the chart instance on component unmount
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
    };
  }, [patient, history]);

  if (!patient) {
    return <p>Select a patient to see their diagnostic list.</p>;
  }

  return (
    <div className="diagnosis-history">
      <div class="header">
        <h2>Diagnosis History</h2>
        <span class="time-frame">Last 6 months</span>
      </div>

      <div id="bp-chart" className="chart">
        <canvas ref={chartRef}></canvas>
      </div>
      {history && history.length > 3 && (
        <div className="stats">
          <div className="stat one">
            <div className="image-holder">
              <img src="images/respiratory rate.svg" alt="Respiratory Rate" />
            </div>
            <small>Respiratory Rate</small>
            <h3>{history[3].respiratory_rate.value} bpm</h3>
            <small>{history[3].respiratory_rate.levels}</small>
          </div>
          <div className="stat two">
            <div className="image-holder">
              <img src="images/temperature.svg" alt="Temperature" />
            </div>
            <small>Temperature</small>
            <h3>{history[3].temperature.value}°F</h3>
            <small>{history[3].temperature.levels}</small>
          </div>
          <div className="stat three">
            <div className="image-holder">
              <img src="images/HeartBPM.svg" alt="Heart Rate" />
            </div>
            <small>Heart Rate</small>
            <h3>{history[3].heart_rate.value} bpm</h3>
            <small>{history[3].heart_rate.levels}</small>
          </div>
        </div>
      )}
    </div>
  );
}
