import type { Metadata } from "next";
import { Poppins, Roboto, Montserrat, Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar/Navbar";
import MobileNavDrawer from "@/components/common/Navbar/MobileNavDrawer";
import Footer from "@/components/common/Footer/Footer";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Vidya Interna Hub business",
  description: "Business Portfolio for Vidya Interna Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} ${montserrat.variable}`}
    >
      <body>
        <div className="sticky top-0 z-50">
          <Navbar />
          <MobileNavDrawer />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
