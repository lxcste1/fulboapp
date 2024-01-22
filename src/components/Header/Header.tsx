import React from "react";
import Link from "next/link";
import {HamburgerMenuIcon} from "@radix-ui/react-icons";

import {Drawer, DrawerContent, DrawerFooter, DrawerTrigger} from "@/components/ui/drawer";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 md:px-0">
      <Link className="text-xl font-bold leading-[4rem]" href="/">
        Fulboapp
      </Link>
      <div className="md:hidden">
        <Drawer>
          <DrawerTrigger>
            <HamburgerMenuIcon />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerFooter className="px-8">
              <Link className="opacity-70" href="/matches">
                Partidos
              </Link>
              <Link className="opacity-70" href="/builder">
                Armador de equipos
              </Link>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="hidden md:block">
        <nav className="hidden md:block">
          <ul className="flex gap-4 opacity-70">
            <li>
              <Link href="/matches">Partidos</Link>
            </li>
            <li>
              <Link href="/builder">Armador de equipos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
