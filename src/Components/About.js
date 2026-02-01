import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import { motion } from "framer-motion";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <motion.div
        className="about-image-content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </motion.div>

      <motion.div
        className="about-text-content"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h3
          className="about-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span>About Albright Clinic</span>
        </motion.h3>
        <p className="about-description">
          Albright Clinic is a patient-centered mental health clinic in Richmond, Texas,
          specializing in psychiatric evaluations, medication management, and behavioral
          health services. Our experienced mental health professionals are committed to
          addressing emotional, psychological, and behavioral challenges with empathy and
          clinical excellence. We believe mental wellness is essential to overall health.
        </p>

        <h4 className="about-text-title">Our Approach to Care</h4>

        <SolutionStep
          title="Comprehensive Evaluation"
          description="We begin with thorough psychiatric assessments to understand your unique mental health needs, symptoms, and goals for treatment."
        />

        <SolutionStep
          title="Personalized Treatment Plan"
          description="Our team develops customized treatment plans combining therapy, medication management, and behavioral interventions tailored to your specific situation."
        />

        <SolutionStep
          title="Ongoing Support & Wellness"
          description="We provide continuous care and monitoring to ensure your treatment is effective, making adjustments as needed to support your long-term mental wellness."
        />
      </motion.div>
    </div>
  );
}

export default About;
