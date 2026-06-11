import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './about.module.css'

export const metadata = {
  title: 'About — Nikki Mehrjerdian',
}

export default function About() {
  return (
    <>
      <Nav />

      <section className={styles.aboutHero}>
        <p className="bracket-label">[About me]</p>
      </section>

      <div className={styles.aboutGrid}>
        <div className={styles.bioCol}>
          <p className={styles.bioText}>
            <strong>Hey! I&apos;m Nikki Mehrjerdian,</strong> a product designer based in Atlanta,
            Georgia. Currently at Roadie, leading design for the Driver app — a platform that
            connects everyday people to same-day delivery opportunities.
          </p>
          <p className={styles.bioText}>
            I care deeply about the people who use the things I design. My work lives at the
            intersection of systems thinking and human-centered design — whether that&apos;s
            building Roadie&apos;s first dynamic sizing logic, rethinking driver onboarding flows,
            or untangling complex 0-to-1 problems with research at the center.
          </p>
          <p className={styles.bioText}>
            Outside of work, [add something personal — hobbies, interests, what makes you you].
          </p>
        </div>

        <div className={styles.photoCol}>
          {/* Replace with: <Image src="/your-photo.jpg" alt="Nikki Mehrjerdian" width={600} height={800} style={{borderRadius: '16px', width: '100%', height: 'auto'}} /> */}
          <div className={styles.photoPlaceholder} />
        </div>
      </div>

      <section className={styles.quoteSection}>
        <span className={styles.quoteMark}>&ldquo;</span>
        <p className={styles.quoteText}>Simplicity is the ultimate sophistication.</p>
        <p className={styles.quoteAttr}>— Leonardo da Vinci</p>
      </section>

      <section className={styles.skillsSection}>
        <p className="bracket-label">[Skills &amp; Tools]</p>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <h3>Design</h3>
            <ul className={styles.skillList}>
              <li>Product Design</li>
              <li>UX Research</li>
              <li>Interaction Design</li>
              <li>Design Systems</li>
              <li>0–1 Product Work</li>
            </ul>
          </div>
          <div className={styles.skillCard}>
            <h3>Methods</h3>
            <ul className={styles.skillList}>
              <li>User Interviews</li>
              <li>Usability Testing</li>
              <li>Journey Mapping</li>
              <li>Competitive Analysis</li>
              <li>Prototyping</li>
            </ul>
          </div>
          <div className={styles.skillCard}>
            <h3>Tools</h3>
            <ul className={styles.skillList}>
              <li>Figma</li>
              <li>Framer</li>
              <li>Maze</li>
              <li>Jira / Confluence</li>
              <li>Notion</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
