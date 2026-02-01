import React from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Albright Clinic
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          Welcome to Albright Clinic, your trusted mental health and behavioral
          services provider in Richmond, Texas. Our mission is to provide accessible
          and compassionate psychiatric care to adolescents and adults seeking expert
          mental health treatment. By using our services, you agree to the terms outlined
          in our Privacy Policy and Terms of Service.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          Your privacy and confidentiality are paramount to us. Our Privacy Policy outlines
          how we collect, use, and protect your personal and medical information in compliance
          with HIPAA regulations. We ensure secure data handling, and you can trust that your
          mental health information is treated with the utmost confidentiality and professional
          care.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          When using Albright Clinic services, you agree to our Terms of Service. This
          includes guidelines for scheduling appointments, interacting with mental health
          professionals, and the responsibilities of both parties. It's essential to understand
          these terms to ensure a smooth and effective treatment experience for all patients.
        </p>

        <p className="legal-title">Mental Health Services</p>
        <p className="legal-description">
          Albright Clinic provides comprehensive psychiatric evaluations, medication management,
          individual therapy, and behavioral health services. Our licensed mental health
          professionals offer evidence-based treatment for depression, anxiety, bipolar disorder,
          ADHD, PTSD, and other mental health conditions. Services are provided through
          in-person appointments at our Richmond, Texas location.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
          Albright Clinic is designed to make mental healthcare accessible. You can schedule
          an appointment by calling +1 (713) 624-0727 or emailing bookings@albrightclinic.com.
          Our mental health professionals will conduct a comprehensive evaluation and develop
          a personalized treatment plan tailored to your needs. For mental health emergencies,
          please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2024 Albright Clinic. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
