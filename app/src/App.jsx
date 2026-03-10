import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import AutomationFlow from './components/AutomationFlow';
import NriOpportunity from './components/NriOpportunity';
import WhoWeAre from './components/WhoWeAre';
import EarlyAccess from './components/EarlyAccess';
import Faq from './components/Faq';
import FinalCta from './components/FinalCta';
import WhatsAppFab from './components/WhatsAppFab';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <AutomationFlow />
      <NriOpportunity />
      <WhoWeAre />
      <EarlyAccess />
      <Faq />
      <FinalCta />
      <WhatsAppFab />
    </>
  );
}
