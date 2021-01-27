import titleize from "../../utils/titleize";

export default function Sentencias({ candidate }) {
  return (
    <div className="px-8 lg:px-52 py-10">
      <h3 className="py-4 px-6 font-bold text-xl">Ámbito Penal</h3>
      {candidate.candidate_criminal_conviction_entries.map((delito) => (
        <div
          className="px-6 pt-4 pb-6 border border-neutral-200"
          key={delito.record_id}
        >
          <div className="flex flex-col">
            <p className="flex text-neutral-800 text-sm font-semibold">
              <div className="w-2 h-2 bg-alert-base rounded-full mr-4" />
              Delito:{" "}
              <span className="font-normal ml-1">
                {titleize(delito.judgement_type)}
              </span>
            </p>
            <p className="text-neutral-800 text-sm font-semibold ml-6">
              Fallo o Pena:{" "}
              <span className="font-normal">{titleize(delito.sentence)}</span>
            </p>
          </div>
        </div>
      ))}
      <h3 className="py-4 px-6 font-bold text-xl">Otras Sentencias</h3>
      {candidate.candidate_civil_judgement_entries.map((delito) => (
        <div
          className="px-6 pt-4 pb-6 border border-neutral-200"
          key={delito.record_id}
        >
          <div className="flex flex-col">
            <p className="flex text-neutral-800 text-sm font-semibold items-center">
              <div className="w-2 h-2 bg-alert-base rounded-full mr-4" />
              Delito:{" "}
              <span className="font-normal ml-1">
                {titleize(delito.judgement_type)}
              </span>
            </p>
            <p className="text-neutral-800 text-sm font-semibold ml-6">
              Fallo o Pena:{" "}
              <span className="font-normal">{titleize(delito.sentence)}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
