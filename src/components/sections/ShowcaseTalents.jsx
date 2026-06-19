import AnimatedSection from '../common/AnimatedSection';
import SectionBadge from '../ui/SectionBadge';
import showcaseImg from '../../assets/images/showcase-talents.png';

const ShowcaseTalents = () => {
  return (
    <section
      className="py-20 md:py-28"
      id="showcase-talents"
      aria-labelledby="showcase-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 order-2 lg:order-1">
            <AnimatedSection direction="left">
              <SectionBadge>Custom Profile</SectionBadge>
              <h2
                id="showcase-heading"
                className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-text-dark mt-5 mb-6 leading-tight"
              >
                Showcase Your Talents
              </h2>
              <p className="text-text-gray text-base md:text-lg leading-relaxed max-w-lg">
                Personalize your profile with everything that makes you unique. Add an
                introductory video and other media for a personal touch that stands out
                to employers and candidates.
              </p>
            </AnimatedSection>
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <AnimatedSection direction="right" delay={0.2}>
              <img
                src={showcaseImg}
                alt="Developer profile showing 102 jobs completed, video introduction, past client feedback, and skill tags including Python, JavaScript, Front End, Back End, and IOS Development"
                decoding="async"
                className="w-full max-w-lg lg:max-w-none mx-auto drop-shadow-2xl"
                width="540"
                height="540"
              />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseTalents;
