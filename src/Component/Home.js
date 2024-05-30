import React from "react";
import PatientList from "./PatientList";
import DiagnosticHistory from "./DiagnosticHistory";
import PatientInfo from "./PatientInfo";

export default function Home() {
  return (
    <div className="patients">
      <div className="patient-list">
        <PatientList />
      </div>
      <div className="diagnosis-history">
        <DiagnosticHistory />
      </div>
      <div className="patient-info">
        <PatientInfo />
      </div>
    </div>
  );
}
