import "./globals.css";
import type { Metadata } from "next";
import StyledJsxRegistry from "./registry";

export const metadata: Metadata = {
  title: "Infind",
  description: "Find your favorite films and series",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2379039200983651"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
