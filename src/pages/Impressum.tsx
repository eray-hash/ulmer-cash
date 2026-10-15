import LegalPage from '../components/LegalPage'

export default function Impressum() {
  return (
    <LegalPage title="Impressum">
      <div>
        <p>„Ulmer Cash" ist ein Angebot der Andreas Mayer Holding UG (haftungsbeschränkt).</p>
      </div>

      <div>
        <p className="font-display font-semibold text-navy-800">
          Andreas Mayer Holding UG (haftungsbeschränkt)
        </p>
        <p>Schwabstraße 3</p>
        <p>89075 Ulm</p>
      </div>

      <div>
        <p>Vertreten durch den Geschäftsführer: Andreas Mayer</p>
      </div>

      <div>
        <p>Handelsregister: Amtsgericht Ulm, HRB 745056</p>
      </div>

      <div>
        <h2 className="font-display text-base font-bold text-navy-800">Kontakt</h2>
        <p className="mt-2">
          Telefon:{' '}
          <a href="tel:+491788082426" className="text-navy-700 underline decoration-gold-400 underline-offset-2 hover:text-gold-600">
            +49 178 8082426
          </a>
        </p>
        <p>
          E-Mail:{' '}
          <a
            href="mailto:info@amayer-holding.com"
            className="text-navy-700 underline decoration-gold-400 underline-offset-2 hover:text-gold-600"
          >
            info@amayer-holding.com
          </a>
        </p>
      </div>

      <div>
        <h2 className="font-display text-base font-bold text-navy-800">
          Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV
        </h2>
        <p className="mt-2">Andreas Mayer, Anschrift wie oben.</p>
      </div>

      <div>
        <h2 className="font-display text-base font-bold text-navy-800">Streitschlichtung</h2>
        <p className="mt-2">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
          bereit:{' '}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-700 underline decoration-gold-400 underline-offset-2 hover:text-gold-600"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>

      <div>
        <h2 className="font-display text-base font-bold text-navy-800">
          Haftung für Inhalte / Links
        </h2>
        <p className="mt-2">
          Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
          Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir dennoch keine
          Gewähr übernehmen. Diese Website enthält gegebenenfalls Links zu externen Websites
          Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
        </p>
      </div>
    </LegalPage>
  )
}
