import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ReduxProvider } from "./components/redux/provider";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       
       
        <ReduxProvider >
        <body className={inter.className}>
          <div className='flex justify-between flex-col w-full'>
            <Navbar/>
            {children}

            
          </div>
       </body>
       </ReduxProvider>
    </html>
  );
}
