import type { Metadata } from "next";
import { Poppins, Roboto, Montserrat } from "next/font/google";
import Navbar from "@/components/common/Navbar/Navbar";
import MobileNavDrawer from "@/components/common/Navbar/MobileNavDrawer";
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
        <div className="sticky top-0">
          <Navbar />
          <MobileNavDrawer />
        </div>
        {children}
      </body>
    </html>
  );
}
