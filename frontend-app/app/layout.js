// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "Tivachi Rugs",
  description: "Luxury handmade rugs crafted with timeless beauty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-900 bg-white">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
