import Link from "next/link";
import titleize from "../utils/titleize";
import UBIGEOS from "../utils/ubigeos";

export function Header({ candidate, politicalParty }) {
  const ubigeo = UBIGEOS.find(
    (ubigeo) => ubigeo.value === candidate?.postulation_ubigeo,
  );

  return (
    <div className="mt-16 flex flex-row justify-center items-center flex-no-wrap">
      <div className="flex flex-col items-stretch justify-start text-center space-y-6">
        <div className="mt-16 flex flex-row justify-center items-center flex-no-wrap">
          <img
            src={candidate ? candidate.profile_photo_url : politicalParty.logo}
            className={`w-28 h-28 bg-neutral-200 ${
              candidate ? "rounded-full" : "rounded-md"
            } object-cover`}
            alt={
              candidate
                ? `${candidate.names}  ${candidate.family_name} ${candidate.mothers_maiden_name}`
                : politicalParty.slug
            }
          />
        </div>
        <div className="flex flex-col items-stretch justify-start text-center space-y-4">
          <h1 className="text-3xl font-bold px-5">
            {candidate
              ? titleize(
                  `${candidate.names}  ${candidate.family_name} ${candidate.mothers_maiden_name}`,
                )
              : titleize(politicalParty.name)}
            {candidate?.office?.match(/congresista/i) ? (
              <span className="inline-block font-semibold text-center leading-11 border-2 rounded text-neutral-700 border-neutral-700 w-10 h-10 ml-4">
                {candidate.number}
              </span>
            ) : null}
          </h1>
          <div className="flex flex-col items-stretch justify-start text-center space-y-1">
            {candidate ? (
              <span className="text-neutral-400 px-5">
                Candidato/a a {titleize(candidate.office)} de{" "}
                <Link
                  href={`/political-organizations/${candidate.political_organization.slug}`}
                >
                  <a className="text-primary-base">
                    {titleize(candidate.political_organization.name)}
                  </a>
                </Link>
                {candidate?.office?.match(/congresista/i)
                  ? ` por ${ubigeo.label}`
                  : null}
              </span>
            ) : (
              <span className="text-neutral-400 px-5">Partido Político</span>
            )}
            {candidate?.secondary_office ? (
              <span className="text-neutral-400 px-5">
                Candidato/a a {titleize(candidate?.secondary_office)} por{" "}
                {ubigeo.label}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
