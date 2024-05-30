import React from "react";

export default function PatientList({ patients, setSelectedPatient }) {
  return (
    <div>
      <h3>Patient List</h3>

      {/* Array of patients with their image, name and age*/}

      {patients.length > 0 ? (
        <div>
          <ul>
            {patients.map((patient, index) => (
              <li
                key={index}
                onClick={() => setSelectedPatient(patient)}
                style={{ cursor: "pointer", marginBottom: "10px" }}
              >
                <div className="patient-image">
                  <img src={patient.profile_picture} alt={patient.name} />
                </div>
                <div>
                  <span>
                    <b>{patient.name}</b>
                  </span>
                  <br />
                  <span>
                    <small>{patient.age} years old</small>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading patients...</p>
      )}
    </div>
  );
}
