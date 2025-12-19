import React from "react";
import { Input } from "../ui/Input";
import { Header } from "../layer/Header";
import { motion } from "framer-motion";
import { animationVariant } from "../constants/animation-variant";
export const PrivateInfo = () => {
  return (
    <motion.div
      initial="enter"
      animate="active"
      exit="exit"
      variants={animationVariant}
      transition={{ duration: 0.5 }}
      style={{ background: "green" }}
      className="w-[400px]"
    >
      <Header />
      <div>Email.com</div>
      <Input />
      <div>Phone number</div>
      <Input />
      <div>Password</div>
      <Input />
      <div>Confirm password</div>
      <Input />
    </motion.div>
  );
};
