import Link from "next/link";
import HazteUna from "./Icons/HazteUna";
import ImpulsoPais from "./Icons/ImpulsoPais";

export function Nav() {
  return (
    <nav className="p-4 border-b border-neutral-200">
      <div className="flex flex-no-wrap flex-col sm:flex-col md:flex-row items-center justify-center sm:justify-center md:justify-start max-w-screen-lg m-auto">
        <div className="flex flex-no-wrap flex-row items-center justify-start space-x-5">
          <Link href="/">
            <a className="text-neutral-800 font-bold">
              <img
                src="/logo.svg"
                title="YoVoto.pe"
                alt="YoVoto.pe"
                width="156"
              />
            </a>
          </Link>
        </div>
        <div style={{ flexGrow: 1 }} />
        <div className="flex flex-no-wrap flex-row items-center justify-start space-x-5">
          <a
            href="https://instagram.com/hazteuna_"
            target="_blank"
            className="flex flex-no-wrap flex-row items-center space-x-1 text-neutral-400 text-xs"
          >
            <HazteUna width={null} height="24" />
            <img
              src="/instagram.svg"
              title="Instagram"
              alt="Instagram"
              width="16"
              className="inline mr-2"
            />
            <span>hazteuna_</span>
          </a>
          <a
            href="https://instagram.com/impulsopais"
            target="_blank"
            className="flex flex-no-wrap flex-row items-center space-x-1 text-neutral-400 text-xs"
          >
            <ImpulsoPais height="24" />
            <img
              src="/instagram.svg"
              title="Instagram"
              alt="Instagram"
              width="16"
              className="inline mr-2"
            />
            <span>impulsopais</span>
          </a>
          {/* <a className="text-neutral-800 text-xs">Login</a> */}
        </div>
      </div>
    </nav>
  );
}
