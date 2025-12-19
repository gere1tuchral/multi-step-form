import React from "react";
import { motion } from "framer-motion";
import { animationVariant } from "../constants/animation-variant";
export const Success = () => {
  return (
    <motion.div
      initial="enter"
      animate="active"
      exit="exit"
      transition={{ duration: 0.5 }}
      variants={animationVariant}
    >
      <img src="logo.png" alt="" />
      <div>You're All Set 🔥</div>
      <div>We have received your submission. Thank you!</div>
    </motion.div>
  );
};
