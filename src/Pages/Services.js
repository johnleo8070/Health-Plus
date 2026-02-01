import React from "react";
import Navbar from "../Components/Navbar";
import Info from "../Components/Info";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
import SEO from "../Components/SEO";

function Services() {
    return (
        <div className="services-page">
            <SEO
                title="Mental Health & Behavioral Services in Richmond, TX | Albright Clinic"
                description="Explore psychiatric evaluations, therapy, medication management, and behavioral health services at Albright Clinic in Richmond, Texas. Personalized mental healthcare."
                type="website"
            />
            <Navbar />
            <Info />
            <Faq />
            <Footer />
        </div>
    );
}

export default Services;
