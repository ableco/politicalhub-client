import Link from "next/link";

export function Nav() {
  return (
    <nav className="p-4 border-b border-neutral-200">
      <div className="flex flex-no-wrap flex-row items-center justify-start max-w-screen-lg m-auto">
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
            className="text-neutral-400 text-xs"
          >
            <img
              src="/instagram.svg"
              title="Instagram"
              alt="Instagram"
              width="16"
              className="inline mr-2"
            />
            hazteuna_
          </a>
          <a
            href="https://instagram.com/impulsopais"
            target="_blank"
            className="text-neutral-400 text-xs"
          >
            <img
              src="/instagram.svg"
              title="Instagram"
              alt="Instagram"
              width="16"
              className="inline mr-2"
            />
            impulsopais
          </a>
          {/* <a className="text-neutral-800 text-xs">Login</a> */}
        </div>
      </div>
    </nav>
  );
}
