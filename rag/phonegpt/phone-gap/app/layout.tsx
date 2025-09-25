import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "phoneGPT",
  description: "An AI Chatbot that demonstrates the basic cocepts of RAG",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
