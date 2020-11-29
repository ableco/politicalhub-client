/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from "react";
import { Avatar } from "@ableco/baseline";
import { useInfiniteQuery } from "react-query";
import Link from "next/link";
import titleize from "../utils/titleize";

function fetchCandidates(_key, page = 1) {
  return fetch(`/api/candidates?page=${page}`).then((res) => res.json());
}

function CandidateCard({ candidate }) {
  return (
    <div className="flex items-center">
      <Avatar
        source={candidate.foto}
        className="w-12 h-12 bg-neutral-200 object-cover"
        name={`Logo ${candidate.fullName}`}
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
  const {
    status,
    data,
    isFetchingMore,
    fetchMore,
    canFetchMore,
  } = useInfiniteQuery("candidates", fetchCandidates, {
    getFetchMore: (lastGroup, _allGroups) => lastGroup.nextPage,
    initialData: [candidates],
  });

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-extrabold">Candidatos</h2>
      {status === "loading" ? (
        "loading..."
      ) : (
        <>
          <div className="mt-10 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.map((group, i) => (
              <Fragment key={i}>
                {group.candidates.map((candidate) => {
                  {
                    const fullName = `${candidate.nombres}  ${candidate.apellido_paterno} ${candidate.apellido_materno}`;
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
