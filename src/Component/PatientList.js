import React, { useState } from "react";
import useFetch from "./useFetch";
import PatientInfo from "./PatientInfo";

export default function PatientList() {
  const patients = useFetch();
  const [selectedPatient, setSelectedPatient] = useState(null);

  // useEffect(() => {
  //   if (patients.length > 0 && patients[3]) {
  //     setSelectedPatient(patients[3]);
  //   }
  // }, [patients]);

  // console.log(patients, "home");

  return (
    <div>
      <h3>Patient List</h3>

      {/* Array of patients with their image, name and age*/}

      {patients.length > 0 ? (
        <div>
          <ul>
            {patients.map((patient) => (
              <li
                key={patient.id}
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
          <div style={{ flex: 2, paddingLeft: "20px" }}>
            <PatientInfo patient={selectedPatient} />
          </div>
        </div>
      ) : (
        <p>Loading patients...</p>
      )}
    </div>
  );
}
