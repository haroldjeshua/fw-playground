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
    <header className="flex flex-col justify-center text-center mb-8">
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
    <footer>
      <div>
        <h4>Made with ❤ by Harv</h4>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body className="relative flex min-h-screen flex-col justify-start overflow-hidden bg-gray-100 py-24">
        <main
          className={`${inter.className} relative w-full bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10`}
        >
          {header}
          {children}
          {footer}
        </main>
      </body>
    </html>
  );
}
