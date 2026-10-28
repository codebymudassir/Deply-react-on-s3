const tiers = [
  { name: 'Starter', price: '$0', sub: '/mo', desc: 'For individuals getting started.', features: ['Up to 3 courses','100 learners','Basic analytics','Community support'], cta: 'Get Started', featured: false },
  { name: 'Professional', price: '$49', sub: '/mo', desc: 'For growing teams and educators.', features: ['Unlimited courses','5,000 learners','Advanced analytics','Live classes & AI tutor','Priority support'], cta: 'Start Free Trial', featured: true },
  { name: 'Enterprise', price: 'Custom', sub: '', desc: 'For large organizations.', features: ['Unlimited everything','SSO & SCIM','Dedicated success manager','Custom integrations','SLA guarantee'], cta: 'Contact Sales', featured: false },
]

export default function Pricing() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <span className="text-sm uppercase tracking-widest text-brand-2">Pricing</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-3">Simple, transparent <span className="gradient-text">pricing</span></h1>
        <p className="text-white/60 mt-3">Start free, scale when you are ready. No hidden fees.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map(t => (
          <div key={t.name} className={`glass rounded-2xl p-7 relative ${t.featured ? 'ring-2 ring-brand scale-105' : ''}`}>
            {t.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand text-xs font-semibold">Most Popular</span>}
            <h3 className="font-display text-2xl font-semibold mb-1">{t.name}</h3>
            <div className="mb-2"><span className="text-4xl font-display font-bold">{t.price}</span><span className="text-white/50">{t.sub}</span></div>
            <p className="text-sm text-white/60 mb-5">{t.desc}</p>
            <ul className="space-y-2 mb-6 text-sm">
              {t.features.map(f => <li key={f} className="flex items-center gap-2"><span className="text-brand-2">✓</span>{f}</li>)}
            </ul>
            <button className={`w-full py-3 rounded-xl font-semibold transition ${t.featured ? 'bg-brand text-white hover:bg-brand/80' : 'glass hover:bg-white/10'}`}>{t.cta}</button>
          </div>
        ))}
      </div>
    </section>
  )
}