import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="font-display text-8xl font-bold gradient-text mb-2">404</div>
      <h1 className="font-display text-2xl font-semibold mb-2">Page not found</h1>
      <p className="text-white/60 mb-6">The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="px-6 py-3 rounded-xl bg-brand text-white font-semibold hover:bg-brand/80 transition">Back to Home</Link>
    </section>
  )
}