import React from "react";
import { Header } from "../layer/Header";
import { Footer } from "../layer/Footer";
import { Input } from "../ui/Input";
export const ContactInfo = () => {
  return (
    <div className="">
      <div>First name*</div>
      <Input />
      <div>Last name*</div>
      <Input />
      <div>Username*</div>
      <Input />
    </div>
  );
};
