import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import HomeContent from "../Components/HomeContent";
import Footer from "../Components/Footer";
import SEO from "../Components/SEO";

function Home() {
  return (
    <div className="home-section">
      <SEO
        title="Mental Health Clinic in Richmond, TX | Albright Clinic Psychiatry & Behavioral Care"
        description="Albright Clinic offers compassionate mental health and behavioral services in Richmond, Texas. Expert psychiatric care, therapy, and medication management. Book today."
        type="website"
      />
      <Navbar />
      <Hero />
      <HomeContent />
      <Footer />
    </div>
  );
}

export default Home;

