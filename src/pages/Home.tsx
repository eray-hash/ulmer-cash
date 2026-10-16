import Hero from '../components/sections/Hero'
import FundOverview from '../components/sections/FundOverview'
import MarketOpportunity from '../components/sections/MarketOpportunity'
import Pillars from '../components/sections/Pillars'
import ReturnPath from '../components/sections/ReturnPath'
import SparbuchVergleich from '../components/sections/SparbuchVergleich'
import Scenarios from '../components/sections/Scenarios'
import RiskManagement from '../components/sections/RiskManagement'
import InvestmentProcess from '../components/sections/InvestmentProcess'
import InvestorPortalCTA from '../components/sections/InvestorPortalCTA'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <FundOverview />
      <MarketOpportunity />
      <Pillars />
      <ReturnPath />
      <SparbuchVergleich />
      <Scenarios />
      <RiskManagement />
      <InvestmentProcess />
      <InvestorPortalCTA />
      <Contact />
    </>
  )
}
