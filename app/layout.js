import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elite Auto Detailing | Premium Mobile Valeting",
  description:
    "Premium mobile car detailing in Stockport. Full valets, ceramic coatings, interior deep cleans and paint correction.",
  keywords:
    "car detailing stockport, mobile valeting, ceramic coating uk, elite auto detailing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        
        {/* Global background system */}
        <div className="fixed inset-0 -z-10">
          
          {/* main gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />

          {/* soft glow blobs */}
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/10 blur-[140px] rounded-full" />
          <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />
        </div>

        {/* content */}
        <main className="min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}