import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ContactInfo,
  PrivateInfo,
  ProfileImage,
  Success,
} from "@/component/steps";

const Home = () => {
  const [step, setStep] = useState(0);
  const handclick = () => {
    setStep(step + 1);
  };
  const handleprev = () => {
    setStep(step - 1);
  };
  const Container = [ContactInfo, PrivateInfo, ProfileImage, Success][step];
  return (
    <AnimatePresence mode="wait">
      <Container />
      {step !== 0 && (
        <button onClick={handleprev} className="w-[128px] h-11 text-black">
          Back
        </button>
      )}
      <button onClick={handclick}>Continue</button>
    </AnimatePresence>
  );
};
export default Home;
