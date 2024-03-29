import Header from "@/components/Header/Header";
import "./globals.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  if (typeof window !== "undefined") {
    const detectWindow = true;

    return detectWindow;
  }

  return (
    <html lang="en">
      <body className="dark container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] overflow-x-hidden break-all bg-background px-2 font-sans antialiased md:max-w-5xl">
        <Header />
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[4rem] opacity-70">
          © {new Date().getFullYear()} fulboapp
        </footer>
      </body>
    </html>
  );
}
