import React from "react";
import { Header } from "../layer/Header";
import { Input } from "../ui/Input";
import { motion } from "framer-motion";
import { animationVariant } from "../constants/animation-variant";
import { Label } from "../ui/Label";

export const ContactInfo = () => {
  return (
    <motion.div
      initial="enter"
      animate="active"
      exit="exit"
      variants={animationVariant}
      transition={{ duration: 0.5 }}
      style={{ background: "red" }}
      className="w-[400px]"
    >
      <Header />

      <Input firstName={"First name"} PlaceholderName={"Your first name"} />
      <div>Last name*</div>
      <Input />
      <div>Username*</div>
      <Input />
    </motion.div>
  );
};
