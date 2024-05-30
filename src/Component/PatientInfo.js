import React from "react";

export default function PatientInfo({ patient }) {
  if (!patient) {
    return <p>Select a patient to see their information</p>;
  }

  return (
    <div>
      <h3>Patient Information</h3>
      <div className="patient-image">
        <img src={patient.profile_picture} alt={patient.name} />
      </div>
      <div>
        <p>
          <b>{patient.name}</b>
        </p>
        <p>
          <b>Age:</b> {patient.age}
        </p>
        <p>
          <b>Date of Birth:</b> {patient.date_of_birth}
        </p>
        <p>
          <b>Gender:</b> {patient.gender}
        </p>
        <p>
          <b>Phone Number:</b> {patient.phone_number}
        </p>
        <p>
          <b>Emergency Contact:</b> {patient.emergency_contact}
        </p>
        <p>
          <b>Insurance:</b> {patient.insurance_type}
        </p>
      </div>
    </div>
  );
}
