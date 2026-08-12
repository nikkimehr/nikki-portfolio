import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PhaseToggle from './PhaseToggle'

import styles from '../case-study.module.css'

export const metadata = {
  title: 'Vehicle Data Collection — Nikki Mehrjerdian',
}

// Drop image paths here when screens are ready — up to 4 per state, per
// phase, rendered left to right at equal height with no background/card
// behind them. The toggle below each phase switches between these sets.
const phase1Screens = { before: [], after: [] }
const phase2Screens = { before: [], after: [] }
const phase3Screens = { before: [], after: [] }

export default function VehicleDataCollection() {

  return (
    <>
      <Nav />

      <Link href="/" className={styles.backLink}>
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
          <path d="M10 3L5 8l5 5" />
        </svg>
        Back to work
      </Link>

      <div className={styles.heroImage} />

      {/* HEADER */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>ROADIE · DRIVER APP</p>
        <h1 className={styles.title}>Multi-phase effort to collect & build vehicle data foundation</h1>
        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>MY ROLE</p>
            <p className={styles.metaVal}>Sole Designer</p>
          </div>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>RESPONSIBILITIES</p>
            <p className={styles.metaVal}>Research, Strategy, E2E Design, Design System</p>
          </div>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>TEAM</p>
            <p className={styles.metaVal}>Product, BE & FE Engineering</p>
          </div>
           <div className={styles.metaItem}>
            <p className={styles.metaLabel}>PLATFORMS</p>
            <p className={styles.metaVal}>iOS, Android, Web</p>
          </div>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>YEAR</p>
            <p className={styles.metaVal}>2024 – 2025</p>
          </div>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>OUTCOME</p>
            <p className={styles.metaVal}>Shipped</p>
          </div>
        </div>
      </div>


      {/* THE PROBLEM */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>THE PROBLEM</p>
        <h2 className={styles.secHeading}>Drivers were gaming the system, and everyone was paying for it.</h2>
        <p className={styles.bodyText}>Roadie had no way to verify the vehicle a driver showed up with. Because gig access was tied to vehicle size on profile, drivers had a clear incentive to list a larger vehicle than they actually had. Warehouse observations found roughly <b>80%</b> of drivers arriving in a smaller vehicle than their profile claimed.</p>
        <p className={styles.bodyText}>This created cascading problems: drivers arrived at pickups to find items that wouldn't fit, senders dealt with delays and failed deliveries, and Support was flooded with manual cancellations.</p>
        
      <div className={styles.darkBlock}>
          <p className={styles.darkBlockText}>Drivers weren't necessarily acting in bad faith, the system made misrepresentation the path of least resistance.</p>
      </div>

       
        <div className={styles.imageContainer} />
      </section>

      {/* THE SOLUTION */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>THE SOLUTION</p>
        <h2 className={styles.secHeading}>Four phases. From a single unverified vehicle to a managed, verified profile.</h2>
      </section>

      {/* PHASE 1 */}
      <section className={`${styles.phaseSection} ${styles.phaseTintA}`}>
        <div className={styles.phaseInner}>
          <span className={styles.phaseEyebrow}>PHASE 1</span>
          <p className={styles.phaseSectionTitle}>Vehicle Data Collection</p>
          <p className={styles.phaseBody}>Multi-vehicle profile with active vehicle toggle, license plate and proof of insurance submission with OCR analysis, inline error states and retry logic. Gig requirements tied to vehicle data, available to senders on-demand.</p>

          <PhaseToggle before={phase1Screens.before} after={phase1Screens.after} />


          <div className={styles.phaseMetrics}>
            <div className={styles.phaseMetricCard}>
              <p className={styles.phaseMetricValue}>[Metric 1]</p>
              <p className={styles.phaseMetricLabel}>Description of what changed or improved</p>
            </div>
            <div className={styles.phaseMetricCard}>
              <p className={styles.phaseMetricValue}>[Metric 2]</p>
              <p className={styles.phaseMetricLabel}>Description of what changed or improved</p>
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 2 */}
      <section className={`${styles.phaseSection} ${styles.phaseTintB}`}>
        <div className={styles.phaseInner}>
          <span className={styles.phaseEyebrow}>PHASE 2</span>
          <p className={styles.phaseSectionTitle}>Registration Integration</p>

          <PhaseToggle before={phase2Screens.before} after={phase2Screens.after} />

          <p className={styles.phaseBody}>License plate submission added to onboarding so new drivers arrive already verified. VIN lookup runs at the end of registration, catching mismatches before a driver ever offers on a gig.</p>

          <div className={styles.phaseMetrics}>
            <div className={styles.phaseMetricCard}>
              <p className={styles.phaseMetricValue}>[Metric 1]</p>
              <p className={styles.phaseMetricLabel}>Description of what changed or improved</p>
            </div>
            <div className={styles.phaseMetricCard}>
              <p className={styles.phaseMetricValue}>[Metric 2]</p>
              <p className={styles.phaseMetricLabel}>Description of what changed or improved</p>
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 3 */}
      <section className={`${styles.phaseSection} ${styles.phaseTintA}`}>
        <div className={styles.phaseInner}>
          <span className={styles.phaseEyebrow}>PHASE 3</span>
          <p className={styles.phaseSectionTitle}>Driver Education Improvements</p>

          <PhaseToggle before={phase3Screens.before} after={phase3Screens.after} />

          <p className={styles.phaseBody}>Support ticket analysis revealed drivers were confused about what was required and what to do after a failure. Redesigned empty states, failure messaging, and progress indicators drove the pass rate from 43% to 75%.</p>

          <div className={styles.phaseMetrics}>
            <div className={styles.phaseMetricCard}>
              <p className={styles.phaseMetricValue}>[Metric 1]</p>
              <p className={styles.phaseMetricLabel}>Description of what changed or improved</p>
            </div>
            <div className={styles.phaseMetricCard}>
              <p className={styles.phaseMetricValue}>[Metric 2]</p>
              <p className={styles.phaseMetricLabel}>Description of what changed or improved</p>
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 4 */}
      <section className={`${styles.phaseSection} ${styles.phaseTintB}`}>
        <div className={styles.phaseInner}>
          <span className={styles.phaseEyebrow}>PHASE 4</span>
          <p className={styles.phaseSectionTitle}>Coming Soon</p>
          <div className={styles.placeholderBlock}>
            <p>Content coming soon</p>
          </div>
        </div>
      </section>

 {/* IMPACT */}
   {/*/*  <section className={styles.sec}>
        <p className={styles.secEyebrow}>IMPACT</p>
        <div className={styles.impactGrid}>
          <div className={styles.impactCard}>
            <p className={styles.impactNum}>78.8%</p>
            <p className={styles.impactLabel}>Driver verification rate</p>
            <p className={styles.impactDesc}>Drivers now have both a VIN and license plate on file, up from near 0% at launch</p>
          </div>
          <div className={styles.impactCard}>
            <p className={styles.impactNum}>~70%</p>
            <p className={styles.impactLabel}>Reduction in size-related support cases</p>
            <p className={styles.impactDesc}>From peaks of 50–70 cases/day to under 20/day by 2026</p>
          </div>
          <div className={styles.impactCard}>
            <p className={styles.impactNum}>43% → 75%</p>
            <p className={styles.impactLabel}>Insurance card pass rate</p>
            <p className={styles.impactDesc}>Driven by iterative error state and education improvements over 18 months</p>
          </div>
          <div className={styles.impactCard}>
            <p className={styles.impactNum}>830K+</p>
            <p className={styles.impactLabel}>Drivers with verified license plates</p>
            <p className={styles.impactDesc}>394,322 additionally verified with VIN via LP lookup or insurance card OCR</p>
          </div>
        </div>
      </section>} */}


      {/* NEXT PROJECT */}
      <div className={styles.nextProject}>
        <div>
          <p className={styles.nextLabel}>NEXT PROJECT</p>
          <Link href="/work/verizon-smart-family" className={styles.nextTitle}>
            Smart Family Locations →
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
