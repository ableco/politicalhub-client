import titleize from "../utils/titleize";

export function Header({ candidate }) {
  return (
    <div className="mt-16 flex flex-row justify-center items-center flex-no-wrap">
      <div className="flex flex-col items-stretch justify-start text-center space-y-6">
        <div className="mt-16 flex flex-row justify-center items-center flex-no-wrap">
          <img
            src={candidate.foto}
            className="w-28 h-28 bg-neutral-200 rounded-full object-cover"
            alt={`${candidate.nombres}  ${candidate.apellido_paterno} ${candidate.apellido_materno}`}
          />
        </div>
        <div className="flex flex-col items-stretch justify-start text-center space-y-4">
          <h1 className="text-3xl font-bold px-5">
            {titleize(
              `${candidate.nombres}  ${candidate.apellido_paterno} ${candidate.apellido_materno}`,
            )}
          </h1>
          <span className="text-neutral-400 px-5">
            Candidato/a al Congreso por{" "}
            <span className="text-primary-base">
              {titleize(candidate.organizacion_politica)}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
