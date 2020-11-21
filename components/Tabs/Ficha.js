import { Completed, Incompleted } from "../Icons";

export default function Ficha() {
  return (
    <div className="px-52 py-10">
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
              <Completed className="ml-3" />
            </span>
            <span className="flex text-neutral-800 text-sm font-semibold flex-1">
              Secundaria
              <Incompleted className="ml-3" />
            </span>
          </div>
        </div>
        <div className="px-6 pt-4 pb-6">
          <h4 className="text-xs text-neutral-400 font-semibold">
            EDUCACIÓN UNIVERSITARIA
          </h4>
          <div className="flex mt-4">
            <span className="text-neutral-800 text-sm font-normal flex-1">
              <span className="font-semibold">Centro de estudios:</span>{" "}
              Universidad Nacional Federico Villareal
            </span>
            <span className="flex text-neutral-800 text-sm font-semibold flex-1">
              Concluido
              <Completed className="ml-3" />
            </span>
          </div>
          <div className="flex mt-2">
            <span className="text-neutral-800 text-sm font-normal flex-1">
              <span className="font-semibold">Carrera:</span> Medicina Humana
            </span>
            <span className="flex text-neutral-800 text-sm font-semibold flex-1">
              Titulado
              <Incompleted className="ml-3" />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 border-neutral-200 border rounded">
        <h3 className="py-4 px-6 border-b border-neutral-200 font-bold text-xl">
          Experiencia Laboral
        </h3>
        <div className="px-6 pt-4 pb-6">
          <h4 className="text-xs text-neutral-400 font-semibold">
            EDUCACIÓN UNIVERSITARIA
          </h4>
          <p className="mt-4 text-neutral-800 text-sm font-normal">
            <span className="font-semibold">Centro de trabajo:</span> Instituto
            Nacional de Enfermedades Neoplasticas
          </p>
          <p className="mt-2 text-neutral-800 text-sm font-normal">
            <span className="font-semibold">Ocupación:</span> Medico Cirugano
          </p>
          <p className="mt-2 text-neutral-800 text-sm font-normal">
            <span className="font-semibold">Periodo:</span> 2001 - Hasta la
            actualidad
          </p>
        </div>
      </div>

      <div className="mt-4 border-neutral-200 border rounded">
        <h3 className="py-4 px-6 border-b border-neutral-200 font-bold text-xl">
          Ingreso de Bienes y Rentas
        </h3>
        <div className="px-6 pt-4 pb-6 border-b border-neutral-200">
          <h4 className="text-xs text-neutral-400 font-semibold">INGRESOS</h4>
          <div className="flex">
            <div className="flex flex-col mt-4">
              <p className="text-neutral-800 text-sm font-normal">
                Sector Público
              </p>
              <p className="mt-2 text-neutral-800 text-2xl font-normal">
                S/ 55,981
              </p>
            </div>
            <div className="flex flex-col mt-4 ml-36">
              <p className="text-neutral-800 text-sm font-normal">
                Sector Privado
              </p>
              <p className="mt-2 text-neutral-800 text-2xl font-normal">
                S/ 5,731
              </p>
            </div>
            <div className="flex flex-col mt-4 ml-36">
              <p className="text-neutral-800 text-sm font-normal">Total</p>
              <p className="mt-2 text-neutral-800 text-2xl font-normal">
                S/ 61,712
              </p>
            </div>
          </div>
        </div>
        <div className="px-6 pt-4 pb-6 border-b border-neutral-200">
          <h4 className="text-xs text-neutral-400 font-semibold">
            BIENES INMUEBLES
          </h4>
          <div className="flex">
            <div className="flex flex-col mt-4">
              <p className="text-neutral-800 text-sm font-normal">
                Departamento
              </p>
              <p className="mt-2 text-neutral-800 text-2xl font-normal">
                S/ 45,388
              </p>
            </div>
            <div className="flex flex-col mt-4 ml-36">
              <p className="text-neutral-800 text-sm font-normal">
                Departamento
              </p>
              <p className="mt-2 text-neutral-800 text-2xl font-normal">
                S/ 118,545
              </p>
            </div>
            <div className="flex flex-col mt-4 ml-36">
              <p className="text-neutral-800 text-sm font-normal">
                Estacionamiento
              </p>
              <p className="mt-2 text-neutral-800 text-2xl font-normal">
                S/ 13,750
              </p>
            </div>
            <div className="flex flex-col mt-4 ml-36">
              <p className="text-neutral-800 text-sm font-normal">
                Estacionamiento
              </p>
              <p className="mt-2 text-neutral-800 text-2xl font-normal">
                S/ 11,668
              </p>
            </div>
          </div>
        </div>
        <div className="px-6 pt-4 pb-6">
          <h4 className="text-xs text-neutral-400 font-semibold">
            BIENES MUEBLES
          </h4>
          <div className="flex">
            <div className="flex flex-col mt-4">
              <p className="text-neutral-800 text-sm font-normal">Auto</p>
              <p className="mt-2 text-neutral-800 text-2xl font-normal">
                S/ 113,668
              </p>
            </div>
            <div className="flex flex-col mt-4 ml-36">
              <p className="text-neutral-800 text-sm font-normal">Camioneta</p>
              <p className="mt-2 text-neutral-800 text-2xl font-normal">
                S/ 140,700
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
