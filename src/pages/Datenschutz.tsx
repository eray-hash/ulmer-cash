import LegalPage from '../components/LegalPage'

export default function Datenschutz() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <div>
        <h2 className="font-display text-base font-bold text-navy-800">
          1. Verantwortlicher
        </h2>
        <p className="mt-2">
          Verantwortlich für die Datenverarbeitung im Zusammenhang mit dieser Website ist:
        </p>
        <p className="mt-2">
          Andreas Mayer Holding UG (haftungsbeschränkt)
          <br />
          Schwabstraße 3, 89075 Ulm
          <br />
          Vertreten durch den Geschäftsführer: Andreas Mayer
          <br />
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
          2. Umfang der Datenverarbeitung
        </h2>
        <p className="mt-2">
          Diese Website verzichtet bewusst auf Cookies, Analyse- oder Tracking-Tools sowie auf
          ein Kontaktformular. Es werden keine über den technischen Betrieb der Website
          hinausgehenden personenbezogenen Daten erhoben oder gespeichert. Kontaktaufnahmen
          erfolgen ausschließlich über die auf der Website angegebenen statischen Kontaktdaten
          (Telefonnummer und E-Mail-Adresse als mailto:/tel:-Links), wobei die eigentliche
          Kommunikation dann außerhalb dieser Website in Ihrem E-Mail-Programm bzw. Ihrer
          Telefon-App stattfindet.
        </p>
      </div>

      <div>
        <h2 className="font-display text-base font-bold text-navy-800">3. Hosting</h2>
        <p className="mt-2">
          Diese Website wird bei GitHub Pages, einem Angebot der GitHub Inc.,
          88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA (bzw. für Nutzer im EWR:
          GitHub B.V., Prins Bernhardplein 200, 1097 JB Amsterdam, Niederlande), gehostet. Beim
          Aufruf dieser Website verarbeitet der Hosting-Anbieter technisch bedingt
          Server-Zugriffslogs, die unter anderem die IP-Adresse des aufrufenden Geräts
          enthalten können. Diese Verarbeitung dient ausschließlich der technischen
          Bereitstellung und Absicherung der Website und liegt in der Natur des genutzten
          Hosting-Dienstes; sie kann dabei auch außerhalb der Europäischen Union erfolgen.
          Weitere Informationen entnehmen Sie bitte der Datenschutzerklärung von GitHub:{' '}
          <a
            href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-700 underline decoration-gold-400 underline-offset-2 hover:text-gold-600"
          >
            GitHub Privacy Statement
          </a>
          .
        </p>
      </div>

      <div>
        <h2 className="font-display text-base font-bold text-navy-800">
          4. Ihre Rechte als betroffene Person
        </h2>
        <p className="mt-2">
          Ihnen stehen nach Maßgabe der geltenden datenschutzrechtlichen Bestimmungen die
          folgenden Rechte zu: Recht auf Auskunft, Recht auf Berichtigung, Recht auf Löschung,
          Recht auf Einschränkung der Verarbeitung, Recht auf Widerspruch gegen die
          Verarbeitung sowie das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde.
          Für Anliegen zum Datenschutz wenden Sie sich bitte an die oben genannte
          Kontaktadresse.
        </p>
      </div>
    </LegalPage>
  )
}
