import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";

export const metadata: Metadata = {
  title: "Social Media Admin Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar /> 
          <main className="flex-1 p-6 bg-gray-100 min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
