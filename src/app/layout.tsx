import "./globals.css";
import type { Metadata } from "next";
import StyledJsxRegistry from "./registry";

export const metadata: Metadata = {
  title: "Infind",
  description: "Find your favorite films and books",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
