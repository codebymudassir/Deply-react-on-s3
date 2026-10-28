const courses = [
  { title: 'Introduction to Web Development', instructor: 'Aisha Daniels', lessons: 42, hours: 18, level: 'Beginner', price: '$49', emoji: '🌐' },
  { title: 'Data Science Foundations', instructor: 'Prof. Marcus Reed', lessons: 56, hours: 24, level: 'Intermediate', price: '$79', emoji: '📊' },
  { title: 'UX Design Masterclass', instructor: 'Lena Kim', lessons: 38, hours: 14, level: 'Beginner', price: '$69', emoji: '🎨' },
  { title: 'Machine Learning in Practice', instructor: 'Aisha Daniels', lessons: 62, hours: 30, level: 'Advanced', price: '$129', emoji: '🤖' },
  { title: '3D Modeling & Animation', instructor: 'Prof. Marcus Reed', lessons: 30, hours: 12, level: 'Intermediate', price: '$89', emoji: '🎮' },
  { title: 'Leadership for Managers', instructor: 'Lena Kim', lessons: 22, hours: 8, level: 'Beginner', price: 'Free', emoji: '🏆' },
]

const levelColor = { Beginner: 'bg-green-500/20 text-green-300', Intermediate: 'bg-yellow-500/20 text-yellow-300', Advanced: 'bg-red-500/20 text-red-300' }

export default function Courses() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <span className="text-sm uppercase tracking-widest text-brand-2">Courses</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3">Explore our <span className="gradient-text">catalog</span></h1>
        </div>
        <input placeholder="Search courses..." className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand outline-none text-white w-full sm:w-64" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(c => (
          <div key={c.title} className="glass rounded-2xl overflow-hidden hover:-translate-y-1 transition group">
            <div className="aspect-[4/3] bg-gradient-to-br from-brand/40 to-brand-2/30 flex items-center justify-center text-6xl">{c.emoji}</div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs px-2.5 py-1 rounded-full ${levelColor[c.level]}`}>{c.level}</span>
                <span className="font-display font-bold text-brand-2">{c.price}</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-brand-2 transition">{c.title}</h3>
              <p className="text-sm text-white/50 mb-4">by {c.instructor}</p>
              <div className="flex items-center gap-4 text-xs text-white/50">
                <span>📖 {c.lessons} lessons</span>
                <span>⏱ {c.hours}h</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}