import "./globals.css";
import { Ubuntu } from "next/font/google";

const inter = Ubuntu({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata = {
  title: "m1guelsb",
  description: "Miguel S. Barbosa portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
