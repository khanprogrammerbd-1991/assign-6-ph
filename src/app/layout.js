import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContextProvider from "@/context/PlanContext";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FitLog",
  description: "A simple workout tracker for your fitness journey.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
      <ContextProvider>
    <Navbar />

    {children}

    <Toaster
        position="top-right"
        toastOptions={{
            style: {
                background: "#333",
                color: "#fff",
            },
            success: {
                iconTheme: {
                    primary: "#4ade80",
                    secondary: "#fff",
                },
            },
        }}
    />
</ContextProvider>

        <Footer />
  


      </body>
    </html>
  );
}
        
        
        
        
