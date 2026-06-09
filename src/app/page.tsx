import Link from "next/link";
import { potteryPieces } from "@/data/pottery";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Gallery Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {potteryPieces.map((piece) => (
            <Link key={piece.id} href={`/gallery/${piece.id}`}>
              <div className="group cursor-pointer">
                {/* Image */}
                <div className="bg-gray-200 aspect-square mb-4 overflow-hidden rounded-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={piece.images[0]}
                    alt={piece.name}
                    className="w-full h-full object-cover group-hover:opacity-80 transition"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Link */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-gray-200 mt-8">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            Interested in a piece? Get in touch.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-gray-900 text-white text-sm font-light hover:bg-gray-800 transition"
          >
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}