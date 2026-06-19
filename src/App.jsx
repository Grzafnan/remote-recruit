import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import GlobalJobBoard from './components/sections/GlobalJobBoard';
import FeeFreeForever from './components/sections/FeeFreeForever';
import ShowcaseTalents from './components/sections/ShowcaseTalents';
import HelpClicksAway from './components/sections/HelpClicksAway';
import CommonQuestions from './components/sections/CommonQuestions';
import Pricing from './components/sections/Pricing';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen lg:max-w-360 w-full overflow-x-hidden mx-auto">
      <Navbar />
      <main id="main-content">
        <Hero />
        <GlobalJobBoard />
        <FeeFreeForever />
        <ShowcaseTalents />
        <HelpClicksAway />
        <CommonQuestions />
        <Pricing />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
