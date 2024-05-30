import React from "react";

export default function DiagnosticList({ patient }) {
  if (!patient) {
    return <p>Select a patient to see their diagnostic list.</p>;
  }

  const diagnosis = patient.diagnostic_list;

  return (
    <div className="diagnostic-list">
      <h3>Diagnostic List</h3>

      {diagnosis.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnosis.map((diagnosis, index) => (
              <tr key={index}>
                <td>{diagnosis.name}</td>
                <td>{diagnosis.description}</td>
                <td>{diagnosis.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Diagnostic list loading ...</p>
      )}
    </div>
  );
}
