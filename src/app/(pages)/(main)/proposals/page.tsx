import React from "react";
import { PlusSquareIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl py-4">
      <Button asChild className="mx-auto flex w-fit">
        <Link href="/proposalEditor">
          <PlusSquareIcon size={24} />
          New Proposal
        </Link>
      </Button>
    </div>
  );
};

export default Page;
