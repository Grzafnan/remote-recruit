import AnimatedSection from '../common/AnimatedSection';
import SectionBadge from '../ui/SectionBadge';
import feeFreeImg from '../../assets/images/fee-free@2x.png';

const FeeFreeForever = () => {
  return (
    <section
      className="py-20 md:py-28 bg-white"
      id="fee-free-forever"
      aria-labelledby="fee-free-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1">
            <AnimatedSection direction="left" delay={0.2}>
              <img
                src={feeFreeImg}
                alt="Premium membership tier card showing features including 25 active job posts, premium placement, unlimited messaging, and upcoming payment of $79.99 in 14 days"
                decoding="async"
                className="w-full max-w-lg lg:max-w-none mx-auto drop-shadow-2xl"
                width="960"
                height="1100"
              />
            </AnimatedSection>
          </div>
          <div className="flex-1">
            <AnimatedSection direction="right">
              <SectionBadge>Actually Fee Free</SectionBadge>
              <h2
                id="fee-free-heading"
                className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-text-dark mt-5 mb-6 leading-tight"
              >
                Fee-Free Forever
              </h2>
              <p className="text-text-gray text-base md:text-lg leading-relaxed max-w-lg">
                We don&apos;t charge you fees and we don&apos;t put up paywalls. We&apos;re
                the bridge that connects job opportunities with the best candidates,
                with no middleman involved.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeFreeForever;
