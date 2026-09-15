import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

import styles from '../case-study.module.css'

export const metadata = {
  title: 'Find Me Gigs — Nikki Mehrjerdian',
}

export default function FindMeGigs() {
  return (
    <>
      <Nav />

      <Link href="/" className={styles.backLink}>
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
          <path d="M10 3L5 8l5 5" />
        </svg>
        Back to work
      </Link>

      <div className={styles.heroImage} >
      <img src="/images/find-me-gigs/find-me-gigs-card.png" alt="Find Me Gigs" />        
      </div>


      {/* HEADER */}
      <section className={styles.header}>
        <p className={styles.eyebrow}>ROADIE · DRIVER APP</p>
        <h1 className={styles.title}>Find Me Gigs</h1>
        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>MY ROLE</p>
            <p className={styles.metaVal}>Sole Designer</p>
          </div>
           <div className={styles.metaItem}>
            <p className={styles.metaLabel}>RESPONSIBILITIES</p>
            <p className={styles.metaVal}>Research, E2E Design, Design System</p>
          </div>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>TEAM</p>
            <p className={styles.metaVal}>Product, Data Science, FE Engineering</p>
          </div>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>PLATFORMS</p>
            <p className={styles.metaVal}>iOS and Android</p>
          </div>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>YEAR</p>
            <p className={styles.metaVal}>2024</p>
          </div>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>OUTCOME</p>
            <p className={styles.metaVal}>Shipped</p>
          </div>
        </div>
      </section>

 
      {/* THE PROBLEM */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>THE PROBLEM</p>
        <p className={styles.secHeading}>Finding more gigs meant watching the map while driving. Drivers had no better way to do it.</p>
        <p className={styles.bodyText}>Once on a route, drivers could only pick up additional gigs by monitoring the map and submitting offers manually; refreshing while driving, competing with other drivers, waiting for acceptance, all while completing current route tasks. Not only was unsafe and inefficient for drivers, but also for the business since gigs were being priced as if no nearby driver existed.</p>
        <p className={styles.bodyText} style={{ color: 'var(--blue-primary)', fontWeight: 600 }}>I was brought on this project after data science had already locked the core mechanics. Given the business-led mechanics already in place, my challenge was to make this feature feel trusting, clear, and fair for drivers to encourage adoption.</p>
      </section>

    

      {/* DESIGN CONTEXT */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>TECH-LED CONSTRAINTS</p>
        <div className={styles.ddList}>
          <div className={styles.ddRow}>
            <span className={styles.goalNum}>01</span>
            <div className={styles.ddContent}>
              <p className={styles.ddTitle}>60-second window</p>
              <p className={styles.ddBody}>Set by the algorithm. Design had to make the offer card scannable in under 5 seconds.</p>
            </div>
          </div>
          <div className={styles.ddRow}>
            <span className={styles.goalNum}>02</span>
            <div className={styles.ddContent}>
              <p className={styles.ddTitle}>One-at-a-time cascade</p>
              <p className={styles.ddBody}>Offer logic and driver sequencing were fixed. Notification timing was outside design's control.</p>
            </div>
          </div>
          <div className={styles.ddRow}>
            <span className={styles.goalNum}>03</span>
            <div className={styles.ddContent}>
              <p className={styles.ddTitle}>Compressed timeline</p>
              <p className={styles.ddBody}>Data science had already built the backend and was ready to ship. Design joined with limited runway to shape the experience before launch.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sec}>
        <p className={styles.secEyebrow}>DISCOVERY</p>
        <p className={styles.bodyText}>Before launch, I conducted driver research to measure comprehension and reaction to the feature. This research effort identified key areas we needed to focus on to ensure a smooth transition when introducing such a drastic change to what drivers had been accustomed to for so long. One of the biggest focus points was factors drivers weigh when offering on a gig.</p>
        <div className={styles.insightImage}>
          <img src="/images/decision-factors.png" alt="Top decision factors" style={{ width: '100%', borderRadius: '10px' }} />
        </div>
        <div className={styles.darkBlock}>
          <p className={styles.darkBlockText}>Pay ranked highest in what drivers said they needed, but it wasn't what drove their decisions. When A/B testing gig offer cards, drivers chose the card that focused on route complexity, stop count alongside time and mileage, over the one that led with pay.</p>
        </div>
        <p className={styles.bodyText} style={{ marginTop: '1rem' }}>That gap between stated preference and tested behavior became the north star for the core decisions for the MVP of this feature - <b>focusing on what changes to the driver's plan, not just what they'll earn.</b>
        </p>
      </section>

        

      {/* KEY DESIGN DECISIONS */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>KEY DESIGN DECISIONS</p>
        <p className={styles.bodyText}>The research insights revealed key factors drivers need to make quick yet informed decisions on the road.</p>
        <div className={styles.designDecisions}>
          <div className={styles.ddRow}>
            <div className={styles.ddIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
              </svg>
            </div>
            <div className={styles.ddContent}>
              <p className={styles.ddTitle}>Show incremental time and mileage, not total route</p>
              <p className={styles.ddBody}>Drivers care about what changes to their current plan, not the full picture. We needed to cognitive load mid-delivery.</p>
               <p className={styles.ddQuote}>"I need to know what this is going to change, I'm already delivering 20+ packages on a full route."</p>

            </div>
          </div>
          <div className={styles.ddRow}>
        <div className={styles.ddIcon}>
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"/><circle cx="12" cy="9" r="2.2"/>
              </svg>
            </div>
            <div className={styles.ddContent}>
              <p className={styles.ddTitle}>Surface stop count as the primary hierarchy signal</p>
              <p className={styles.ddBody}>Drivers already have map context. Stop count told them exactly how much more complex their route would become before they committed.</p>
              <p className={styles.ddQuote}>"Knowing how many stops helps me plan the rest of my day and other jobs."</p>
            </div>
          </div>
          <div className={styles.ddRow}>
            <div className={styles.ddIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            <div className={styles.ddContent}>
              <p className={styles.ddTitle}>60-second window forced ruthless prioritization</p>
              <p className={styles.ddBody}>A constraint we didn't set became a design forcing function. Every element had to earn its place to ensure the time allowed sufficient time to make a decision.</p>
              <p className={styles.ddQuote}>"While on time-sensitive gigs" and "actively driving between traffic lights" were the top scenarios where drivers couldn't act on offers in given time.</p>

            </div>
          </div>
       
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className={styles.gfcPhase}>
        <p className={styles.secEyebrow}>THE SOLUTION</p>

        {/* 01 entry */}
        <div className={styles.solutionPart}>
          <div className={styles.solutionHeader}>
            <p className={styles.solutionNum}>01</p>
            <p className={styles.solutionTitle}>Getting started with Find Me Gigs</p>
          </div>
          <div className={styles.offerFlowLarge}>
            <div className={styles.offerFlowLargeHeader}>
              <p className={styles.offerFlowLargeTitle}>Toggle to enable feature</p>
              <p className={styles.offerFlowLargeDesc}>The toggle is the gate to the entire feature. Once a driver is assigned to a route, they'll be able to view and turn on this toggle to indicate they're open to additional offers.  </p>
            </div>
            <Image src="/images/find-me-gigs/feature-education.gif" alt="Feature education screen" width={800} height={450} unoptimized className={styles.gifPlaceholder} />
          </div>
        
        <div className={styles.offerFlowLarge}>
            <div className={styles.offerFlowLargeHeader}>
              <p className={styles.offerFlowLargeTitle}>Feature education</p>
              <p className={styles.offerFlowLargeDesc}>Before drivers receive their first offer, they're introduced to the feature through an in-app education moment. This sets expectations on what Find Me Gigs is, how the toggle works, and what to expect when an offer arrives.</p>
            </div>
            <Image src="/images/find-me-gigs/feature-education.gif" alt="Feature education screen" width={800} height={450} unoptimized className={styles.gifPlaceholder} />
          </div>
        </div>

        {/* 02 Receiving offers */}
        <div className={styles.solutionPart}>
          <div className={styles.solutionHeader}>
            <p className={styles.solutionNum}>02</p>
            <p className={styles.solutionTitle}>Receiving offers while on a route</p>
          </div>
          <p className={styles.bodyText}>Early concepts led with pay, which matched what drivers said they wanted most. Testing showed that was the wrong call: in a head-to-head test, drivers chose the version leading with route complexity, stops, time, and mileage 69% of the time, rating it 4.42/5 for ease of accepting versus 31% for the pay-first version.</p>
          <p className={styles.ddQuote} >"It's easier to see the details of the additional time and stops. The other puts too much emphasis on the total payment."</p>
          <p className={styles.bodyText}>The shipped card leads with route impact, pay second: push notifications rank pay, mileage, pickup location, gig size, and item dimensions in that tested order, with the pickup shown on the map in context of the current route. A visible but unobtrusive countdown lets drivers stay focused on the road.</p>
            <Image src="/images/find-me-gigs/offer-card.gif" alt="Offer card appearance, details, and map integration after accept" width={800} height={450} unoptimized className={styles.gifPlaceholder} />
        </div>

<div className={styles.solutionPart}>
          <div className={styles.solutionHeader}>
            <p className={styles.solutionNum}>03</p>
            <p className={styles.solutionTitle}>Capturing rejection reasons in the moment</p>
          </div>
          <p className={styles.bodyText}>Rather than wait for the next research cycle, we added an in-app prompt after a driver declines an Add-On, capturing why in the moment. It gave us an ongoing read on rejection reasons instead of relying on periodic surveys alone.</p>
            <Image src="/images/find-me-gigs/offer-card.gif" alt="Offer card appearance, details, and map integration after accept" width={800} height={450} unoptimized className={styles.gifPlaceholder} />
        </div>


</section>

      {/* THE FIGHT AFTER LAUNCH */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>THE FIGHT AFTER LAUNCH</p>
        <p className={styles.secHeading}>Drivers lost map access when they accepted an Add-On. It was the wrong call, and the data proved it fast.</p>
        <p className={styles.bodyText}>At launch, drivers who accepted an Add-On temporarily lost the ability to browse gigs on the map, a restriction built into the initial version. It became the strongest negative reaction in the post-launch survey. 92% of drivers said they kept manually checking the map anyway, even with Find Me Gigs turned on, evidence that removing the option didn't reduce demand for it. It just added friction and made drivers feel like agency had been taken away.</p>
        <p className={styles.bodyText}>I pushed data science to remove the restriction and restore map access for drivers already assigned to a gig, addressing the top complaint from the survey directly.</p>

        
        <p className={styles.bodyText}>The rest of the survey findings, requests like more time to review offers, clearer item dimensions, notifications that work with navigation apps, all helped influence our product roadmap, covered at the end of the page.</p>
      </section>

      {/* IMPACT */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>IMPACT</p>
        <p className={styles.impactIntro}>The original goals were to get drivers off the map while driving, close the pricing gap on gigs with no visible nearby driver, and make picking up additional work effortless. Post-release survey and behavioral data confirmed the approach.</p>

        <div>
            <div className={styles.impactStatGrid}>
              <div className={styles.impactStatCard}>
                <p className={styles.impactStatNum}>58%</p>
                <p className={styles.impactStatTitle}>Overall acceptance rate on Add-On gigs</p>
                <p className={styles.impactStatDesc}>Drivers accepted more than half of proactively surfaced Add-On offers, resulting in fewer manual map checks and safer behavior on active routes.</p>
              </div>
              <div className={styles.impactStatCard}>
                <p className={styles.impactStatNum}>4.42/5</p>
                <p className={styles.impactStatTitle}>Ease-of-use rating from the A/B testing cohort</p>
                <p className={styles.impactStatDesc}>Measured on accepting gigs in under 60 seconds, faster pickup decisions mean higher throughput per driver shift.</p>
              </div>
              <div className={styles.impactStatCard}>
                <p className={styles.impactStatNum}>$1.03</p>
                <p className={styles.impactStatTitle}>Saved per gig vs. standard map-published pricing</p>
                <p className={styles.impactStatDesc}>Proactive matching means gigs get priced accurately instead of assuming no nearby drivers.</p>
              </div>
            </div>
        </div>
      </section>


      {/* WHAT'S NEXT */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>WHAT'S NEXT</p>
        <p className={styles.bodyText}>Find Me Gigs laid the groundwork for a larger platform shift; moving from a model where drivers hunt for gigs on a map to a dispatch model where the platform does the matching, whether a driver is on a route or not. The next phase of this work is currently being worked on and will expand to allow for offers when drivers are not already assigned to gigs.</p>
      </section>

      <div className={styles.nextProject}>
        <div>
          <p className={styles.nextLabel}>NEXT PROJECT</p>
          <Link href="/work/vehicle-data-collection" className={styles.nextTitle}>
            Vehicle Data Collection →
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
