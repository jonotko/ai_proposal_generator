"use client";
import React from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between gap-3 p-4">
        <Link href="/proposals" className="flex items-center gap-3">
          <p>Proposals</p>
        </Link>
        <UserButton
          appearance={{
            elements: {
              avatarBox: {
                width: 40,
                height: 40,
              },
            },
          }}
        />
      </nav>
    </div>
  );
};

export default Navbar;
