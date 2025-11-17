import GalleryGrid from "@/components/gallerygrid";

export default function GalleryPage() {
  // Example ceramics data (can later come from JSON or CMS)
  const ceramics = [
    {
      title: "Handmade Vase",
      description: "A textured vase with a natural finish.",
      image: "https://placehold.co/400x300?text=Vase",
    },
    {
      title: "Rustic Bowl",
      description: "A rustic, earthy-toned bowl for daily use.",
      image: "https://placehold.co/400x300?text=Bowl",
    },
    {
      title: "Ceramic Mug",
      description: "A cozy mug perfect for tea or coffee.",
      image: "https://placehold.co/400x300?text=Mug",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
      <GalleryGrid items={ceramics} />
    </main>
  );
}
