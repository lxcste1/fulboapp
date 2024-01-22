import type {Scorer} from "@/types";

import Matches from "@/components/matches";
// import Scorers from "@/components/scorers-old";
import Scorers from "@/components/scorers";
import api from "@/api";

export default async function Home() {
  const scorersData: Scorer[] = await api.scorers.list();

  return (
    <>
      <div className="main-banner mb-10 flex w-full flex-col flex-wrap justify-center rounded-md px-2.5 py-40 text-center md:mb-20">
        <h1 className="pb-4 text-5xl font-bold md:text-6xl">¡Bienvenidos!</h1>
        <h3 className="break-normal pb-4 text-sm font-bold md:text-xl">
          Al armador de equipos para los Domingos de fútbol
        </h3>
        <p className="break-normal text-xs md:text-sm">
          También vas a poder encontrar los resultados de los últimos partidos, y los goleadores de
          la temporada.
        </p>
      </div>
      <div className="flex flex-wrap justify-around">
        <div className="w-full md:w-3/5">
          <h1 className="mb-10 text-center text-xl font-bold">últimos partidos</h1>
          <Matches />
        </div>
        <div className="w-full md:w-1/4">
          <h1 className="mb-10 text-center text-xl font-bold">Goleadores</h1>
          <div>
            <Scorers initialScorers={scorersData} />
          </div>
        </div>
      </div>
    </>
  );
}
