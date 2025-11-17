export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} Rose&apos;s Ceramics. All rights reserved.
      </div>
    </footer>
  );
}
