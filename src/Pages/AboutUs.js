import React from "react";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Reviews from "../Components/Reviews";
import Footer from "../Components/Footer";
import SEO from "../Components/SEO";

function AboutUs() {
    return (
        <div className="about-page">
            <SEO
                title="About Albright Clinic | Trusted Mental Health Clinic in Richmond, Texas"
                description="Learn about Albright Clinic, a leading mental health and behavioral services provider in Richmond, TX. Compassionate care, expert psychiatry, patient-focused treatment."
                type="website"
            />
            <Navbar />
            <About />
            <Reviews />
            <Footer />
        </div>
    );
}

export default AboutUs;
