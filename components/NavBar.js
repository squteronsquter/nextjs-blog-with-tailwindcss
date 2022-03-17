import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul className="flex text-slate-100 justify-center items-center">
          <li className="p-4">
            <Link href="/">
              <a className="uppercase text-xs">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="uppercase text-xs">About Me</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
