import Link from "next/link";
import { Inter } from "@next/font/google";
import { IconSquareRoundedLetterS } from "@tabler/icons-react";
import "styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header className="flex flex-col items-center text-center mb-8">
      <IconSquareRoundedLetterS size={64} />
      <Link href="/">
        <h1 className="text-3xl font-semibold">Scribe Space</h1>
      </Link>
      <h4 className="text-lg font-medium">
        A Digital Journey to Productivity and Efficiency
      </h4>

      <p className="text-md">
        Welcome to Scribe Space, your one-stop destination for all things tech
        life.
      </p>
    </header>
  );

  const footer = (
    <footer className="relative bottom-0">
      <h4>Made with ❤ by Harv</h4>
    </footer>
  );

  return (
    <html>
      <head />
      <body
        className={`${inter.className} relative flex flex-col min-h-screen justify-start bg-gradient-to-br from-indigo-200 to-violet-300 py-16`}
      >
        <main
          className={`flex flex-col gap-4 relative w-full bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10`}
        >
          {header}
          {children}
          {footer}
        </main>
      </body>
    </html>
  );
}
