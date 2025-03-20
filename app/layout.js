import { Toaster } from "react-hot-toast";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Testing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Toaster/>
        <div className="w-full px-2 flex justify-center">
        {children}
        </div>
      </body>
    </html>
  );
}
