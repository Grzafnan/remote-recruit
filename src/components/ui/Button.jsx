const Button = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  icon,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-2xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2';

  const variants = {
    primary: 'bg-gradient-to-r from-primary-dark to-primary-light text-white px-8 py-3 hover:shadow-lg hover:shadow-primary-light/30 hover:-translate-y-0.5 active:translate-y-0',
    outline: 'border-2 border-text-dark text-text-dark px-8 py-3 hover:text-white hover:-translate-y-0.5 active:translate-y-0',
    'outline-light': 'border-2 border-primary-dark text-primary-dark px-8 py-3 hover:bg-primary-dark hover:text-white hover:-translate-y-0.5 active:translate-y-0',
    nav: 'bg-gradient-to-r from-primary-light to-primary-cyan text-white px-6 py-2 text-sm hover:shadow-lg hover:shadow-primary-cyan/30 hover:-translate-y-0.5',
    cta: 'bg-gradient-to-r from-primary-light to-primary-cyan text-white px-8 py-3 hover:shadow-lg hover:shadow-primary-cyan/30 hover:-translate-y-0.5 active:translate-y-0',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
