import AnimatedSection from '../common/AnimatedSection';
import Button from '../ui/Button';
import { pricingPlans } from '../../data/mockData';
import premiumIcon from '../../assets/icons/premium-icon.svg'
import checkIcon from '../../assets/icons/check-icon-1.svg'
import crossIcon from '../../assets/icons/cross-icon.svg'

const PricingCard = ({ plan, delay = 0 }) => {
  const { name, tier, price, period, featured, features } = plan;

  return (
    <AnimatedSection
      delay={delay}
      className={`relative flex flex-col rounded-2xl p-8 md:p-10 transition-all duration-300 bg-white border border-gray-200 shadow-lg hover:shadow-xl`}
    >
      <div className='flex flex-col md:flex-row gap-12 justify-between items-center mb-4'>
        <div className={`relative flex flex-col justify-center items-center rounded-2xl bg-[#ECF2FF] ${!featured ? 'px-10' : 'px-6'} py-16`}>
          {featured && (
            <span className="absolute -top-6 flex gap-x-4 justify-between items-center px-1 py-1 text-xs font-semibold rounded-full text-primary-dark bg-[#C2EEFF] tracking-wide">
              <img src={premiumIcon} alt="Premium tier indicator" className='bg-white w-9 h-8 pt-1 rounded-full' width={36} height={32} decoding="async" />
              <strong className='text-lg pr-4'>Premium</strong>
            </span>
          )}
          <div className="flex justify-center items-center gap-1">
            <span
              className={`text-4xl md:text-4xl font-extrabold text-primary-light`}
            >
              {price}
            </span>
          </div>
          {period && (
            <p className={`text-sm mt-1 text-text-gray font-semibold`}>
              {period}
            </p>
          )}
          {tier && (
            <p className={`text-sm font-semibold mt-1 text-text-gray`}>
              {tier}
            </p>
          )}
        </div>
        <ul className="space-y-4 flex-1" role="list">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6">
                {feature.included ? <img src={checkIcon} alt="Included feature" width={24} height={24} decoding="async" /> : <img src={crossIcon} alt="Not included feature" width={24} height={24} decoding="async" />}
              </span>
              <span
                className={`text-sm md:text-base ${feature.included ? 'text-text-dark' : 'text-text-gray'}`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

      </div>
      <Button
        variant={featured ? 'primary' : 'outline-light'}
        className="w-full"
        id={`pricing-${name.toLowerCase()}-btn`}
      >
        Get Started
      </Button>
    </AnimatedSection>
  );
};

const Pricing = () => {
  return (
    <section
      className="pt-20 md:pt-28 -mb-[15rem]"
      id="pricing"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-text-dark mb-16 text-center"
          >
            Help Is One Click Away
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
