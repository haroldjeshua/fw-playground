import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Header from "./components/Header";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Harv Courses",
  description: "Frontend web development",
  keywords:
    "web development, frontend, web design, responsive design, react, javascript, node, css, html",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
