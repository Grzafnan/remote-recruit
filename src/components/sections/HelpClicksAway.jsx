import AnimatedSection from '../common/AnimatedSection';
import Button from '../ui/Button';
import jobBoardImg from '../../assets/images/job-board.png';

const GetStartedIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="24" cy="24" r="24" fill="url(#ctaGrad)" />
    <path
      d="M32.3178 16.9548C33.2637 16.0234 34.7855 16.035 35.717 16.9809C36.5768 17.854 36.6329 19.2179 35.8925 20.1551L35.6909 20.38L22.257 33.6091C21.3751 34.4775 19.9948 34.5249 19.0584 33.7652L18.8341 33.5585L12.8929 27.3512C11.975 26.3922 12.0083 24.8707 12.9673 23.9528C13.8525 23.1055 15.2171 23.0687 16.1437 23.8224L16.3657 24.0272L20.621 28.4711L32.3178 16.9548Z"
      fill="white"
    />
    <defs>
      <linearGradient id="ctaGrad" x1="-22.2298" y1="29.8519" x2="28.0035" y2="75.9783" gradientUnits="userSpaceOnUse">
        <stop stopColor="#52B4DA" />
        <stop offset="0.999763" stopColor="#1E3E85" />
      </linearGradient>
    </defs>
  </svg>
);

const HelpClicksAway = () => {
  return (
    <AnimatedSection direction='up'>
      <section
        className="relative md:py-28 h-[60vh]  bg-gradient-to-r from-[#5799EB] to-primary-[#9F74FB] md:bg-cover no-repeat md:bg-center"
        style={{
          backgroundImage: `url("${jobBoardImg}")`
        }}
        id="help-clicks-away"
        aria-labelledby="help-heading"
      >
        <div className="w-full absolute left-1/2 -translate-x-1/2 -bottom-[550px] md:left-auto md:bottom-auto md:-translate-x-0 md:right-0 md:top-1/2 md:translate-x-auto md:-translate-y-1/2 md:w-[50%] mx-auto py-6 md:px-6 lg:px-8 bg-primary-light/5 md:bg-transparent">
          <AnimatedSection className="flex justify-center mb-10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-gold to-amber-400 shadow-lg shadow-accent-gold/30" />
          </AnimatedSection>

          <div className="flex flex-col lg:flex-row justify-center items-center md:justify-end md:items-end md:me-0">
            <div className="w-full md:flex-1 text-center md:text-start" >
              <AnimatedSection direction="right">
                <p className="text-primary-light font-semibold text-sm mb-2 tracking-wide">
                  Are you ready?
                </p>
                <h2
                  id="help-heading"
                  className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-text-dark mb-6 leading-tight"
                >
                  Help is only a few
                  <br />
                  clicks away!
                </h2>
                <p className="text-text-gray text-base md:text-lg leading-relaxed mb-8">
                  Click below to get set up super
                  <br />
                  quickly and find help now!
                </p>
                <Button
                  variant="cta"
                  icon={<GetStartedIcon />}
                  id="cta-get-started-btn"
                >
                  Get Started
                </Button>

                {/* Decorative Blue Dot */}
                <div className="mt-10 flex justify-start">
                  <div className="w-3 h-3 rounded-full bg-primary-light" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>

  );
};

export default HelpClicksAway;
