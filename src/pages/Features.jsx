const feats = [
  { icon: '📚', title: 'Smart Course Builder', desc: 'Drag-and-drop modules, quizzes, and multimedia lessons in minutes. AI-assisted outlines.' },
  { icon: '📊', title: 'Deep Analytics', desc: 'Track engagement, completion rates and skill gaps with real-time dashboards.' },
  { icon: '🎥', title: 'Live Virtual Classes', desc: 'HD video, whiteboards, breakout rooms and recordings - all built in.' },
  { icon: '🎮', title: 'Gamification', desc: 'Badges, leaderboards and XP systems that keep learners motivated and coming back.' },
  { icon: '🤖', title: 'AI Tutor', desc: 'Personalized recommendations and 24/7 assistance tailored to each learner.' },
  { icon: '🔒', title: 'Enterprise Security', desc: 'SSO, role-based access, and SOC2-compliant infrastructure for peace of mind.' },
  { icon: '📱', title: 'Mobile First', desc: 'Responsive by design — learn on any device, online or offline.' },
  { icon: '🧩', title: 'Integrations', desc: 'Connect to Slack, Zoom, Stripe, and 100+ tools via API.' },
]

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <span className="text-sm uppercase tracking-widest text-brand-2">Features</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-3">Everything you need to <span className="gradient-text">teach & grow</span></h1>
        <p className="text-white/60 mt-3 max-w-2xl mx-auto">A complete toolkit designed for modern educators and ambitious teams.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {feats.map(f => (
          <div key={f.title} className="glass rounded-2xl p-5 hover:border-brand/40 transition hover:-translate-y-1">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-display font-semibold mb-1.5">{f.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}