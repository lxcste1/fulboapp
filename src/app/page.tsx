import Matches from "@/components/matches";
import Scorers from "@/components/scorers";

export default async function Home() {
  return (
    <>
      <div className="main-banner mb-10 flex w-full flex-col flex-wrap justify-center rounded-md py-40 text-center md:mb-20">
        <h1 className="pb-4 text-6xl font-bold">¡Bienvenidos!</h1>
        <h3 className="pb-4 text-xl font-bold">
          Al armador de equipos para los Domingos de fútbol
        </h3>
        <p>
          También vas a poder encontrar los resultados de los últimos partidos, y los goleadores de
          la temporada.
        </p>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-3/4">
          <h1 className="mb-10 text-center text-xl font-bold">últimos partidos</h1>
          <Matches />
        </div>
        <div className="w-full md:w-1/4">
          <h1 className="mb-10 text-center text-xl font-bold">Goleadores</h1>
          <div>
            <Scorers />
          </div>
        </div>
      </div>
    </>
  );
}
