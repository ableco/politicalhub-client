/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import titleize from "../utils/titleize";

function CandidateCard({ candidate }) {
  return (
    <div className="flex items-center">
      <img
        src={candidate.foto}
        className="w-12 h-12 bg-neutral-200 rounded-full object-cover"
        alt={`Logo ${candidate.nombres}`}
      />
      <div className="ml-4">
        <Link href={`/congresistas/${candidate.identificador}`}>
          <a className="text-primary-base">{titleize(candidate.fullName)}</a>
        </Link>
      </div>
    </div>
  );
}

export default function Candidates({ candidates }) {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-extrabold">Candidatos</h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {candidates.map((candidate) => {
          const fullName = `${candidate.nombres}  ${candidate.apellido_paterno} ${candidate.apellido_materno}`;
          return (
            <CandidateCard
              key={fullName}
              candidate={{ ...candidate, fullName }}
            />
          );
        })}
      </div>
    </div>
  );
}
