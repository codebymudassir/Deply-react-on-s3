export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <span className="text-sm uppercase tracking-widest text-brand-2">About</span>
      <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6">We exist to <span className="gradient-text">make learning stick</span>.</h1>
      <p className="text-lg text-white/70 leading-relaxed mb-8">
        Nexora LMS was built on a simple belief: learning platforms should adapt to the learner, not the other way around. We combine smart course authoring, live virtual classrooms, and AI-assisted tutoring into one beautiful system.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { title: 'Our Mission', desc: 'To empower every educator and learner with tools that respect their time and spark curiosity.' },
          { title: 'Our Vision', desc: 'A world where access to world-class education is a default, not a privilege.' },
          { title: 'Our Values', desc: 'Empathy, craftsmanship, curiosity, and relentless focus on outcomes.' },
        ].map(v => (
          <div key={v.title} className="glass rounded-2xl p-6">
            <h3 className="font-display text-xl font-semibold mb-2">{v.title}</h3>
            <p className="text-white/60 text-sm">{v.desc}</p>
          </div>
        ))}
      </div>
      <h2 className="font-display text-2xl font-bold mb-4">Our journey</h2>
      <div className="space-y-4 border-l border-white/10 pl-6">
        {[
          { year: '2021', text: 'Founded with a team of 4 educators and engineers.' },
          { year: '2022', text: 'Launched live virtual classes and reached 10,000 learners.' },
          { year: '2023', text: 'Introduced AI tutor and gamification suite.' },
          { year: '2024', text: 'Reached 60 countries and 50,000+ active learners.' },
          { year: '2025', text: 'Expanded enterprise with SSO, SCIM and SOC2 compliance.' },
        ].map(m => (
          <div key={m.year} className="relative">
            <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-brand" />
            <span className="text-brand-2 font-semibold">{m.year}</span>
            <p className="text-white/70">{m.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}