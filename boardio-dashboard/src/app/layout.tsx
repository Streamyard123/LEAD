import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boardio.ai — Marketing Dashboard",
  description: "Powerful marketing customer journey dashboard with interactive analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans font-light antialiased">
        {children}
      </body>
    </html>
  );
}
