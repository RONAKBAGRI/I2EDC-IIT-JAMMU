import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "I2EDC IIT Jammu",
  description: "Innovation and Entrepreneurship Development Center at IIT Jammu",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
