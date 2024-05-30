import React, { useState, useEffect } from "react";
import PatientList from "./PatientList";
import DiagnosticHistory from "./DiagnosticHistory";
import PatientInfo from "./PatientInfo";
import useFetch from "./useFetch";
import DiagnosticList from "./DiagnosticList";
import LabResults from "./LabResults";

export default function Home() {
  const patients = useFetch();
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    if (patients.length > 0 && patients[3]) {
      setSelectedPatient(patients[3]);
    }
  }, [patients]);

  return (
    <div className="patients">
      <div className="patient-list">
        <PatientList patients={patients} setSelectedPatient={setSelectedPatient} />
      </div>
      <div className="diagnosis-history">
        <DiagnosticHistory patient={selectedPatient} />
        <DiagnosticList patient={selectedPatient} />
      </div>
      <div className="patient-info">
        <PatientInfo patient={selectedPatient} />
        <LabResults patient={selectedPatient} />
      </div>
    </div>
  );
}
