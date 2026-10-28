import { Link } from 'react-router-dom'

const stats = [
  { num: '50,000+', label: 'Active Learners' },
  { num: '1,200+', label: 'Courses' },
  { num: '98%', label: 'Satisfaction' },
  { num: '60+', label: 'Countries' },
]

const features = [
  { icon: '📚', title: 'Smart Course Builder', desc: 'Drag-and-drop modules, quizzes, and multimedia lessons in minutes. AI-assisted outlines.' },
  { icon: '📊', title: 'Deep Analytics', desc: 'Track engagement, completion rates and skill gaps with real-time dashboards.' },
  { icon: '🎥', title: 'Live Virtual Classes', desc: 'HD video, whiteboards, breakout rooms and recordings - all built in.' },
  { icon: '🎮', title: 'Gamification', desc: 'Badges, leaderboards and XP systems that keep learners motivated and coming back.' },
  { icon: '🤖', title: 'AI Tutor', desc: 'Personalized recommendations and 24/7 assistance tailored to each learner.' },
  { icon: '🔒', title: 'Enterprise Security', desc: 'SSO, role-based access, and SOC2-compliant infrastructure for peace of mind.' },
]

const testimonials = [
  { quote: 'Nexora transformed how we onboard our 2,000+ employees. Completion rates jumped 4x in three months.', name: 'Aisha Daniels', role: 'Head of L&D, Northwind', initials: 'AD' },
  { quote: 'The 3D labs let my students experiment safely. Engagement has never been higher.', name: 'Prof. Marcus Reed', role: 'STEM Department, Globex University', initials: 'MR' },
  { quote: 'From setup to launch in under a week. The UX is genuinely delightful.', name: 'Lena Kim', role: 'Founder, Learnly', initials: 'LK' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grid-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-white/80 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-2 animate-pulse" /> New: AI-Powered Learning Paths
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Empower Learning.<br /><span className="gradient-text">Transform Futures.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/70 mb-8">
            The all-in-one learning management system that turns courses into experiences. Track progress, engage learners, and scale knowledge - beautifully.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/courses" className="px-7 py-3.5 rounded-xl bg-brand text-white font-semibold hover:bg-brand/80 transition shadow-lg shadow-brand/30 inline-flex items-center gap-2">
              Start Free Trial <span>→</span>
            </Link>
            <Link to="/features" className="px-7 py-3.5 rounded-xl glass text-white font-semibold hover:bg-white/10 transition inline-flex items-center gap-2">
              ▶ Watch Demo
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl font-bold gradient-text">{s.num}</div>
                <div className="text-sm text-white/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted */}
      <section className="border-y border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-white/50 mb-4">Trusted by forward-thinking teams</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/40 font-display text-lg">
            {['Acme Corp','Northwind','Globex','Umbrella','Initech','Hooli','Stark Ind.','Wayne Ent.'].map(n=>(
              <span key={n}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-widest text-brand-2">Features</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">Everything you need to <span className="gradient-text">teach & grow</span></h2>
          <p className="text-white/60 mt-3 max-w-2xl mx-auto">A complete toolkit designed for modern educators and ambitious teams.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => (
            <div key={f.title} className="glass rounded-2xl p-6 hover:border-brand/40 transition hover:-translate-y-1">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-sm uppercase tracking-widest text-brand-2">Immersive Learning</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4 leading-tight">Bring lessons to life with <span className="gradient-text">3D experiences</span></h2>
            <p className="text-white/60 mb-6">From virtual labs to interactive 3D models, Nexora lets you build experiences that students can explore - not just watch.</p>
            <ul className="space-y-2 mb-6">
              {['Interactive 3D models & virtual labs','AR/VR-ready content pipelines','Progress tracked per interaction','Works on any device, no installs'].map(i=>(
                <li key={i} className="flex items-center gap-2 text-white/80"><span className="text-brand-2">✓</span>{i}</li>
              ))}
            </ul>
            <Link to="/features" className="px-6 py-3 rounded-xl bg-brand text-white font-semibold hover:bg-brand/80 transition inline-block">Explore Solutions</Link>
          </div>
          <div className="glass rounded-3xl aspect-square flex items-center justify-center text-6xl">🌐</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-10">
          <span className="text-sm uppercase tracking-widest text-brand-2">Stories</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">Loved by <span className="gradient-text">learners & educators</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="glass rounded-2xl p-6">
              <p className="text-white/80 italic mb-4">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-brand-2 flex items-center justify-center text-sm font-bold">{t.initials}</div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-white/50">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-3">Ready to transform how your team learns?</h2>
          <p className="text-white/60 mb-6">Join 50,000+ learners already on Nexora.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/courses" className="px-7 py-3.5 rounded-xl bg-brand text-white font-semibold hover:bg-brand/80 transition">Get Started Free</Link>
            <Link to="/contact" className="px-7 py-3.5 rounded-xl glass text-white font-semibold hover:bg-white/10 transition">Talk to Sales</Link>
          </div>
        </div>
      </section>
    </>
  )
}