import "./globals.css";
import Navbar from "./components/Navbar";

import { ReduxProvider } from "./components/redux/provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body>
          <div className="flex justify-between flex-col w-full">
            <Navbar />
            {children}
          </div>
        </body>
      </ReduxProvider>
    </html>
  );
}
