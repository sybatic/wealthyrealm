import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "WealthRim Group of Companies",
  description: "Food Delivery, Fabric Supply, and Real Estate across Africa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#FFFCF8] text-zinc-900 overflow-x-hidden">
        <Nav />
        <main className="pt-[72px]">{children}</main>
      </body>
    </html>
  );
}
