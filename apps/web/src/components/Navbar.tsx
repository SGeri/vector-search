import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row px-16 py-8">
      <div className="flex flex-grow flex-row items-center">
        <Link className="mr-16 h-32 w-32 rounded-full bg-gray-200" href="/" />

        <div className="flex flex-row gap-16 text-lg">
          <Link className="" href="/knowledge">
            Knowledge
          </Link>
          <Link href="/resources">Resources</Link>
          <Link href="/upload">Upload</Link>
          <Link href="/connections">Connections</Link>
          <Link href="/logs">Logs</Link>
        </div>
      </div>
      <div className="flex grow-0 items-center justify-center">
        <div className="flex h-12 w-28 items-center justify-center rounded-xl border-2 bg-transparent">
          <p className="text-md text-center">Login</p>
        </div>
      </div>
    </nav>
  );
}
