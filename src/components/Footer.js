export default function Footer() {
  return (
    <footer>
      <p className="footer-sub">We&apos;ve made it to the finish line. Say 👋 hi!</p>
      <div className="footer-icons">
        <a
          href="mailto:nikkimehrjerdian8@gmail.com"
          aria-label="Email"
          className="footer-icon-btn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
            <path d="M4 6.5l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/nikkimehrjerdian/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="footer-icon-btn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="8" cy="8.3" r="1.1" fill="currentColor" />
            <path d="M7.9 10.8v6.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M11.8 17.2v-3.6c0-1.3.9-2.3 2.1-2.3s1.9.9 1.9 2.3v3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.8 10.8v6.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
