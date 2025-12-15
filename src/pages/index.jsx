import { useState } from "react";
import { Header } from "@/component/layer/Header";
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
  const Component = [ContactInfo, PrivateInfo, ProfileImage, Success][step];
  return (
    <div className="flex flex-col  items-center justify-center bg-gray-100 min-h-screen">
      <div className="w-[480px] bg-white p-8">
        <Header />
        <div>
          <Component />
          <button onClick={handleprev}>Back</button>
          <button onClick={handclick}>Continue</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
