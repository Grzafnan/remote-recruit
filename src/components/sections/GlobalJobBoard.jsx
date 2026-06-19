import AnimatedSection from '../common/AnimatedSection';
import SectionBadge from '../ui/SectionBadge';
import jobBoardImg from '../../assets/images/job-board@2x.png';

const GlobalJobBoard = () => {
  return (
    <section
      className="py-20 md:py-28 bg-white"
      id="global-job-board"
      aria-labelledby="global-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content - Left */}
          <div className="flex-1 order-2 lg:order-1">
            <AnimatedSection direction="left">
              <SectionBadge>Global Reach</SectionBadge>
              <h2
                id="global-heading"
                className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-text-dark mt-5 mb-6 leading-tight"
              >
                The First Fully Global Job
                <br />
                Board, Anywhere, Ever
              </h2>
              <p className="text-text-gray text-base md:text-lg leading-relaxed max-w-lg">
                RemoteRecruit connects candidates with opportunities around the world.
                With today&apos;s remote-first workforce, you need to be able to find the
                best jobs and the best people for them, wherever they may be.
              </p>
            </AnimatedSection>
          </div>

          {/* Image - Right */}
          <div className="flex-1 order-1 lg:order-2">
            <AnimatedSection direction="right" delay={0.2}>
              <img
                src={jobBoardImg}
                alt="RemoteRecruit dashboard showing job search with filters, recent jobs listing, and user profile cards for Python Developer and Front End Wizard"
                decoding="async"
                className="w-full max-w-lg lg:max-w-none mx-auto drop-shadow-2xl"
                width="960"
                height="960"
              />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalJobBoard;
