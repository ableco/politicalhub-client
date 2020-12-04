import Link from "next/link";
import { Menu } from "./Icons";
import { Search } from "./Search";

export function Nav() {
  return (
    <nav className="flex flex-no-wrap flex-row items-center justify-start p-4">
      <div className="flex flex-no-wrap flex-row items-center justify-start space-x-5">
        <span className="text-neutral-800">
          <Menu />
        </span>
        <Link href="/" passHref>
          <a className="text-neutral-800 font-bold">
            votabien
            <span className="text-primary-base font-bold">.pe</span>
          </a>
        </Link>
        <Search />
      </div>
      <div style={{ flexGrow: 1 }} />
      <div className="flex flex-no-wrap flex-row items-center justify-start space-x-5">
        <a className="text-primary-base text-xs">¿Quieres ayudar?</a>
        <a className="text-neutral-800 text-xs">Login</a>
      </div>
    </nav>
  );
}
