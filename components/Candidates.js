import { Fragment } from "react";
import { useInfiniteQuery } from "react-query";
import Link from "next/link";
import titleize from "../utils/titleize";
import buildURL from "../utils/buildURL";
import fetchJSON from "../utils/fetchJSON";

function fetchCandidates({ page = 1, filter = {} }) {
  const url = buildURL({ filter });
  url.searchParams.append("page", page);

  return fetchJSON(url.toString());
}

function fetchCandidatesOnPoliticalParty({
  page = 1,
  politicalParty,
  filter = {},
}) {
  const url = buildURL({ filter });

  url.searchParams.append("political_organization", politicalParty.id);
  url.searchParams.append("page", page);

  return fetchJSON(url.toString());
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

export default function Candidates({
  candidates,
  politicalParty,
  heading = "Candidatos",
  filter = {},
}) {
  const url = buildURL({ filter });

  const {
    status,
    data,
    isFetchingMore,
    fetchMore,
    canFetchMore,
  } = useInfiniteQuery(
    politicalParty
      ? `candidates-${politicalParty.slug}`
      : `candidates${url.search}`,
    politicalParty
      ? (key, page) =>
          fetchCandidatesOnPoliticalParty({ key, page, politicalParty, filter })
      : (key, page) => fetchCandidates({ key, page, filter }),
    {
      getFetchMore: (lastGroup, _allGroups) => lastGroup.meta.next_page,
      initialData: [candidates],
    },
  );

  return (
    <div className="mt-16">
      {politicalParty ? null : (
        <h2 className="text-3xl font-extrabold">{heading}</h2>
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
                    const fullName = `${candidate.names} ${candidate.family_name} ${candidate.mothers_maiden_name}`;
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
