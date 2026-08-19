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

      <div className={styles.heroImage} />

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
      </section>

    

      {/* DESIGN CONTEXT */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>DESIGN CONSTRAINTS</p>
        <p className={styles.bodyText}>Find Me Gigs was conceived and built by data science before product and design were brought in. Core mechanics were already locked by the time I joined. My role was to make a pre-defined system feel intentional and driver-friendly, not shape what it did.</p>
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
              <p className={styles.ddTitle}>Toggle as opt-in</p>
              <p className={styles.ddBody}>Mechanism was predetermined. Design focused on framing it as driver empowerment.</p>
            </div>
          </div>
          <div className={styles.ddRow}>
            <span className={styles.goalNum}>04</span>
            <div className={styles.ddContent}>
              <p className={styles.ddTitle}>Compressed timeline</p>
              <p className={styles.ddBody}>Data science had already built the backend and was ready to ship. Design joined with limited runway to shape the experience before launch.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sec}>
        <p className={styles.secEyebrow}>DISCOVERY</p>
        <p className={styles.bodyText}>Before launch, a usability test (297 responses, drivers with 20+ gigs in the past 30 days) measured comprehension and reaction to the concept alongside the decision factors drivers weigh when offering on a gig.</p>
        <div className={styles.insightImage}>
          <img src="/images/decision-factors.png" alt="Top decision factors: Pay 89%, Mileage/distance 81%, Location on map 67%, Gig size 60%, Item dimensions 53%, Number of stops 42%, Number of items 36%" style={{ width: '100%', borderRadius: '10px' }} />
        </div>
        <p className={styles.bodyText}>84% rated the acceptance flow easy or very easy, and nearly every participant understood what Add-Ons were without explanation. The open question was what belonged on the offer card itself.</p>
        <div className={styles.quoteRow}>
          <div className={styles.ddQuote}>"It will provide an opportunity to automatically recommend an additional offer along my current route; having me check the screen less while driving."</div>
          <div className={styles.ddQuote}>"It's easier because it's almost like you're being selected instead of having to wait for them to accept you."</div>
        </div>
      </section>

      {/* KEY INSIGHT */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>KEY INSIGHT</p>
        <div className={styles.darkBlock}>
          <p className={styles.darkBlockText}>Pay ranked highest in what drivers said they needed, but it wasn't what drove their decisions. When tested head-to-head, drivers chose the card that showed route complexity, stop count alongside time and mileage, over the one that led with pay.</p>
        </div>
        <p className={styles.bodyText} style={{ marginTop: '1rem' }}>That gap between stated preference and tested behavior became the north star for every decision below: show what changes to the driver's plan, not just what they'll earn.</p>
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
              <p className={styles.ddBody}>Drivers care about what changes to their current plan, not the full picture. Surfacing the delta reduced cognitive load mid-delivery.</p>
              <p className={styles.ddQuote}>"For me it's easier to see the details of the additional time and stops. The other puts too much emphasis on the total payment."</p>
            </div>
          </div>
          <div className={styles.ddRow}>
            <div className={styles.ddIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
              </svg>
            </div>
            <div className={styles.ddContent}>
              <p className={styles.ddTitle}>Surface stop count as the primary hierarchy signal</p>
              <p className={styles.ddBody}>Drivers already have map context. Stop count told them exactly how much more complex their route would become before they committed.</p>
              <p className={styles.ddQuote}>"Knowing how many stops helps, and how long to accept. The other option didn't clearly show stops."</p>
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
              <p className={styles.ddBody}>A constraint we didn't set became a design forcing function. Every element had to earn its place; extra detail was cut, essential signals elevated.</p>
              <p className={styles.ddQuote}>"Should be a bit easier to read; maybe add a speak button to read text aloud while navigating."</p>
            </div>
          </div>
          <div className={styles.ddRow}>
            <div className={styles.ddIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div className={styles.ddContent}>
              <p className={styles.ddTitle}>58.8% timeout is the open problem</p>
              <p className={styles.ddBody}>Drivers aren't rejecting; they're missing offers mid-delivery. Smarter notification timing, not information design, is what needs to change next.</p>
              <p className={styles.ddQuote}>"While on time-sensitive gigs" and "actively driving between traffic lights" were the top scenarios where drivers couldn't act on offers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>THE SOLUTION</p>

        {/* 01 Toggle */}
        <div className={styles.solutionPart}>
          <div className={styles.solutionHeader}>
            <p className={styles.solutionNum}>01</p>
            <p className={styles.solutionTitle}>Toggle to enable gig offers</p>
          </div>
          <p className={styles.bodyText}>The toggle is the gate to the entire feature. It needs to communicate state clearly while drivers are on active routes. Three iterations led to the final pattern.</p>

          <div className={styles.toggleEvolution}>
            <div className={styles.toggleIter}>
              <Image src="/images/find-me-gigs/toggle-iteration-1.png" alt="Iteration 1 — pill with icon and descriptive text 'Searching for nearby gigs...'" width={400} height={300} unoptimized className={styles.toggleIterImage} />
              <div className={styles.toggleIterMeta}>
                <p className={styles.toggleIterLabel}>Iteration 1: Context-heavy</p>
                <p className={styles.toggleIterPro}>Clear intent; explains what's happening</p>
                <p className={styles.toggleIterCon}>Too wordy for glanceable UI; drivers need clarity, not explanation</p>
              </div>
            </div>
            <div className={styles.toggleIterArrow}>↓</div>
            <div className={styles.toggleIter}>
              <Image src="/images/find-me-gigs/toggle-iteration-2.png" alt="Iteration 2 — pill with icon and action button 'GO'" width={400} height={300} unoptimized className={styles.toggleIterImage} />
              <div className={styles.toggleIterMeta}>
                <p className={styles.toggleIterLabel}>Iteration 2: Action-oriented</p>
                <p className={styles.toggleIterPro}>Emphasizes driver agency with explicit call-to-action</p>
                <p className={styles.toggleIterCon}>FIX THIS COPY -- Potential to result in confusion with the expected on/off toggle, not tap to activate</p>
              </div>
            </div>
            <div className={styles.toggleIterArrow}>↓</div>
            <div className={`${styles.toggleIter} ${styles.toggleIterFinal}`}>
              <Image src="/images/find-me-gigs/toggle-final.png" alt="Final — simple toggle with status label 'Looking for Gigs' / 'Recommend Gigs'" width={400} height={300} unoptimized className={styles.toggleIterImage} />
              <div className={styles.toggleIterMeta}>
                <p className={styles.toggleIterLabelFinal}>Final: Familiar toggle pattern</p>
                <p className={styles.toggleIterPro}>Recognizable mental model; clear on/off states; minimal distraction on active route</p>
              </div>
            </div>
          </div>
        </div>

        {/* 02 Receiving offers */}
        <div className={styles.solutionPart}>
          <div className={styles.solutionHeader}>
            <p className={styles.solutionNum}>02</p>
            <p className={styles.solutionTitle}>Receiving offers while on a route</p>
          </div>
          <p className={styles.bodyText}>When a driver has the toggle on, they receive push notifications of compatible gigs. Drivers need to scan and decide within 60 seconds.</p>

          {/* Feature education */}
          <div className={styles.offerFlowLarge}>
            <div className={styles.offerFlowLargeHeader}>
              <p className={styles.offerFlowLargeTitle}>Feature education</p>
              <p className={styles.offerFlowLargeDesc}>Before drivers receive their first offer, they're introduced to the feature through an in-app education moment. This sets expectations on what Find Me Gigs is, how the toggle works, and what to expect when an offer arrives.</p>
            </div>
            <Image src="/images/find-me-gigs/feature-education.gif" alt="Feature education screen" width={800} height={450} unoptimized className={styles.gifPlaceholder} />
          </div>

          {/* Gig offer card — research integrated */}
          <div className={styles.offerFlowLarge}>
            <div className={styles.offerFlowLargeHeader}>
              <p className={styles.offerFlowLargeTitle}>Gig offer card and route integration</p>
              <p className={styles.offerFlowLargeDesc}>In-app notification surfaces pay, mileage, pickup location, gig size, and item dimensions in ranked order from research. When accepted, the pickup appears on the map in context of the current route. Drivers see the relationship to where they are before committing.</p>
            </div>
            <Image src="/images/find-me-gigs/offer-card.gif" alt="Offer card appearance, details, and map integration after accept" width={800} height={450} unoptimized className={styles.gifPlaceholder} />
            <div className={styles.abResearch}>
              <p className={styles.abResearchLabel}>HOW RESEARCH SHAPED THIS</p>
              <p className={styles.abResearchSub}>An A/B test settled the information hierarchy.</p>

              <p className={styles.abTestColHeading}>Why we tested this</p>
              <div className={styles.abTestWhyList}>
                <p className={styles.abTestWhyItem}>Pay ranked highest in what drivers said they needed, but it wasn't what drove their decisions in testing.</p>
                <p className={styles.abTestWhyItem}>Needed to know whether route complexity or pay should lead the information hierarchy on the offer card.</p>
                <p className={styles.abTestWhyItem}>The 60-second decision window meant only one signal could lead; the card couldn't hedge.</p>
              </div>

              <p className={styles.abTestColHeading} style={{ marginTop: '1.5rem' }}>Validated outcomes</p>
              <p className={styles.abTestValidatedIntro}>Tested head-to-head, the stop-count version won decisively:</p>
              <div className={styles.abGrid}>
                <div className={`${styles.abCard} ${styles.abCardWinner}`}>
                  <span className={styles.abLabelWinner}>✓ Winner — 69% selected</span>
                  <Image src="/images/find-me-gigs/ab-winner.png" alt="Winning card design — stop count alongside time and mileage" width={600} height={300} unoptimized className={styles.abScreen} />
                  <p className={styles.abResultWin}>Stop count alongside time + mileage</p>
                  <div className={styles.abCardStats}>
                    <div>
                      <p className={styles.abCardStatNum}>4.42/5</p>
                      <p className={styles.abCardStatLabel}>ease of accepting</p>
                    </div>
                    <div>
                      <p className={styles.abCardStatNum}>4.51/5</p>
                      <p className={styles.abCardStatLabel}>likelihood to use on a route</p>
                    </div>
                    <div>
                      <p className={styles.abCardStatNum}>66%</p>
                      <p className={styles.abCardStatLabel}>rated accepting "very easy"</p>
                    </div>
                    <div>
                      <p className={styles.abCardStatNum}>70%</p>
                      <p className={styles.abCardStatLabel}>would "always" use it on a route</p>
                    </div>
                  </div>
                </div>
                <div className={styles.abCard}>
                  <span className={styles.abLabelLoser}>31% selected</span>
                  <Image src="/images/find-me-gigs/ab-loser.png" alt="Losing card design — pay-first, no route complexity signal" width={600} height={300} unoptimized className={styles.abScreen} />
                  <p className={styles.abResultLose}>Pay-first, no route complexity signal</p>
                </div>
              </div>

              <p className={styles.bodyText} style={{ marginTop: '1.5rem' }}>Drivers needed route complexity, how much their plan changes, not just pay. Stop count gave them that in a single glance.</p>
            </div>
          </div>

          {/* Decision interactions */}
          <div className={styles.offerFlowLarge}>
            <div className={styles.offerFlowLargeHeader}>
              <p className={styles.offerFlowLargeTitle}>Decision interactions</p>
              <p className={styles.offerFlowLargeDesc}>Drivers can accept, decline, or let the 60-second window expire. Each action maps to a clear outcome on their route. The countdown is visible but not aggressive; drivers on an active delivery can dismiss and stay focused.</p>
            </div>
            <Image src="/images/find-me-gigs/decision-interactions.gif" alt="Accept, decline, and timeout interactions with countdown timer" width={800} height={450} unoptimized className={styles.gifPlaceholder} />
          </div>
        </div>

      </section>

      {/* LAUNCH & COURSE CORRECTION */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>LAUNCH & COURSE CORRECTION</p>
        <p className={styles.bodyText}>At launch, drivers who accepted an Add-On temporarily lost the ability to browse gigs on the map, a restriction built into the initial version. It became the strongest negative reaction in the post-launch survey (149 responses): drivers felt like agency had been taken away. The behavioral data backed it up. 92% of drivers said they kept manually checking the map anyway, even with Find Me Gigs turned on, evidence that removing the option didn't reduce demand for it. It just added friction.</p>
        <p className={styles.bodyText}>We pushed data science to remove the restriction and restore map access for drivers already assigned to a gig, addressing the top complaint from the survey directly.</p>

        <div className={styles.offerFlowLarge}>
          <div className={styles.offerFlowLargeHeader}>
            <p className={styles.offerFlowLargeTitle}>Capturing rejection reasons in the moment</p>
            <p className={styles.offerFlowLargeDesc}>Rather than wait for the next research cycle, we added an in-app prompt after a driver declines an Add-On, capturing why in the moment. It gave us an ongoing read on rejection reasons instead of relying on periodic surveys alone.</p>
          </div>
          <Image src="/images/find-me-gigs/rejection-prompt.png" alt="In-app feedback prompt after declining an Add-On" width={800} height={450} unoptimized className={styles.gifPlaceholder} />
        </div>

        <p className={styles.bodyText}>The rest of the survey findings, more time to review offers, clearer item dimensions, notifications that work with navigation apps, became input for the roadmap, covered in What's Next.</p>
      </section>

      {/* IMPACT */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>IMPACT</p>
        <p className={styles.secHeading}>Testing validated the shift from map-hunting to proactive matching.</p>
        <p className={styles.impactIntro}>The original goals were to get drivers off the map while driving, close the pricing gap on gigs with no visible nearby driver, and make picking up additional work effortless. Post-release survey (n=149) and behavioral data confirmed the approach.</p>

        <div className={styles.impactCols}>
          <div>
            <p className={styles.impactColHeading}>Why it mattered</p>
            <div className={styles.impactPredictedList}>
              <p className={styles.impactPredictedItem}>📈 Fewer manual map checks → Safer behavior on active routes</p>
              <p className={styles.impactPredictedItem}>📈 Proactive matching → Gigs priced accurately instead of assuming no nearby driver</p>
              <p className={styles.impactPredictedItem}>📈 Faster pickup decisions → Higher throughput per driver shift</p>
            </div>
          </div>

          <div>
            <p className={styles.impactColHeading}>Validated outcomes</p>
            <p className={styles.impactValidatedIntro}>Compared with the prior map-hunting experience, drivers showed:</p>

            <div className={styles.impactStatCard}>
              <p className={styles.impactStatNum}>58%</p>
              <p className={styles.impactStatTitle}>Overall acceptance rate on POTO notifications</p>
              <p className={styles.impactStatDesc}>Drivers accepted more than half of proactively surfaced offers without manually searching the map.</p>
            </div>
            <div className={styles.impactStatCard}>
              <p className={styles.impactStatNum}>4.42/5</p>
              <p className={styles.impactStatTitle}>Ease-of-use rating from the A/B testing cohort</p>
              <p className={styles.impactStatDesc}>Measured on accepting gigs in under 60 seconds.</p>
            </div>
            <div className={styles.impactStatCard}>
              <p className={styles.impactStatNum}>$1.03</p>
              <p className={styles.impactStatTitle}>Saved per gig vs. standard map-published pricing</p>
              <p className={styles.impactStatDesc}>POTO savings, market level L28.</p>
            </div>
          </div>
        </div>

        <p className={styles.bodyText} style={{ marginTop: '2rem' }}>Timeout remains the biggest opportunity. Drivers aren't rejecting; they're missing offers mid-delivery. This signals that smarter notification timing, not information design, is the next problem to solve.</p>
        <div className={styles.chartBlock}>
          <p className={styles.chartTitle}>POTO response rate: accepted vs. rejected vs. timeout (Nov 2025–Apr 2026)</p>
          <p className={styles.chartCap}>Timeout (58.8%) remains the biggest opportunity for improvement in driver engagement.</p>
          <Image src="/images/find-me-gigs/poto-response-chart.png" alt="POTO response rate: accepted vs rejected vs timeout" width={800} height={300} unoptimized className={styles.chartImg} />
        </div>
        <div className={styles.chartBlock}>
          <p className={styles.chartTitle}>Driver opt-in rate by hour; Mar 2026</p>
          <p className={styles.chartCap}>5,000 to 7,000 drivers actively requesting add-ons per peak hour vs. under 1,000 opting out.</p>
          <Image src="/images/find-me-gigs/opt-in-rate-chart.png" alt="Driver opt-in rate by hour" width={800} height={300} unoptimized className={styles.chartImg} />
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
