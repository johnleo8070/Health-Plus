import React from "react";
import InformationCard from "./InformationCard";
import { faBrain, faPrescriptionBottle, faUserDoctor, faHeartPulse, faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "../Styles/Info.css";

function Info() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="info-section" id="services">
      <motion.div
        className="info-title-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h3
          className="info-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span>Mental Health & Behavioral Services We Offer</span>
        </motion.h3>
        <p className="info-description">
          Albright Clinic provides comprehensive psychiatric and behavioral healthcare
          services in Richmond, Texas. Our experienced mental health professionals are
          committed to addressing emotional, psychological, and behavioral challenges with
          empathy and clinical excellence.
        </p>
      </motion.div>

      <motion.div
        className="info-cards-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={cardVariants}>
          <InformationCard
            title="Psychiatric Evaluations"
            description="Comprehensive psychiatric assessments to accurately diagnose mental health
              conditions and guide effective treatment planning. Our evaluations include
              thorough clinical interviews, symptom assessment, and personalized
              recommendations for your mental wellness journey."
            icon={faBrain}
          />
        </motion.div>

        <motion.div variants={cardVariants}>
          <InformationCard
            title="Medication Management"
            description="Professional psychiatric medication management, including prescribing,
              monitoring, and adjusting medications to ensure safe and effective outcomes.
              Our team works closely with you to find the right treatment plan that
              supports your mental health goals."
            icon={faPrescriptionBottle}
          />
        </motion.div>

        <motion.div variants={cardVariants}>
          <InformationCard
            title="Individual Therapy"
            description="Personalized one-on-one therapy sessions focused on emotional healing,
              coping skills, and mental resilience. Our therapeutic approach is
              evidence-based and tailored to your unique needs, helping you achieve
              lasting emotional well-being and improved quality of life."
            icon={faUserDoctor}
          />
        </motion.div>

        <motion.div variants={cardVariants}>
          <InformationCard
            title="Behavioral Health"
            description="Evidence-based behavioral interventions to modify harmful behaviors and
              reinforce positive ones. Our specialists work with you to understand
              behavioral patterns and implement practical strategies for positive change
              in your daily life."
            icon={faHeartPulse}
          />
        </motion.div>

        <motion.div variants={cardVariants}>
          <InformationCard
            title="Mental Health Treatment"
            description="Comprehensive treatment plans addressing a broad spectrum of mental health
              disorders including depression, anxiety, and PTSD. We integrate psychotherapy,
              lifestyle modifications, and medical management to support holistic recovery."
            icon={faNotesMedical}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Info;
