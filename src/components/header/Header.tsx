import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-screen bg-secondary border-b py-4 text-primary flex items-center justify-center">
      <div className="w-[1440px] flex  justify-between">
        <Link href='/'>Techpack</Link>
        <Link href="/auth/signin">Sign in</Link>
      </div>
    </div>
  );
};

export default Header;
