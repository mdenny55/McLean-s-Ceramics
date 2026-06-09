"use client";

import Link from "next/link";
import { potteryPieces } from "@/data/pottery";
import { useState } from "react";
import { use } from "react";

export default function PieceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const piece = potteryPieces.find((p) => p.id === id);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  if (!piece) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">Piece not found</h1>
          <Link href="/" className="text-gray-600 hover:text-gray-900 underline">
            Back to gallery
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Back link */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 underline">
          ← Back to gallery
        </Link>
      </div>

      {/* Detail Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="space-y-4">
              {piece.images.map((img, idx) => (
                <div
                  key={idx}
                  className="bg-gray-200 aspect-square overflow-hidden rounded-sm cursor-pointer hover:opacity-80 transition"
                  onClick={() => setSelectedImageIndex(idx)}
                >
                  <img
                    src={img}
                    alt={`${piece.name} - view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 className="text-4xl font-light text-gray-900 mb-2">{piece.name}</h1>
            
            {/* Dimensions */}
            <div className="bg-gray-50 p-6 rounded-sm mb-6">
              <h2 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                Dimensions
              </h2>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-light">Height:</span> {piece.height}
                </p>
                <p>
                  <span className="font-light">Width:</span> {piece.width}
                </p>
                <p>
                  <span className="font-light">Depth:</span> {piece.depth}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed">{piece.description}</p>
            </div>

            {/* Price */}
            {piece.price && (
              <div className="mb-6">
                <p className="text-2xl font-light text-gray-900">{piece.price}</p>
              </div>
            )}

            {/* Contact */}
            <div className="border-t pt-6">
              <p className="text-sm text-gray-600 mb-4">
                Interested in this piece? Get in touch!
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-gray-900 text-white text-sm font-light hover:bg-gray-800 transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src={piece.images[selectedImageIndex]}
              alt="Full resolution"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Close button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 text-white text-3xl hover:opacity-70 transition"
            >
              ×
            </button>

            {/* Navigation arrows */}
            {selectedImageIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex(selectedImageIndex - 1);
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl hover:opacity-70 transition"
              >
                ‹
              </button>
            )}
            
            {selectedImageIndex < piece.images.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex(selectedImageIndex + 1);
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl hover:opacity-70 transition"
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
