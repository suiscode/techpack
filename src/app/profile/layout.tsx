import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { auth } from "../../../auth";
import { userFetch } from "@/lib/fetch";
import { UserInterface } from "@/lib/interface";
import LayoutProfile from "@/components/profile/LayoutProfile";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My profile ",
  description: "Your cv section",
  icons: "/favicon.ico",
};

export default async function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const user = await userFetch(session?.user.id);
  return (
    <div className="w-[1440px] flex gap-8 ">
      <LayoutProfile user={user as UserInterface} />
      <div className="flex items-start py-4 w-full justify-center min-h-screen">
        {children}
      </div>
    </div>
  );
}
