import React from "react";
import InformationCard from "../Components/InformationCard";
import { faBrain, faPrescriptionBottle } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";
import SEO from "../Components/SEO";

function Psychiatry() {
    return (
        <div className="info-section">
            <SEO
                title="Psychiatry Clinic in Richmond, TX | Albright Clinic"
                description="Professional psychiatric evaluations and medication management in Richmond, TX. Albright Clinic provides trusted mental health and behavioral care."
                type="website"
            />
            <div className="info-title-content">
                <h3 className="info-title">
                    <span>Psychiatric Services</span>
                </h3>
                <p className="info-description">
                    Albright Clinic provides comprehensive psychiatric evaluations and medication management.
                    Our goal is to help you achieve mental clarity and emotional stability through personalized care.
                </p>
            </div>

            <div className="info-cards-content">
                <InformationCard
                    title="Psychiatric Evaluations"
                    description="Comprehensive psychiatric assessments to accurately diagnose mental health
            conditions and guide effective treatment planning. Our evaluations include
            thorough clinical interviews, symptom assessment, and personalized
            recommendations for your mental wellness journey."
                    icon={faBrain}
                />

                <InformationCard
                    title="Medication Management"
                    description="Professional psychiatric medication management, including prescribing,
            monitoring, and adjusting medications to ensure safe and effective outcomes.
            Our team works closely with you to find the right treatment plan that
            supports your mental health goals."
                    icon={faPrescriptionBottle}
                />
            </div>
        </div>
    );
}

export default Psychiatry;
