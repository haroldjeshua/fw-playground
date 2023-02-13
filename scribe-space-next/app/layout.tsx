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
    <header className="flex flex-col items-center text-center">
      <IconSquareRoundedLetterS size={64} />
      <Link href="/">
        <h1 className="text-3xl font-semibold">Scribe Space</h1>
      </Link>
      <h6 className="text-sm font-semibold mt-2 mb-4">
        by&nbsp;
        <Link
          href="https://github.com/haroldjeshua"
          rel="noopener noreferrer"
          target="_blank"
        >
          @harv
        </Link>{" "}
      </h6>
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
    <footer className="flex justify-center mt-auto">
      <h4>
        Made with ❤ by&nbsp;
        <Link
          href="https://github.com/haroldjeshua"
          rel="noopener noreferrer"
          target="_blank"
        >
          @harv
        </Link>
      </h4>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        <main
          className={`${inter.className} relative flex flex-col min-h-screen justify-start bg-gradient-to-br from-indigo-200 to-violet-300 py-16`}
        >
          <div className="flex flex-col gap-8 relative w-full bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
            {header}
            {children}
            {footer}
          </div>
        </main>
      </body>
    </html>
  );
}
