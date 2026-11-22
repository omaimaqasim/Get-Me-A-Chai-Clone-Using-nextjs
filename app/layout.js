import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "get me a chai app - fund your projects with chai",
  description: "this website is crowdfunding platform for creators.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-black">

        {/* Background */}
        <div className="fixed inset-0 -z-10 bg-black">

          {/* Grid */}
          <div
            className="
              absolute inset-0
              bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
              bg-[size:14px_24px]
            "
          />

          {/* Glow */}
          <div
            className="
              absolute
              left-100
              -top-50
              -translate-x-1/2
              h-[700px]
              w-[700px]
              rounded-full
              bg-[radial-gradient(circle_400px_at_50%_50%,#fbfbfb36,transparent)]
            "
          />

        </div>

        {/* Website content */}
        <div className="relative z-10 flex min-h-screen flex-col">

          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />

        </div>

      </body>
    </html>
  );
}