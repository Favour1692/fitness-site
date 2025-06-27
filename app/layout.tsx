import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { sourceSans } from "@/fonts";

interface LayoutProp {
  children: ReactNode;
}
const RootLayout = ({ children }: LayoutProp) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sourceSans.className} antialiased overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
