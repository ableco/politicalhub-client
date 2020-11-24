import titleize from "../../utils/titleize";
import { Completed, Incompleted } from "../Icons";

function sum(array, accessor) {
  // eslint-disable-next-line unicorn/no-reduce
  return array.reduce(
    (accumulator, current) => accumulator + accessor(current),
    0,
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
              {candidate.educacion.primaria ? (
                <Completed className="ml-3" />
              ) : (
                <Incompleted className="ml-3" />
              )}
            </span>
            <span className="flex text-neutral-800 text-sm font-semibold flex-1">
              Secundaria
              {candidate.educacion.secundaria ? (
                <Completed className="ml-3" />
              ) : (
                <Incompleted className="ml-3" />
              )}
            </span>
          </div>
        </div>
        <div className="px-6 pt-4 pb-6">
          <h4 className="text-xs text-neutral-400 font-semibold">
            EDUCACIÓN UNIVERSITARIA
          </h4>
          {candidate.educacion.universitaria.map((estudio) => (
            <div key={`${estudio.universidad} - ${estudio.carrera}`}>
              <div className="flex mt-4">
                <span className="text-neutral-800 text-sm font-normal flex-1">
                  <span className="font-semibold">Centro de estudios:</span>{" "}
                  {titleize(estudio.universidad)}
                </span>
                <span className="flex text-neutral-800 text-sm font-semibold flex-1">
                  Concluido
                  {estudio.concluida ? (
                    <Completed className="ml-3" />
                  ) : (
                    <Incompleted className="ml-3" />
                  )}
                </span>
              </div>
              <div className="flex mt-2">
                <span className="text-neutral-800 text-sm font-normal flex-1">
                  <span className="font-semibold">Carrera:</span>{" "}
                  {titleize(estudio.carrera)}
                </span>
                <span className="flex text-neutral-800 text-sm font-semibold flex-1">
                  Titulado
                  {estudio.titulo ? (
                    <Completed className="ml-3" />
                  ) : (
                    <Incompleted className="ml-3" />
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 border-neutral-200 border rounded">
        <h3 className="py-4 px-6 border-b border-neutral-200 font-bold text-xl">
          Experiencia Laboral
        </h3>
        <div className="px-6 pt-4 pb-4">
          {candidate.experiencia_laboral.map((experiencia, index) => (
            <div key={index} className={index !== 0 ? "mt-4" : ""}>
              <p className="text-neutral-800 text-sm font-normal">
                <span className="font-semibold">Centro de trabajo:</span>{" "}
                {titleize(experiencia.centro_laboral)}
              </p>
              <p className="mt-2 text-neutral-800 text-sm font-normal">
                <span className="font-semibold">Ocupación:</span>{" "}
                {titleize(experiencia.ocupacion)}
              </p>
              <p className="mt-2 text-neutral-800 text-sm font-normal">
                <span className="font-semibold">Periodo:</span>{" "}
                {experiencia.desde} - {titleize(experiencia.hasta)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 border-neutral-200 border rounded">
        <h3 className="py-4 px-6 border-b border-neutral-200 font-bold text-xl">
          Ingreso de Bienes y Rentas
        </h3>
        <div className="px-6 pt-4 pb-6 border-b border-neutral-200">
          <h4 className="text-xs text-neutral-400 font-semibold">INGRESOS</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="flex flex-col mt-4">
              <p className="text-neutral-800 text-sm font-normal">
                Sector Público
              </p>
              <p className="mt-2 text-neutral-800 text-2xl font-normal">
                S/{" "}
                {(
                  sum(
                    candidate.ingresos,
                    (ingreso) => ingreso.remuneracion_bruta_anual.publico,
                  ) +
                  sum(
                    candidate.ingresos,
                    (ingreso) =>
                      ingreso.renta_bruta_anual_ejercicio_individual.publico,
                  ) +
                  sum(
                    candidate.ingresos,
                    (ingreso) => ingreso.otros_ingresos.publico,
                  )
                ).toLocaleString("en")}
              </p>
            </div>
            <div className="flex flex-col mt-4">
              <p className="text-neutral-800 text-sm font-normal">
                Sector Privado
              </p>
              <p className="mt-2 text-neutral-800 text-2xl font-normal">
                S/{" "}
                {(
                  sum(
                    candidate.ingresos,
                    (ingreso) => ingreso.remuneracion_bruta_anual.privado,
                  ) +
                  sum(
                    candidate.ingresos,
                    (ingreso) =>
                      ingreso.renta_bruta_anual_ejercicio_individual.privado,
                  ) +
                  sum(
                    candidate.ingresos,
                    (ingreso) => ingreso.otros_ingresos.privado,
                  )
                ).toLocaleString("en")}
              </p>
            </div>
            <div className="flex flex-col mt-4">
              <p className="text-neutral-800 text-sm font-normal">Total</p>
              <p className="mt-2 text-neutral-800 text-2xl font-normal">
                S/{" "}
                {(
                  sum(
                    candidate.ingresos,
                    (ingreso) => ingreso.remuneracion_bruta_anual.total,
                  ) +
                  sum(
                    candidate.ingresos,
                    (ingreso) =>
                      ingreso.renta_bruta_anual_ejercicio_individual.total,
                  ) +
                  sum(
                    candidate.ingresos,
                    (ingreso) => ingreso.otros_ingresos.total,
                  )
                ).toLocaleString("en")}
              </p>
            </div>
          </div>
        </div>
        <div className="px-6 pt-4 pb-6 border-b border-neutral-200">
          <h4 className="text-xs text-neutral-400 font-semibold">
            BIENES INMUEBLES
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {candidate.inmuebles.map((inmueble, index) => (
              <div
                key={index}
                className={"flex flex-col mt-4 " + (index !== 0 ? "" : "")}
              >
                <p className="text-neutral-800 text-sm font-normal">
                  {titleize(inmueble.tipo)}
                </p>
                <p className="mt-2 text-neutral-800 text-2xl font-normal">
                  S/ {inmueble.autovaluo.toLocaleString("en")}
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
            {candidate.muebles.map((mueble, index) => (
              <div
                key={index}
                className={"flex flex-col mt-4 " + (index !== 0 ? "ml-36" : "")}
              >
                <p className="text-neutral-800 text-sm font-normal">
                  {mueble.vehiculo.length > 1
                    ? titleize(mueble.vehiculo)
                    : "Vehículo"}
                </p>
                <p className="mt-2 text-neutral-800 text-2xl font-normal">
                  S/ {mueble.valor.toLocaleString("en")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
