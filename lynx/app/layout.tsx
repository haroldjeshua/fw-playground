import '../styles/globals.css'

// TODO: npm install next@13.1.2-canary.2
// https://github.com/vercel/turbo/issues/3319

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }