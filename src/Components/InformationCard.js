import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

function InformationCard(props) {
  return (
    <motion.div
      className="info-cards"
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <span className="info-card-icon">
        <FontAwesomeIcon className="info-fa-icon" icon={props.icon} />
      </span>
      <p className="info-card-title">{props.title}</p>
      <p className="info-card-description">{props.description}</p>
    </motion.div>
  );
}

export default InformationCard;
