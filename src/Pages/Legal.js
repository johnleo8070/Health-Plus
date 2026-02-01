import React from "react";
import Navbar from "../Components/Navbar";
import LegalDocs from "../Components/LegalDocs";
import Footer from "../Components/Footer";

function Legal() {
  return (
    <div className="legal-page">
      <Navbar />
      <LegalDocs />
      <Footer />
    </div>
  );
}

export default Legal;
