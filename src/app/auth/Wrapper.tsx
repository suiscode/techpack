import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Wrapper({ children, label, backbutton, backurl }: any) {
  return (
    <div className="w-[400px] py-4 flex justify-center px-8">
      <div className="flex flex-col justify-center items-center gap-2 w-full text-primary">
        <h1 className="text-2xl font-bold mb-8">{label}</h1>
        {children}
      </div>
    </div>
  );
}

export default Wrapper;
