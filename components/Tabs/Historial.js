import titleize from "../../utils/titleize";
import styles from "./styles.module.css";

function PastElectionEntryCard({ historicEntry }) {
  return (
    <article className="flex flex-row">
      <aside
        className={`relative box-content w-8 text-xs pt-4 pr-4 border-r-4 border-neutral-200 ${styles.historicEntryYear}`}
      >
        {historicEntry.start_year}
      </aside>
      <div className="py-4 px-6 mb-12 ml-6 border border-neutral-200 rounded flex-grow max-w-screen-md">
        <small className="text-neutral-400 text-xs font-semibold uppercase">
          Elecciones
        </small>
        <p>Participó para el cargo de {titleize(historicEntry.office)}</p>
      </div>
    </article>
  );
}

function ElectedOfficeEntryCard({ historicEntry }) {
  return (
    <article className="flex flex-row">
      <aside
        className={`relative box-content w-8 text-xs pt-4 pr-4 border-r-4 border-neutral-200 ${styles.historicEntryYear}`}
      >
        {historicEntry.start_year}
      </aside>
      <div className="py-4 px-6 mb-12 ml-6 border border-neutral-200 rounded flex-grow max-w-screen-md">
        <small className="text-neutral-400 text-xs font-semibold uppercase">
          Cargo Público
        </small>
        <p>Electo/a como {titleize(historicEntry.office)}</p>
      </div>
    </article>
  );
}

export default function Historial({ candidate }) {
  const historicEntries = [
    ...candidate.candidate_political_party_office_entries.map((entry) => ({
      type: "party_office",
      ...entry,
    })),
    ...candidate.candidate_previous_elected_office_entries.map((entry) => ({
      type: "elected_office",
      ...entry,
    })),
    ...candidate.person.electoral_history_entries.map((entry) => {
      let startYear;

      if (entry.electoral_process.match(/\s\d{4}\s?/)) {
        startYear = Number(
          entry.electoral_process
            .match(/\s\d{4}\s?/)
            .pop()
            .trim(),
        );
      }

      return {
        type: "past_election",
        start_year: startYear,
        ...entry,
      };
    }),
  ].sort((entryA, entryB) => entryB.start_year - entryA.start_year);

  return (
    <div className="px-8 lg:px-52 py-10">
      {historicEntries.map((historicEntry, index) => {
        if (historicEntry.type === "past_election") {
          return (
            <PastElectionEntryCard key={index} historicEntry={historicEntry} />
          );
        }

        if (historicEntry.type === "elected_office") {
          return (
            <ElectedOfficeEntryCard key={index} historicEntry={historicEntry} />
          );
        }
      })}
    </div>
  );
}
