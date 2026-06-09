export default function Footer() {
  return (
    <footer className="bg-gray-400 border-t border-gray-500 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} McLean&apos;s Ceramics. All handmade.</p>
      </div>
    </footer>
  );
}
