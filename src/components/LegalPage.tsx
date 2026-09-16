import type { ReactNode } from 'react'

export default function LegalPage({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="bg-white pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <p className="kicker">Rechtliches</p>
        <h1 className="mt-3 font-display text-3xl font-bold text-navy-800 md:text-4xl">
          {title}
        </h1>
        <div className="divider-gold mt-5" />

        <div className="prose-legal mt-12 space-y-8 text-[15px] leading-relaxed text-navy-600">
          {children}
        </div>
      </div>
    </section>
  )
}
