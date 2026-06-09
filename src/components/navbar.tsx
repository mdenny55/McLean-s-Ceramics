import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Link href="/" className="text-xl font-light text-gray-900">
          McLean&apos;s Ceramics
        </Link>
      </div>
    </nav>
  );
}
