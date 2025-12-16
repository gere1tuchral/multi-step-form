import React from "react";
import { Input } from "../ui/Input";
import { Header } from "../layer/Header";

export const PrivateInfo = () => {
  return (
    <div>
      <Header />
      <div>Email.com</div>
      <Input />
      <div>Phone number</div>
      <Input />
      <div>Password</div>
      <Input />
      <div>Confirm password</div>
      <Input />
    </div>
  );
};
