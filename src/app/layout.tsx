import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Reservation App",
  description: "Next.js + Nest.js Reservation Demo",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
