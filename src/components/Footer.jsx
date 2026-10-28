import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900/60 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand to-brand-2 flex items-center justify-center font-display font-bold text-white text-sm">N</span>
              <span className="font-display text-lg font-bold">Nexora<span className="text-brand-2">LMS</span></span>
            </div>
            <p className="text-sm text-white/60">Empowering educators and learners worldwide.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Product</h4>
            {[['Features','/features'],['Courses','/courses'],['Pricing','/pricing']].map(([l,p])=>(
              <Link key={l} to={p} className="block text-sm text-white/60 hover:text-white py-1">{l}</Link>
            ))}
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            {[['About','/about'],['Contact','/contact']].map(([l,p])=>(
              <Link key={l} to={p} className="block text-sm text-white/60 hover:text-white py-1">{l}</Link>
            ))}
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Legal</h4>
            {['Privacy','Terms','Security','Cookies'].map(l=>(
              <span key={l} className="block text-sm text-white/60 py-1">{l}</span>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between text-xs text-white/50">
          <span>© 2025 Nexora LMS. All rights reserved.</span>
          <div className="flex gap-4 mt-2 sm:mt-0"><span>X</span><span>in</span><span>octo</span></div>
        </div>
      </div>
    </footer>
  )
}