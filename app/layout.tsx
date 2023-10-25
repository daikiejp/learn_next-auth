import type { Metadata } from "next";
import Nav from "./(components)/Nav";
import "./globals.css";
import AuthProvider from "./(components)/AuthProvider";

export const metadata: Metadata = {
  title: "Learn - Next Auth",
  description: "Learn about Next Auth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="bg-gray-100">
          <Nav />
          <div className="m-2">{children}</div>
        </body>
      </AuthProvider>
    </html>
  );
}
