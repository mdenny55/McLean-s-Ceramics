import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata = {
  title: "McLean's Ceramics",
  description: "Showcasing handmade pottery and ceramics by McLean",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen text-gray-900" style={{backgroundColor: '#8B8A8A'}}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
