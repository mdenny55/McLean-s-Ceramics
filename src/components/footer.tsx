export default function Footer() {
  return (
    <footer className="border-t mt-16" style={{backgroundColor: '#8B8A8A', borderColor: '#7a7979'}}>
      <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} McLean&apos;s Ceramics. All handmade.</p>
      </div>
    </footer>
  );
}
