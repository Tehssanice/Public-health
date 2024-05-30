import React from "react";

export default function PatientInfo({ patient }) {
  if (!patient) {
    return <p>Select a patient to see their information</p>;
  }

  return (
    <div className="patient-details">
      <h3>Patient Information</h3>
      <div className="profile-image">
        <img src={patient.profile_picture} alt={patient.name} />
      </div>
      <div>
        <h3>{patient.name}</h3>

        <div class="d-flex">
          <img src="images/calender.png" alt="" />
          <p id="patient-dob">Date Of Birth: {patient.date_of_birth}</p>
        </div>

        <div class="d-flex">
          <img src="images/gender.png" alt="" />
          <p id="patient-gender">Gender: {patient.gender}</p>
        </div>

        <div class="d-flex">
          <img src="images/phone.png" alt="" />
          <p id="patient-contact">Contact Info: {patient.phone_number}</p>
        </div>

        <div class="d-flex">
          <img src="images/phone.png" alt="" />
          <p id="patient-emergency">Emergency Contacts: {patient.emergency_contact}</p>
        </div>

        <div class="d-flex">
          <img src="images/insurance.png" alt="" />
          <p id="patient-insurance">Insurance Provider: {patient.insurance_type}</p>
        </div>

        <button>Show All Information</button>
      </div>
    </div>
  );
}
