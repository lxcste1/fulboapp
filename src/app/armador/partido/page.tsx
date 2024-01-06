import api from "@/api";

export default async function MatchPage({
  searchParams: {players: draft},
}: {
  searchParams: {players: string[]};
}) {
  const roster = await api.player.list();
  const players = draft.map(
    (name) =>
      roster.find((player) => player.name === name) ?? {
        name,
        matches: 0,
        score: 0,
      },
  );

  return <div>{JSON.stringify(players, null, 2)}</div>;
}
