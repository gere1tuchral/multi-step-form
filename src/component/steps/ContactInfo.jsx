import React from "react";
import { Header } from "../layer/Header";

import { Input } from "../ui/Input";
export const ContactInfo = () => {
  return (
    <div className="">
      <Header />
      <div>First name*</div>
      <Input />
      <div>Last name*</div>
      <Input />
      <div>Username*</div>
      <Input />
    </div>
  );
};
