import Link from "next/link";

export function Nav() {
  return (
    <nav className="p-4 border-b border-neutral-200">
      <div className="flex flex-no-wrap flex-row items-center justify-start px-8 lg:px-52">
        <div className="flex flex-no-wrap flex-row items-center justify-start space-x-5">
          <Link href="/">
            <a className="text-neutral-800 font-bold">
              <img
                src="/logo.svg"
                title="Votemos.pe"
                alt="Votemos.pe"
                width="156"
              />
            </a>
          </Link>
        </div>
        <div style={{ flexGrow: 1 }} />
        <div className="flex flex-no-wrap flex-row items-center justify-start space-x-5">
          <a className="text-primary-base text-xs">¿Quieres ayudar?</a>
          {/* <a className="text-neutral-800 text-xs">Login</a> */}
        </div>
      </div>
    </nav>
  );
}
