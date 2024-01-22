import React from "react";

import api from "@/api";

import ScorersClient from "./scorers.client";

interface Scorer {
  player: string;
  goals: number;
}

function Scorers({initialScorers}: {initialScorers: Scorer[]}) {
  const sortScorers = [...initialScorers];

  sortScorers.sort((a, b) => b.goals - a.goals);

  return <ScorersClient initialScorers={sortScorers} />;
}

export async function getServerSideProps() {
  const scorers: Scorer[] = await api.scorers.list();

  return {
    props: {
      initialScorers: scorers,
    },
  };
}

export default Scorers;
