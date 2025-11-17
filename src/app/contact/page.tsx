// --- src/app/contact/page.tsx ---
export default function ContactPage() {
return (
<main className="max-w-3xl mx-auto px-4 py-16 text-center">
<h1 className="text-4xl font-bold mb-6">Contact</h1>
<p className="text-lg text-gray-700 mb-8">
Have a question, commission request, or just want to say hello? Reach out below:
</p>
<form className="flex flex-col space-y-4 max-w-md mx-auto">
<input
type="text"
placeholder="Your Name"
className="border rounded-lg p-3"
/>
<input
type="email"
placeholder="Your Email"
className="border rounded-lg p-3"
/>
<textarea
placeholder="Your Message"
className="border rounded-lg p-3 h-32"
></textarea>
<button
type="submit"
className="bg-gray-800 text-white py-3 rounded-lg hover:bg-black transition"
>
Send Message
</button>
</form>
</main>
);
}
