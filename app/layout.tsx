import "./globals.css";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppWidget from "../components/WhatsAppWidget";

export const metadata = {
  title: "Lean Consulting",
  description: "Professional Lean & Productivity Consulting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-lightBg text-dark">
        <TopBar />
        <Navbar />

        <main>{children}</main>

        <Footer />

        <WhatsAppWidget />
      </body>
    </html>
  );
}