import React from "react";
import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex h-screen items-center justify-center p-5">
      <SignIn />
    </div>
  );
};

export default Page;
