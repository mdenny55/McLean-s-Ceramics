import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-400 border-b border-gray-500">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Link href="/" className="text-xl font-light text-gray-900">
          McLean&apos;s Ceramics
        </Link>
      </div>
    </nav>
  );
}
