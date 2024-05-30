import React from "react";

export default function LabResults({ patient }) {
  if (!patient) {
    return <p>Select a patient to see their diagnostic list.</p>;
  }

  const results = patient.lab_results;

  return (
    <div className="lab-results">
      <h3>Lab Results</h3>
      <table>
        <thead>
          <tr>
            <th>Result</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result}</td>
              <td>
                <img src="images/download.png" alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
