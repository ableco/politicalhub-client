import Link from "next/link";
import titleize from "../utils/titleize";

function PartidoSection({ candidate, politicalParty }) {
  return (
    <div className="flex mt-6 xl:mt-0 ml-0 xl:ml-6">
      {candidate ? (
        <img
          src={candidate.political_organization.logo}
          className="w-12 h-12 max-h-12 object-cover bg-neutral-200 rounded-md mr-3"
          alt={`Logo ${candidate.political_organization.name}`}
        />
      ) : null}
      <div className="flex justify-center items-center max-h-12 bg-warning-dark px-3 py-2 fitco rounded-md">
        <span className="text-white font-bold text-xl">
          {politicalParty.political_organization_stat.total_sentences}
        </span>
      </div>
      <div className="ml-4">
        {candidate ? (
          <p className="font-semibold">
            Sentencias de{" "}
            <Link href={`/political-organizations/${politicalParty.slug}`}>
              <a className="text-primary-base">
                {titleize(candidate.political_organization.name)}
              </a>
            </Link>
          </p>
        ) : (
          <p className="font-semibold">Sentencias Acumuladas</p>
        )}
        <p className="text-alert-base text-sm">Encima de la media</p>
      </div>
    </div>
  );
}

export default function Resume({ candidate, politicalParty }) {
  const denunciasQuantity =
    candidate.candidate_civil_judgement_entries.length +
    candidate.candidate_criminal_conviction_entries.length;

  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 relative py-8 px-10 mx-4 lg:mx-52 mt-12 bg-neutral-100">
      <div className="flex">
        <div className="flex justify-center items-center max-h-12 bg-alert-base px-3 py-2 fitco rounded-md">
          <span className="text-white font-bold text-xl">
            {denunciasQuantity}
          </span>
        </div>
        <div className="ml-4">
          <p className="font-semibold">Sentencias</p>
          <p className="text-alert-base text-sm">Muy por encima de la media</p>
        </div>
      </div>
      <div className="hidden xl:block w-0.5 top-0 bottom-0 left-1/2 bg-neutral-200 absolute" />
      <PartidoSection candidate={candidate} politicalParty={politicalParty} />
    </section>
  );
}

export function ResumePoliticalParty({ politicalParty }) {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 relative py-8 px-10 mx-4 lg:mx-52 mt-12 bg-neutral-100">
      <div className="flex">
        <div className="flex justify-center items-center max-h-12 bg-alert-base px-3 py-2 fitco rounded-md">
          <span className="text-white font-bold text-xl">
            {politicalParty.political_organization_stat.total_candidates}
          </span>
        </div>
        <div className="ml-4">
          <p className="font-semibold">Candidatos</p>
        </div>
      </div>
      <div className="hidden xl:block w-0.5 top-0 bottom-0 left-1/2 bg-neutral-200 absolute" />
      <PartidoSection politicalParty={politicalParty} />
    </section>
  );
}
