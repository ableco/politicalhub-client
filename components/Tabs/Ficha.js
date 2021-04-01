import titleize from "../../utils/titleize";
import { Completed, Incompleted } from "../Icons";

function sum(array, word) {
  return (
    array
      .filter((element) => element.income_type.startsWith(word))
      // eslint-disable-next-line unicorn/no-reduce
      .reduce(
        (accumulator, current) =>
          accumulator + Number.parseFloat(current.amount),
        0,
      )
  );
}

export default function Ficha({ candidate }) {
  return (
    <div className="px-8 lg:px-52 py-10">
      <div className="border-neutral-200 border rounded">
        <h3 className="py-4 px-6 border-b border-neutral-200 font-bold text-xl">
          Información Académica
        </h3>
        <div className="px-6 pt-4 pb-6 border-b border-neutral-200">
          <h4 className="text-xs text-neutral-400 font-semibold">
            EDUCACIÓN BÁSICA
          </h4>
          <div className="flex mt-4">
            <span className="flex text-neutral-800 text-sm font-semibold flex-1">
              Primaria
              {candidate.candidate_education_entries.find(
                (e) => e.education_type === "primary",
              )?.finished ? (
                <Completed className="ml-3" />
              ) : (
                <Incompleted className="ml-3" />
              )}
            </span>
            <span className="flex text-neutral-800 text-sm font-semibold flex-1">
              Secundaria
              {candidate.candidate_education_entries.find(
                (e) => e.education_type === "secondary",
              )?.finished ? (
                <Completed className="ml-3" />
              ) : (
                <Incompleted className="ml-3" />
              )}
            </span>
          </div>
        </div>
        {candidate.candidate_university_education_entries.length > 0 ? (
          <div className="px-6 pt-4 pb-6">
            <h4 className="text-xs text-neutral-400 font-semibold">
              EDUCACIÓN UNIVERSITARIA
            </h4>
            {candidate.candidate_university_education_entries.map((estudio) => (
              <div key={`${estudio.university} - ${estudio.degree}`}>
                <div className="flex mt-4">
                  <span className="text-neutral-800 text-sm font-normal flex-1">
                    <span className="font-semibold">Centro de estudios:</span>{" "}
                    {titleize(estudio.university)}
                  </span>
                  <span className="flex text-neutral-800 text-sm font-semibold flex-1">
                    Concluido
                    {estudio.finished ? (
                      <Completed className="ml-3" />
                    ) : (
                      <Incompleted className="ml-3" />
                    )}
                  </span>
                </div>
                <div className="flex mt-2">
                  <span className="text-neutral-800 text-sm font-normal flex-1">
                    <span className="font-semibold">Carrera:</span>{" "}
                    {titleize(estudio.degree)}
                  </span>
                  <span className="flex text-neutral-800 text-sm font-semibold flex-1">
                    Titulado
                    {estudio.graduated ? (
                      <Completed className="ml-3" />
                    ) : (
                      <Incompleted className="ml-3" />
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {candidate.candidate_graduate_education_entries.length > 0 ? (
          <div className="px-6 pt-4 pb-6">
            <h4 className="text-xs text-neutral-400 font-semibold">
              ESTUDIOS DE POSTGRADO Y MAESTRÍAS
            </h4>
            {candidate.candidate_graduate_education_entries.map((estudio) => (
              <div key={`${estudio.grad_school} - ${estudio.major}`}>
                <div className="flex mt-4">
                  <span className="text-neutral-800 text-sm font-normal flex-1">
                    <span className="font-semibold">Centro de estudios:</span>{" "}
                    {titleize(estudio.grad_school)}
                  </span>
                  <span className="flex text-neutral-800 text-sm font-semibold flex-1">
                    Concluido
                    {estudio.finished ? (
                      <Completed className="ml-3" />
                    ) : (
                      <Incompleted className="ml-3" />
                    )}
                  </span>
                </div>
                <div className="flex mt-2">
                  <span className="text-neutral-800 text-sm font-normal flex-1">
                    <span className="font-semibold">Carrera:</span>{" "}
                    {titleize(estudio.major)}
                  </span>
                  <span className="flex text-neutral-800 text-sm font-semibold flex-1">
                    Titulado
                    {estudio.graduated ? (
                      <Completed className="ml-3" />
                    ) : (
                      <Incompleted className="ml-3" />
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-4 border-neutral-200 border rounded">
        <h3 className="py-4 px-6 border-b border-neutral-200 font-bold text-xl">
          Experiencia Laboral
        </h3>
        <div className="px-6 pt-4 pb-4">
          {candidate.candidate_work_experience_entries.map(
            (experiencia, index) => (
              <div key={index} className={index !== 0 ? "mt-4" : ""}>
                <p className="text-neutral-800 text-sm font-normal">
                  <span className="font-semibold">Centro de trabajo:</span>{" "}
                  {titleize(experiencia.workplace)}
                </p>
                <p className="mt-2 text-neutral-800 text-sm font-normal">
                  <span className="font-semibold">Ocupación:</span>{" "}
                  {titleize(experiencia.profession)}
                </p>
                <p className="mt-2 text-neutral-800 text-sm font-normal">
                  <span className="font-semibold">Periodo:</span>{" "}
                  {experiencia.start_year} -{" "}
                  {experiencia.end_year || "Presente"}
                </p>
              </div>
            ),
          )}
        </div>
      </div>

      <div className="mt-4 border-neutral-200 border rounded">
        <h3 className="py-4 px-6 border-b border-neutral-200 font-bold text-xl">
          Ingreso de Bienes y Rentas
        </h3>
        <div className="px-6 pt-4 pb-6 border-b border-neutral-200">
          <h4 className="text-xs text-neutral-400 font-semibold">
            INGRESOS ANUALES
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="flex flex-col mt-4">
              <p className="text-neutral-800 text-sm font-normal">
                Sector Público
              </p>
              <p className="mt-2 text-neutral-800 text-2xl font-normal">
                {new Intl.NumberFormat("es-PE", {
                  style: "currency",
                  currency: "PEN",
                }).format(sum(candidate.candidate_income_entries, "public"))}
              </p>
            </div>
            <div className="flex flex-col mt-4">
              <p className="text-neutral-800 text-sm font-normal">
                Sector Privado
              </p>
              <p className="mt-2 text-neutral-800 text-2xl font-normal">
                {new Intl.NumberFormat("es-PE", {
                  style: "currency",
                  currency: "PEN",
                }).format(sum(candidate.candidate_income_entries, "private"))}
              </p>
            </div>
            <div className="flex flex-col mt-4">
              <p className="text-neutral-800 text-sm font-normal">Total</p>
              <p className="mt-2 text-neutral-800 text-2xl font-normal">
                {new Intl.NumberFormat("es-PE", {
                  style: "currency",
                  currency: "PEN",
                }).format(sum(candidate.candidate_income_entries, "p"))}
              </p>
            </div>
          </div>
        </div>
        <div className="px-6 pt-4 pb-6 border-b border-neutral-200">
          <h4 className="text-xs text-neutral-400 font-semibold">
            BIENES INMUEBLES
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {candidate.candidate_property_entries
              .filter((e) => e.property_type === "real_estate")
              .map((inmueble, index) => (
                <div key={index} className="flex flex-col mt-4">
                  <p className="text-neutral-800 text-sm font-normal">
                    {inmueble.registry_type && titleize(inmueble.registry_type)}
                  </p>
                  <p className="mt-2 text-neutral-800 text-2xl font-normal">
                    {new Intl.NumberFormat("es-PE", {
                      style: "currency",
                      currency: "PEN",
                    }).format(inmueble.value)}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="px-6 pt-4 pb-6">
          <h4 className="text-xs text-neutral-400 font-semibold">
            BIENES MUEBLES
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {candidate.candidate_property_entries
              .filter((e) => e.property_type === "vehicle")
              .map((mueble, index) => (
                <div key={index} className="flex flex-col mt-4">
                  <p className="text-neutral-800 text-sm font-normal">
                    {mueble.description
                      ? titleize(mueble.description)
                      : "Vehículo"}
                  </p>
                  <p className="mt-2 text-neutral-800 text-2xl font-normal">
                    {new Intl.NumberFormat("es-PE", {
                      style: "currency",
                      currency: "PEN",
                    }).format(mueble.value)}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
