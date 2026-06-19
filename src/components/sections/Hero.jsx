
import AnimatedSection from '../common/AnimatedSection';
import BG from '../../assets/background.svg'


const Hero = () => {
  return (
    <section
      className={`min-h-[75vh] md:min-h-[98vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat`}
      id="hero"
      style={{
        backgroundImage: `url("${BG}")`
      }}
    >
      <div className="mx-auto px-6 sm:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-[53px] font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
              RemoteRecruit’s <span className="text-blue-300">Difference</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="text-lg sm:text-xl md:text-[20px] text-blue-50/90 max-w-3xl mx-auto leading-relaxed mb-10">
              RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time, part-time, and freelance workers showcase their talents to businesses that need them. With no paywalls, no fees, and no barriers, there’s nothing but you, your talents, and the next step in your career.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero