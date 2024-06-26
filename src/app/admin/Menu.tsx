"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const links = [
  { label: "Carlist", link: "carlist" },
  { label: "Orders", link: "orders" },
];

function Menu() {
  const onClick = () => {
    signOut();
  };

  const pathname = usePathname().split("/").pop();
  return (
    <div className="h-[40px] flex items-center px-10 gap-4 text-black border-b border-white/90 w-full justify-between">
      <ul>
        {links.map((item) => (
          <Button key={item.label} variant="link">
            <Link
              className={`${
                pathname === item.link && "underline"
              } text-black`}
              href={`/admin/${item.link}`}
            >
              {item.label}
            </Link>
          </Button>
        ))}
      </ul>
      <h1 onClick={onClick} className="cursor-pointer">
        Log out
      </h1>
    </div>
  );
}

export default Menu;
