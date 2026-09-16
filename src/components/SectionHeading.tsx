interface SectionHeadingProps {
  kicker: string
  title: string
  align?: 'left' | 'center'
  dark?: boolean
}

export default function SectionHeading({
  kicker,
  title,
  align = 'left',
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <p className="kicker">{kicker}</p>
      <h2
        className={`mt-3 font-display text-3xl font-bold leading-tight md:text-4xl ${
          dark ? 'text-white' : 'text-navy-800'
        }`}
      >
        {title}
      </h2>
      <div
        className={`divider-gold mt-5 ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  )
}
