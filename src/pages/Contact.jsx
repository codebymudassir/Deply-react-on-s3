import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const fields = [
    { name: 'name', label: 'Full name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'subject', label: 'Subject', type: 'text' },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <span className="text-sm uppercase tracking-widest text-brand-2">Contact</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">Let's <span className="gradient-text">talk learning</span>.</h1>
          <p className="text-white/60 mb-8">Questions about pricing, demos, or partnerships? Reach out and we'll respond within one business day.</p>
          <div className="space-y-4 text-sm text-white/70">
            <div className="flex items-center gap-3"><span>✉</span> hello@nexoralms.com</div>
            <div className="flex items-center gap-3"><span>📍</span> San Francisco, CA</div>
            <div className="flex items-center gap-3"><span>📞</span> +1 (555) 012-3456</div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-4">
          {sent && <div className="rounded-lg bg-green-500/20 border border-green-500/40 text-green-300 text-sm px-4 py-2">Message sent! We'll be in touch soon.</div>}
          {fields.map(({ name, label, type }) => (
            <div key={name}>
              <label className="block text-sm text-white/70 mb-1">{label}</label>
              <input name={name} type={type} value={form[name]} onChange={handleChange} required
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand outline-none text-white placeholder-white/40" />
            </div>
          ))}
          <div>
            <label className="block text-sm text-white/70 mb-1">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} required rows={4}
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand outline-none text-white resize-none" />
          </div>
          <button type="submit" className="w-full py-3 rounded-xl bg-brand text-white font-semibold hover:bg-brand/80 transition">Send Message</button>
        </form>
      </div>
    </section>
  )
}