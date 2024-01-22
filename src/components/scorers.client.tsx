"use client";

import type {Scorer} from "@/types";

import React, {useState, useEffect} from "react";

import api from "@/api";
import {Button} from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

function ScorersClient({initialScorers}: {initialScorers: Scorer[]}) {
  const [scorers, setScorers] = useState<Scorer[]>(initialScorers);
  const [completeList, setCompleteList] = useState(false);

  useEffect(() => {
    const fetchScorers = async () => {
      const scorersData: Scorer[] = await api.scorers.list();

      setScorers(scorersData);
    };

    if (scorers.length === 0) {
      fetchScorers();
    }
  }, [scorers]);

  const sortScorers = [...scorers];

  sortScorers.sort((a, b) => b.goals - a.goals);

  const filterScorers = completeList
    ? sortScorers
    : sortScorers.filter((scorer) => scorer.goals >= 3);

  return (
    <div className="overflow-x px-2.5">
      <Table className="m-auto max-w-4xl table-auto overflow-scroll">
        <TableHeader>
          <TableRow>
            <TableHead>Jugador</TableHead>
            <TableHead className="text-right">Goles</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterScorers.map(({player, goals}) => (
            <TableRow key={player}>
              <TableCell>{player}</TableCell>
              <TableCell className="text-right">{goals}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {!completeList ? (
        <Button className="w-full" onClick={() => setCompleteList(true)}>
          Mostrar lista completa
        </Button>
      ) : (
        <Button className="w-full" onClick={() => setCompleteList(false)}>
          Mostrar menos
        </Button>
      )}
    </div>
  );
}

export default ScorersClient;
