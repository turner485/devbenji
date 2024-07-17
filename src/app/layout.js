// layout.js (Server Component)
import { Inter } from "next/font/google";
import "./globals.css";
import '/lib/fontawesome';
import RootLayoutClient from './RootLayoutClient'; // Import the client-side logic

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "//devbenji...",
  description: "Created by devbenji",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ids8ffr.css" />
      </head>
      <body className={inter.className}>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
