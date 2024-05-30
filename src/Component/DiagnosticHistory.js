import React from "react";
import useFetch from "./useFetch";

export default function DiagnosticHistory() {
  const patients = useFetch();
  // console.log(patients[0].diagnosis_history[0].heart_rate);

  return (
    <div>
      <h3>Diagnosis History</h3>

      {patients.length > 0 ? (
        <div>
          {patients.map((patient) => (
            <div>
              <h3>{patient.diagnosis_history.month}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p> History Loading ....</p>
      )}
    </div>
  );
}
