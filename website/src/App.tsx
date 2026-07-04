import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { 
  Hero, 
  TrustedBy, 
  CoreExpertise, 
  Services, 
  Process, 
  CaseStudies, 
  Insights, 
  FAQ, 
  CTA 
} from './components/sections';

function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden font-primary text-neutral-500 selection:bg-primary-200 selection:text-primary-900">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <TrustedBy />
        <CoreExpertise />
        <Services />
        <Process />
        <CaseStudies />
        <Insights />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
