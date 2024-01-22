"use client";

import type {Player} from "@/types";

import {useState} from "react";

import {Button} from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Checkbox} from "@/components/ui/checkbox";
import {Input} from "@/components/ui/input";

export default function BuilderPageClient({
  players: initialPlayers,
  onCreate,
}: {
  players: Player[];
  onCreate: (formData: FormData) => void;
}) {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);

  function handleAddPlayer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    setPlayers((players) =>
      players.concat({name: formData.get("player") as string, score: 0, matches: 0}),
    );

    event.currentTarget.reset();
  }

  return (
    <section>
      <form className="flex gap-4" onSubmit={handleAddPlayer}>
        <Input name="player" placeholder="Nombre del jugador" />
        <Button type="submit" variant="secondary">
          Agregar jugador
        </Button>
      </form>
      <form action={onCreate}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead className="text-right" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.map(({name}) => (
              <TableRow key={name}>
                <TableCell>{name}</TableCell>
                <TableCell className="text-right">
                  <Checkbox name="player" value={name} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button className="w-full" type="submit">
          Armar equipos
        </Button>
      </form>
    </section>
  );
}
