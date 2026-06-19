import logoImg from "../../assets/icons/logo.svg"
import footerImg from "../../assets/images/footer-bg.svg";

const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all duration-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer
      className="pt-10 min-h-[634px] mb-0 pb-0 bg-cover bg-center bg-no-repeat"
      role="contentinfo"
      id="footer"
      style={{
        backgroundImage: `url("${footerImg}")`
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-100 flex justify-between items-end gap-8">
          <a href="#" className="flex items-center gap-2" aria-label="RemoteRecruit home">
            <img title='home' alt='logo' src={logoImg} width={123} height={50} decoding="async" />
          </a>
          <div className="boder flex items-center gap-3" aria-label="Social media links">
            <SocialIcon href="#" label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="#" label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="#" label="Twitter">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="#" label="YouTube">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="#" label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-12 flex justify-center items-center pb-4 border-t-1 border-primary-light/50">
        <svg
          width="48"
          height="40"
          viewBox="0 0 144 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M113.941 65.3323C119.682 62.4529 124.27 58.428 127.624 53.1845C131.059 47.8124 132.771 41.725 132.771 34.9158C132.771 24.8183 129.277 16.478 122.298 9.88465C115.311 3.29437 106.533 0 95.9488 0H51.0223L63.1031 21.0952H94.4009C99.1045 21.0952 102.832 22.3718 105.575 24.9189C108.314 27.465 109.691 30.7512 109.691 34.7685C109.691 38.7847 108.314 42.0583 105.575 44.579C102.832 47.1047 99.1045 48.3671 94.4009 48.3671H78.7113L118.488 117.832H144C144 117.832 115.736 68.4737 113.941 65.3323Z"
            fill="#50C0E3"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.0593 52.4966C24.3184 55.3755 19.7307 59.4024 16.3748 64.647C12.9418 70.0175 11.2288 76.1039 11.2288 82.9156C11.2288 93.0111 14.7233 101.353 21.7022 107.947C28.6898 114.536 37.467 117.832 48.0527 117.832H92.9781L80.8953 96.7337H49.6C44.8954 96.7337 41.1683 95.4591 38.4271 92.9115C35.6854 90.3659 34.3108 87.0802 34.3108 83.063C34.3108 79.0462 35.6854 75.7732 38.4271 73.2509C41.1683 70.7257 44.8954 69.4648 49.6 69.4648H65.2865L25.5112 0H0C0 0 28.2656 49.3582 30.0593 52.4966Z"
            fill="white"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
