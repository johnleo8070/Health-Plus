import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faCalendarCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../Styles/Faq.css";

const FaqItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`faq-item ${isOpen ? "open" : ""}`}>
            <div className="faq-question" onClick={onClick}>
                <span>{question}</span>
                <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} className="faq-icon" />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="faq-answer-wrapper"
                    >
                        <div className="faq-answer">
                            <p>{answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FaqSection = ({ title, faqs, showBooking, bookingContent }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="faq-category-section">
            <h3 className="faq-category-title">{title}</h3>
            <div className="faq-items-container">
                {faqs.map((faq, index) => (
                    <FaqItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                ))}
            </div>
            {showBooking && (
                <div className="faq-booking-cta">
                    <div className="cta-text">
                        {bookingContent.text.map((t, i) => (
                            <p key={i}>{t}</p>
                        ))}
                        <ul className="cta-list">
                            {bookingContent.list.map((item, i) => (
                                <li key={i}>
                                    <FontAwesomeIcon icon={faChevronRight} className="cta-list-icon" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className="faq-book-btn" onClick={() => navigate("/appointment")}>
                        <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
                    </button>
                </div>
            )}
        </div>
    );
};

function Faq() {
    const generalFaqs = [
        {
            question: "What services does Albright Clinic offer?",
            answer: "Albright Clinic offers comprehensive mental health and behavioral services, including psychiatric evaluations, medication management, individual therapy, and behavioral health care for adolescents and adults in Richmond, Texas."
        },
        {
            question: "What conditions are treated at Albright Clinic?",
            answer: "Albright Clinic treats anxiety, depression, ADHD, bipolar disorder, PTSD, mood disorders, stress-related conditions, sleep disorders, and other behavioral and emotional health concerns."
        },
        {
            question: "Do you offer psychiatric evaluations in Richmond, Texas?",
            answer: "Yes. Albright Clinic provides comprehensive psychiatric evaluations in Richmond, TX to assess mental health symptoms, diagnose conditions, and develop personalized treatment plans."
        },
        {
            question: "Is medication management available at Albright Clinic?",
            answer: "Yes. We offer professional psychiatric medication management, including prescribing, monitoring, and adjusting medications to ensure safe and effective mental health treatment."
        },
        {
            question: "Do you provide therapy services?",
            answer: "Yes. Albright Clinic provides individual therapy sessions designed to help patients manage emotional challenges, develop coping skills, and improve overall mental well-being."
        },
        {
            question: "Do you treat both adults and adolescents?",
            answer: "Yes. Albright Clinic offers mental health services for both adults and adolescents, with age-appropriate care tailored to each patient’s emotional and developmental needs."
        },
        {
            question: "Is mental health treatment confidential?",
            answer: "Yes. All mental health and behavioral services at Albright Clinic are provided in a confidential and secure environment in accordance with healthcare privacy standards."
        },
        {
            question: "How do I schedule an appointment at Albright Clinic?",
            answer: "You can schedule an appointment by contacting Albright Clinic directly through our website or phone. Appointments are required for all services."
        },
        {
            question: "Do you accept new patients?",
            answer: "Yes. Albright Clinic is currently accepting new patients for mental health and behavioral health services in Richmond, Texas."
        },
        {
            question: "Is Albright Clinic a psychiatry clinic?",
            answer: "Yes. Albright Clinic is a mental health and behavioral health clinic providing psychiatric services, including evaluations and medication management, in Richmond, TX."
        },
        {
            question: "What should I expect during my first visit?",
            answer: "During your first visit, a licensed mental health professional will conduct a comprehensive evaluation, discuss your concerns, review your history, and recommend a personalized treatment plan."
        }
    ];

    const anxietyFaqs = [
        {
            question: "What is anxiety disorder?",
            answer: "Anxiety disorder is a mental health condition characterized by excessive worry, fear, or nervousness that interferes with daily activities, relationships, or work."
        },
        {
            question: "How do I know if I have anxiety?",
            answer: "Common signs of anxiety include constant worry, restlessness, racing thoughts, difficulty sleeping, muscle tension, and feeling overwhelmed without clear cause."
        },
        {
            question: "Can anxiety be treated without medication?",
            answer: "Yes. Anxiety can often be treated with therapy, lifestyle changes, and coping strategies. Medication may be recommended depending on symptom severity and individual needs."
        },
        {
            question: "Where can I get anxiety treatment in Richmond, Texas?",
            answer: "You can receive professional anxiety treatment at Albright Clinic in Richmond, TX through psychiatric evaluation, therapy, and personalized care plans."
        }
    ];

    const depressionFaqs = [
        {
            question: "What is depression?",
            answer: "Depression is a mental health condition that causes persistent sadness, loss of interest, low energy, and difficulty functioning in daily life."
        },
        {
            question: "What are common symptoms of depression?",
            answer: "Symptoms of depression include sadness, fatigue, loss of motivation, changes in sleep or appetite, difficulty concentrating, and feelings of hopelessness."
        },
        {
            question: "How is depression treated?",
            answer: "Depression is treated using therapy, medication management, or a combination of both, depending on the individual’s symptoms and clinical evaluation."
        },
        {
            question: "Can depression go away with treatment?",
            answer: "Yes. With proper mental health treatment, many people experience significant improvement in symptoms and regain emotional stability and quality of life."
        }
    ];

    const adhdFaqs = [
        {
            question: "What is ADHD?",
            answer: "ADHD, or Attention-Deficit/Hyperactivity Disorder, is a condition that affects focus, impulse control, organization, and attention."
        },
        {
            question: "What are symptoms of ADHD in adults and adolescents?",
            answer: "Symptoms include difficulty focusing, forgetfulness, restlessness, impulsive behavior, poor time management, and trouble completing tasks."
        },
        {
            question: "How is ADHD diagnosed?",
            answer: "ADHD is diagnosed through a comprehensive psychiatric evaluation that reviews symptoms, behavior patterns, and medical history."
        },
        {
            question: "Is ADHD treatable?",
            answer: "Yes. ADHD is highly treatable through medication management, behavioral strategies, therapy, and structured treatment plans."
        }
    ];

    const ptsdFaqs = [
        {
            question: "What is PTSD?",
            answer: "Post-Traumatic Stress Disorder (PTSD) is a mental health condition that develops after experiencing or witnessing a traumatic event."
        },
        {
            question: "What are common PTSD symptoms?",
            answer: "Symptoms of PTSD include flashbacks, nightmares, anxiety, emotional numbness, irritability, and avoidance of trauma-related triggers."
        },
        {
            question: "Can PTSD be treated successfully?",
            answer: "Yes. PTSD can be effectively treated with therapy, medication management, and trauma-informed mental health care."
        },
        {
            question: "Where can I get PTSD treatment in Richmond, TX?",
            answer: "Albright Clinic offers professional PTSD and trauma-related treatment services in Richmond, Texas in a confidential and supportive setting."
        }
    ];

    return (
        <div className="faq-section" id="faq">
            <div className="faq-title-content">
                <motion.h2
                    className="faq-main-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Frequently Asked Questions (FAQs)
                </motion.h2>
                <div className="faq-title-underline"></div>
            </div>

            <div className="faq-container">
                <FaqSection title="General FAQ" faqs={generalFaqs} />

                <FaqSection
                    title="Anxiety Treatment FAQs"
                    faqs={anxietyFaqs}
                    showBooking={true}
                    bookingContent={{
                        text: [
                            "Ready to feel calmer and more in control?",
                            "If anxiety is affecting your daily life, professional support can make a real difference."
                        ],
                        list: [
                            "Schedule an Anxiety Evaluation at Albright Clinic",
                            "Call or Book an Appointment Today",
                            "Get Personalized Anxiety Treatment in Richmond, TX"
                        ]
                    }}
                />

                <FaqSection
                    title="Depression Treatment FAQs"
                    faqs={depressionFaqs}
                    showBooking={true}
                    bookingContent={{
                        text: [
                            "You don’t have to face depression alone.",
                            "Support, understanding, and effective treatment are available."
                        ],
                        list: [
                            "Start Depression Treatment with a Mental Health Expert",
                            "Book a Confidential Consultation Today",
                            "Get Help for Depression at Albright Clinic"
                        ]
                    }}
                />

                <FaqSection
                    title="ADHD Treatment FAQs"
                    faqs={adhdFaqs}
                    showBooking={true}
                    bookingContent={{
                        text: [
                            "Struggling with focus, organization, or restlessness?",
                            "ADHD care can help you regain clarity and confidence."
                        ],
                        list: [
                            "Schedule an ADHD Assessment Today",
                            "Get Personalized ADHD Treatment Plans",
                            "Book an Appointment with an ADHD Specialist in Richmond, TX"
                        ]
                    }}
                />

                <FaqSection
                    title="PTSD & Trauma FAQs"
                    faqs={ptsdFaqs}
                    showBooking={true}
                    bookingContent={{
                        text: [
                            "Healing from trauma is possible with the right support.",
                            "Compassionate, trauma-informed care can help you move forward."
                        ],
                        list: [
                            "Get Professional PTSD Treatment Today",
                            "Schedule a Trauma-Focused Mental Health Consultation",
                            "Begin Your Healing Journey at Albright Clinic"
                        ]
                    }}
                />
            </div>
        </div>
    );
}

export default Faq;
