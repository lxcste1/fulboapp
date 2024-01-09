"use client";
import {useEffect} from "react";
import Link from "next/link";

import {Drawer, DrawerContent, DrawerFooter, DrawerTrigger} from "@/components/ui/drawer";

import useScreenSize from "./hooks/useScreenSize";

import "./globals.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  const screenSize = useScreenSize();

  useEffect(() => {
    screenSize;
  }, [screenSize]);

  return (
    <html lang="en">
      <body className="dark container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] bg-background px-4 font-sans antialiased">
        <header className="flex items-center justify-between px-4 md:px-0">
          <Link className="text-xl font-bold leading-[4rem]" href="/">
            Fulboapp
          </Link>
          {screenSize.width <= 767 ? (
            <Drawer>
              <DrawerTrigger>Open</DrawerTrigger>
              <DrawerContent>
                <DrawerFooter className="px-8">
                  <Link className="opacity-70" href="/">
                    Partidos
                  </Link>
                  <Link className="opacity-70" href="/players">
                    Jugadores
                  </Link>
                  <Link className="opacity-70" href="/builder">
                    Armador de equipos
                  </Link>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          ) : (
            <nav>
              <ul className="flex gap-4 opacity-70">
                <li>
                  <Link href="/">Partidos</Link>
                </li>
                <li>
                  <Link href="/players">Jugadores</Link>
                </li>
                <li>
                  <Link href="/builder">Armador de equipos</Link>
                </li>
              </ul>
            </nav>
          )}
        </header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[4rem] opacity-70">
          © {new Date().getFullYear()} fulboapp
        </footer>
      </body>
    </html>
  );
}
