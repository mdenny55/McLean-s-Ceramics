import CeramicCard from "@/components/ceramiccard";

interface GalleryGridProps {
  items: {
    title: string;
    description: string;
    image: string;
  }[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <CeramicCard key={i} {...item} />
      ))}
    </div>
  );
}
