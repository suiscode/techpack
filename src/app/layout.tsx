import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "./context/Context";
import { AuthProdiver } from "./Providers";
import Header from "@/components/header/Header";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car rental",
  description: "Car rental website",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F7F7F7]`}>
        <AuthProdiver>
          <GlobalContextProvider>
            <Header />
            <main className="container ">
              <div className="flex items-start  justify-center min-h-screen">
                <div className="">{children}</div>
              </div>
            </main>
          </GlobalContextProvider>
        </AuthProdiver>
      </body>
    </html>
  );
}
