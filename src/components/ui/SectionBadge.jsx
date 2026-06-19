const SectionBadge = ({ children, className = '' }) => {
  return (
    <span
      className={`inline-block px-4 py-1.5 text-xs font-semibold tracking-wide uppercase rounded-full bg-primary-light/10 text-primary-light ${className}`}
    >
      {children}
    </span>
  );
};

export default SectionBadge;
