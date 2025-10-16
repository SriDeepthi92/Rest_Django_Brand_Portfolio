// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "Tewachi Rugs",
  description: "Luxury handmade rugs crafted with timeless beauty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}