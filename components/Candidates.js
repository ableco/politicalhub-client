import { Fragment } from "react";
import { useInfiniteQuery } from "react-query";
import Link from "next/link";
import titleize from "../utils/titleize";

function fetchCandidates(_key, page = 1) {
  return fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/candidates?page=${page}`,
  ).then((res) => res.json());
}

function fetchCandidatesOnPoliticalParty(_key, page = 1, politicalParty) {
  return fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/candidates?political_organization=${politicalParty.id}&page=${page}`,
  ).then((res) => res.json());
}

function CandidateCard({ candidate }) {
  return (
    <div className="flex items-center">
      <img
        src={candidate.profile_photo_url}
        className="w-12 h-12 bg-neutral-200 rounded-full object-cover"
        alt={`Logo ${candidate.names}`}
      />
      <div className="ml-4">
        <Link href={`/candidates/${candidate.id}`}>
          <a className="text-primary-base">{titleize(candidate.fullName)}</a>
        </Link>
      </div>
    </div>
  );
}

export default function Candidates({ candidates, politicalParty }) {
  const {
    status,
    data,
    isFetchingMore,
    fetchMore,
    canFetchMore,
  } = useInfiniteQuery(
    politicalParty ? `candidates-${politicalParty.slug}` : "candidates",
    politicalParty
      ? (key, page) =>
          fetchCandidatesOnPoliticalParty(key, page, politicalParty)
      : fetchCandidates,
    {
      getFetchMore: (lastGroup, _allGroups) => lastGroup.meta.next_page,
      initialData: [candidates],
    },
  );

  return (
    <div className="mt-16">
      {politicalParty ? null : (
        <h2 className="text-3xl font-extrabold">Candidatos</h2>
      )}
      {status === "loading" ? (
        "loading..."
      ) : (
        <>
          <div className="mt-10 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.map((group, i) => (
              <Fragment key={i}>
                {group.candidates.map((candidate) => {
                  {
                    const fullName = `${candidate.names}  ${candidate.family_name} ${candidate.mothers_maiden_name}`;
                    return (
                      <CandidateCard
                        key={fullName}
                        candidate={{ ...candidate, fullName }}
                      />
                    );
                  }
                })}
              </Fragment>
            ))}
          </div>
          <div>
            {canFetchMore && (
              <button
                onClick={() => fetchMore()}
                disabled={!canFetchMore || isFetchingMore}
                className="text-neutral-400"
              >
                {isFetchingMore ? "Cargando más..." : "Cargar más.."}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
