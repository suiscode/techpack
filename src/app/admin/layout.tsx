import type { Metadata } from "next";
import Menu from "./Menu";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      <Toaster />

      <Menu />

      {children}
    </div>
  );
}