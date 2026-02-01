import React from "react";
import Navbar from "../Components/Navbar";
import AppointmentForm from "../Components/AppointmentForm";
import Footer from "../Components/Footer";
import SEO from "../Components/SEO";

function Appointment() {
  return (
    <div className="appointment-page">
      <SEO
        title="Book a Mental Health Appointment in Richmond, TX | Albright Clinic"
        description="Schedule your mental health appointment with Albright Clinic in Richmond, TX. Expert psychiatric care, therapy, and behavioral health services."
        type="website"
      />
      <Navbar />
      <AppointmentForm />
      <Footer />
    </div>
  );
}

export default Appointment;

