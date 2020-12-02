import Link from "next/link";
import titleize from "../utils/titleize";

function Card({ politicalParty }) {
  return (
    <div className="flex">
      <img
        src={politicalParty.logo}
        className="w-12 h-12 bg-neutral-200 rounded-md"
        alt={`Logo ${politicalParty.nombre}`}
      />
      <div className="flex flex-col ml-4">
        <Link href="/">
          <a className="text-primary-base">{titleize(politicalParty.nombre)}</a>
        </Link>
        <span className="text-neutral-400">23 candidatos</span>
      </div>
    </div>
  );
}

export default function PoliticalParties({ politicalParties }) {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-extrabold">Partidos Políticos</h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {politicalParties.map((politicalParty) => (
          <Card key={politicalParty.nombre} politicalParty={politicalParty} />
        ))}
      </div>
    </div>
  );
}
