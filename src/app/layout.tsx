import type { Metadata } from "next";
import "./globals.css";
import { Inter} from "next/font/google"

const inter = Inter({subsets: ["latin"]});


export const metadata: Metadata = {
  title: "PMS - Paradise Managment System",
  description: "reated by devARcoder - Abdur Razzaq",
  manifest: "/manifest.json",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
