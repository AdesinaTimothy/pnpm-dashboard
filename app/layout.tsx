
import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import AppSideBar from "@/Components/AppSideBar";
import AppMobileSideBar from "@/Components/AppMobileSideBar";



const publicSans = Public_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-public-sans',
  subsets: ["latin"]
});

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
    <html lang="en">
      <body
        className={`${publicSans.variable} antialiased`}
      >
        <div className="flex h-screen">
          <div className="hidden md:block">
            <AppSideBar />
          </div>
          <main className="flex-1 overflow-auto pb-20 bg-[#f8f4f0]">
          <div className="px-4 lg:px-8">
            {children}
          </div>

          <div className="block  md:hidden mt-3 px-4 lg:px-8">
            <AppMobileSideBar />
          </div>
        </main>

        </div>


        
      </body>
    </html>
  );
}
