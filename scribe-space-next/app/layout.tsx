import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div>
        <Link href="/">
          <h1>Scribe Space</h1>
        </Link>
        <p>Welcome scribers.</p>
      </div>
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
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
