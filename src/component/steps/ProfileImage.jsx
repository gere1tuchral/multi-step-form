import React from "react";
import { Header } from "../layer/Header";
import { motion } from "framer-motion";
import { animationVariant } from "../constants/animation-variant";
export const ProfileImage = () => {
  return (
    <motion.div
      initial="enter"
      animate="active"
      exit="exit"
      variants={animationVariant}
      transition={{ duration: 0.5 }}
      style={{ background: "yellow" }}
      className="w-[400px]"
    >
      <Header />
      <div>Date of birth</div>
    </motion.div>
  );
};
