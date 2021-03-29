import { Fragment, useState, useEffect, useContext } from "react";
import { useInfiniteQuery } from "react-query";
import Link from "next/link";
import PoliticalPartiesContext from "../contexts/politicalParties";
import titleize from "../utils/titleize";
import buildURL from "../utils/buildURL";
import fetchJSON from "../utils/fetchJSON";
import UBIGEOS from "../utils/ubigeos";

function fetchCandidates({ filter, page = 1 }) {
  const url = buildURL({ filter });
  url.searchParams.append("page", page);

  return fetchJSON(url.toString());
}

function CandidateCard({ candidate, showNumber }) {
  const politicalParties = useContext(PoliticalPartiesContext);
  const politicalParty = politicalParties?.find(
    (politicalParty) =>
      politicalParty.id === candidate.political_organization_id,
  );
  const ubigeo = UBIGEOS.find(
    (ubigeo) => ubigeo.value === candidate.postulation_ubigeo,
  );

  return (
    <article className="flex items-center">
      <img
        src={candidate.profile_photo_url}
        className="w-12 h-12 bg-neutral-200 rounded-full object-cover"
        alt={`Logo ${candidate.names}`}
      />
      <aside className="ml-4 w-full">
        <Link href={`/candidates/${candidate.id}`}>
          <h6 className="flex flex-row items-center justify-between w-full cursor-pointer">
            <a
              className="text-primary-base cursor-pointer"
              style={{ maxWidth: showNumber ? "calc(100% - 4rem)" : null }}
            >
              {titleize(candidate.fullName)}
            </a>
            {showNumber && candidate.number ? (
              <span className="text-sm font-semibold text-center leading-7 border-2 rounded text-neutral-700 border-neutral-700 w-8 h-8 mr-4">
                {candidate.number}
              </span>
            ) : null}
          </h6>
        </Link>
        {politicalParty ? (
          <span className="block text-neutral-400 text-sm">
            {titleize(politicalParty.name)}
          </span>
        ) : null}
        {ubigeo && showNumber ? (
          <span className="block text-neutral-400 text-xs">{ubigeo.label}</span>
        ) : null}
      </aside>
    </article>
  );
}

export default function Candidates({
  candidates,
  politicalParty,
  filterByUbigeo,
  heading = "Candidatos",
  showNumber,
  filter = {},
}) {
  const [filteredBy, setFilteredBy] = useState(() => {
    const initialFilters = { ubigeo: "", ...filter };

    if (politicalParty) {
      initialFilters.political_organization = politicalParty.id;
    }

    return initialFilters;
  });

  const {
    status,
    data,
    isFetchingMore,
    fetchMore,
    canFetchMore,
    refetch,
  } = useInfiniteQuery(
    ["candidates", filteredBy],
    (_key, filter, page) => fetchCandidates({ filter, page }),
    {
      getFetchMore: (lastGroup, _allGroups) => lastGroup.meta.next_page,
      initialData: [candidates],
    },
  );

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredBy]);

  return (
    <div className={politicalParty ? "" : "mt-16"}>
      {politicalParty ? null : (
        <h2 className="text-3xl font-extrabold">{heading}</h2>
      )}
      {filterByUbigeo ? (
        // eslint-disable-next-line jsx-a11y/no-onchange
        <select
          className="p-3 mt-6 w-full sm:w-full md:w-auto"
          value={filteredBy.ubigeo}
          onChange={(event) => {
            const value = event.target.value;

            setFilteredBy((previousValue) => ({
              ...previousValue,
              ubigeo: value,
            }));
          }}
        >
          <option value="">Todas las regiones</option>
          {UBIGEOS.map((ubigeo) => (
            <option key={ubigeo.value} value={ubigeo.value}>
              {ubigeo.label}
            </option>
          ))}
        </select>
      ) : null}
      {status === "loading" ? (
        "loading..."
      ) : (
        <>
          <div className="mt-10 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.map((group, i) => (
              <Fragment key={i}>
                {group.candidates.map((candidate) => {
                  const fullName = `${candidate.names} ${candidate.family_name} ${candidate.mothers_maiden_name}`;
                  return (
                    <CandidateCard
                      key={fullName}
                      showNumber={showNumber}
                      candidate={{ ...candidate, fullName }}
                    />
                  );
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
