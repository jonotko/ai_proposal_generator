import React from "react";
import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex h-screen items-center justify-center p-5">
      <SignUp />
    </div>
  );
};

export default Page;
