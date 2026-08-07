import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

import styles from '../case-study.module.css'

export const metadata = {
  title: 'Gig Fit Check — Nikki Mehrjerdian',
}

export default function GigFitCheck() {
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
        <h1 className={styles.title}>Reframing a gig sizing problem into Roadie's first dynamic fit check experience</h1>
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
            <p className={styles.metaVal}>Product, Data Science, BE & FE Engineering</p>
          </div>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>PLATFORMS</p>
            <p className={styles.metaVal}>iOS, Android</p>
          </div>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>YEAR</p>
            <p className={styles.metaVal}>2025</p>
          </div>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>OUTCOME</p>
            <p className={styles.metaVal}>Shipped - live for 75% of drivers</p>
          </div>
        </div>
      </section>



      {/* SUMMARY */}
       <section className={styles.sec}>
        <p className={styles.secEyebrow}>OVERVIEW</p>
        <p className={styles.bodyText}>Sizing was the #1 driver of support tickets on Roadie. Vague t-shirt size labels left drivers guessing whether a gig would fit their vehicle, leading to failed pickups and cancellations.
        I led discovery and design for a multi-phased sizing logic system: replacing t-shirt labels with contextual guidance that helps drivers confidently assess fit before accepting a gig. After identifying a critical lack of data integrity, I pitched an incremental roadmap to stakeholders, building the foundation for Roadie's first decision-support experience and cross-functional roadmap work with engineering and data science. The goals for this effort focused on:</p>
        <div className={styles.goalsList}>
          <div className={styles.goalItem}>
            <span className={styles.goalNum}>01</span>
            <p className={styles.goalText}>Reduce sizing-related support tickets</p>
          </div>
          <div className={styles.goalItem}>
            <span className={styles.goalNum}>02</span>
            <p className={styles.goalText}>Implement a smoother pickup experiences for drivers, senders, and Roadie</p>
          </div>
          <div className={styles.goalItem}>
            <span className={styles.goalNum}>03</span>
            <p className={styles.goalText}>Reduce the number of gig cancellations due to size</p>
          </div>
        </div>
      </section>
      


      {/* OUTCOME */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>OUTCOME</p>
        <p className={styles.secHeading}>Gig Fit Check</p>
        <p className={styles.bodyText}>Determining fit based on vehicle volume, available capacity and item volume. Dynamic and streamlined approach to decisively communicate to drivers if they're fit to take on a Gig before offering. A critical precursor to this initiative was a project I previously shipped to collect driver VINs and proof of insurance. By verifying the exact vehicles in use on the platform, we established the necessary data foundation to move away from the previous T-shirt sizes. This groundwork allowed us to use a driver's verified vehicle data as the baseline for assessing capacity within the Fit Check logic.</p>
        <div className={styles.imagePlaceholder} />
      </section>

 {/* IMPACT */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>IMPACT</p>
        <div className={styles.impactGrid}>
          <div className={styles.impactCard}>
            <p className={styles.impactNum}>58%</p>
            <p className={styles.impactLabel}>overall acceptance rate on POTO (push-offer-to-offer) notifications</p>
            <p className={styles.impactDesc}>post-release survey, n=149</p>
          </div>
          <div className={styles.impactCard}>
            <p className={styles.impactNum}>4.42/5</p>
            <p className={styles.impactLabel}>ease-of-use rating from A/B testing cohort</p>
            <p className={styles.impactDesc}>on accepting gigs in under 60 seconds</p>
          </div>
          <div className={styles.impactCard}>
            <p className={styles.impactNum}>$1.03</p>
            <p className={styles.impactLabel}>saved per gig vs. standard map-published pricing</p>
            <p className={styles.impactDesc}>POTO savings, market level L28</p>
          </div>
        </div>
      </section>

      {/* DISCOVERY FINDINGS */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>DISCOVERY FINDINGS</p>
        <div className={styles.findingsGrid}>
          <div className={styles.findingCard}>
            <div className={styles.findingIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <p className={styles.findingTitle}>Vehicle Correlation</p>
            <ul className={styles.findingList}>
              <li>Drivers use dimensions to determine if an item fits their specific vehicle.</li>
              <li>"Size" is often equated to pay, while "Fit" is equated to the vehicle.</li>
              <li>Opportunity: Could vehicle size be the primary indicator for gig eligibility and consolidation?</li>
            </ul>
          </div>
          <div className={styles.findingCard}>
            <div className={styles.findingIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <p className={styles.findingTitle}>Dimensions vs. Weight</p>
            <ul className={styles.findingList}>
              <li>Dimensions are the primary mental model for "Will this fit?".</li>
              <li>Weight is viewed as an indicator for "Effort" helping determine if they need a dolly or physical assistance.</li>
              <li>Separating these indicators helps drivers prepare for the physical reality of the job.</li>
            </ul>
          </div>
          <div className={styles.findingCard}>
            <div className={styles.findingIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <p className={styles.findingTitle}>The Logic Gap</p>
            <p className={styles.findingBody}>The system lacked "Consolidation Logic."</p>
            <ul className={styles.findingList}>
              <li>Mental Math: As Roadie's volume grew, we had more batched gigs on the platform than individual gigs, forcing drivers to manually estimate how four "Medium" gigs would fit together.</li>
              <li>Gig A (Small) + Gig B (Large) + Gig C (Medium) = [ ? ]</li>
              <li>Consistency Gap: Sizing communication was inconsistent across senders, marketing, and support</li>
            </ul>
          </div>
        </div>
      </section>

 


      {/* INITIAL EXPLORATIONS */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>INITIAL EXPLORATIONS</p>
        <div className={styles.explorationRow}>
          <div className={styles.explorationItem}>
            <p className={styles.explorationTitle}>Vehicle Size Requirement</p>
            <div className={styles.explorationImage}>[Insert: Vehicle Size Requirement exploration screens]</div>
          </div>
          <div className={styles.explorationItem}>
            <p className={styles.explorationTitle}>Volume Tags & Gig Filters</p>
            <div className={styles.explorationImage}>[Insert: Volume Tags & Gig Filters exploration screens]</div>
          </div>
        </div>
      </section>

      {/* THE TURNING POINT */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>THE TURNING POINT</p>
        <p className={styles.bodyText}>Design explorations revealed a deeper friction point: drivers were gambling on static labels rather than making informed decisions. We realized the problem wasn't that the sizes were too complex to understand, it was that the underlying data lacked the precision needed for a driver to feel confident.</p>
        <div className={styles.quoteStack}>
          <blockquote className={styles.quote}>"All that matters is that it fits. That's on you to know your vehicles cargo space dimensions. "XL-Fits in a hatchback or SUV" is just a generic descriptive that Roadie uses for gig sizing. Next gig size up is "Huge- Fits in a pickup truck" but can also sometimes fit in a number of other types of vehicles. The warning is just to deter drivers from offering on gigs then showing up with a vehicle that is too small to fit the order (happens a lot)."</blockquote>
          <blockquote className={styles.quote}>"I have a large truck and trailer, and I will have a handful of deliveries and bigger orders will pop up that I am already near and the app won't let me get those and it would help my gas costs if the system would recognize how many large gigs I can actually take at once. I would provide a greater service it this would be worked out."</blockquote>
        </div>
      </section>

      {/* REFRAMING THE PROBLEM */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>REFRAMING THE PROBLEM</p>
        <div className={styles.darkBlock}>
          <p className={styles.darkBlockText}>How might we better assess which Gigs a driver is equipped to handle based on their vehicle volume and Gig load?</p>
        </div>
      </section>

      {/* THE SOLUTION: PHASED IMPLEMENTATION */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>THE SOLUTION: PHASED IMPLEMENTATION</p>
        <p className={styles.bodyText}>The initial plan was to release Fit Check as a standalone feature. However, usability testing revealed a fundamental flaw: drivers didn't trust the system due to existing discrepancies around dimensions and sizes, and a lack of insight into items being picked up. To bridge this confidence gap, I pitched a phased approach that would ease drivers away from the existing t-shirt sizes while introducing new features along the way to build their trust. Given the scope of this cross-team effort, I also advocated for phasing to protect engineering's time to solve the sizing logic right, rather than compress it under pressure.</p>

        <div className={styles.phase}>
          <div className={styles.phaseText}>
            <span className={`${styles.pill} ${styles.pillBlue}`}>PHASE 1</span>
            <p className={styles.phaseTitle}>Remove Size Tags, Introduce Item Descriptor Tags</p>
            <p className={styles.bodyText}>One of the new initiatives I advocated for was introducing Item Descriptors to better highlight specific item characteristics, serving as the foundation for the entire rollout. Introducing three specific characteristic tags based on user feedback to improve item descriptions. Surface tags in correlation to items they are tied to in order to provide better guidance to drivers.</p>
          </div>
          <div className={styles.phaseImage}>[Insert: Phase 1 screens]</div>
        </div>

        <div className={styles.phase}>
          <div className={styles.phaseText}>
            <span className={`${styles.pill} ${styles.pillBlue}`}>PHASE 2</span>
            <p className={styles.phaseTitle}>Removal of All Gig Sizes</p>
            <p className={styles.bodyText}>Deprecate the T-shirt size labels to eliminate reliance on misleading descriptions and reduce support tickets when discrepancies occur between the sizes and the items at pickup</p>
            <p className={styles.bodyText}>This was a particularly sensitive area for our support and internal teams, so I worked with product to incrementally phase out the old sizes over several months, rather than all at once, to avoid a spike in support volume.</p>

          </div>
          <div className={styles.phaseImage}>[Insert: Phase 2 screens]</div>
        </div>

        <div className={styles.phase}>
          <div className={styles.phaseText}>
            <span className={`${styles.pill} ${styles.pillBlue}`}>PHASE 3</span>
            <p className={styles.phaseTitle}>Gig Fit Check</p>
            <p className={styles.bodyText}>Launch the final automated logic that decisively communicate to drivers if they're fit to take on a Gig before offering.</p>
            <div className={styles.fitStates}>
              <div className={styles.fitState}>
                <span className={styles.fitDot} style={{ background: '#0f6e56' }} />
                <div>
                  <p className={styles.fitStateTitle}>Easy Fit</p>
                  <p className={styles.fitStateDesc}>Items should fit without any issues in the active vehicle</p>
                </div>
              </div>
              <div className={styles.fitState}>
                <span className={styles.fitDot} style={{ background: '#e6a817' }} />
                <div>
                  <p className={styles.fitStateTitle}>Tight Fit</p>
                  <p className={styles.fitStateDesc}>Total volume & dimensions of existing Gigs and/or available Gig may be over threshold of what vehicle can typically handle</p>
                </div>
              </div>
              <div className={styles.fitState}>
                <span className={styles.fitDot} style={{ background: '#c0392b' }} />
                <div>
                  <p className={styles.fitStateTitle}>Not a Fit (Active Route)</p>
                  <p className={styles.fitStateDesc}>Total volume & dimensions of existing Gigs and available Gig is way above threshold of what vehicle can handle.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.phaseImage}>[Insert: Phase 3 screens]</div>
        </div>
      </section>

      {/* STRATEGIC TAKEAWAY */}
      <div className={styles.darkSection}>
        <p className={styles.darkSectionEyebrow}>STRATEGIC TAKEAWAY</p>
        <p className={styles.darkSectionBody}>Advocating for this incremental approach was the turning point for the project. By shifting from a single launch to a phased rollout, we secured stakeholder buy-in and gave engineering the necessary runway to build the technical core for Fit Check. This was also a major UX win for two reasons:</p>
        <div className={styles.darkSectionGrid}>
          <div className={styles.darkSectionCard}>
            <p className={styles.darkSectionCardTitle}>Building Trust</p>
            <p className={styles.darkSectionCardBody}>It allowed us to prove the value of the data and build driver confidence before introducing the more complex automated logic.</p>
          </div>
          <div className={styles.darkSectionCard}>
            <p className={styles.darkSectionCardTitle}>Operational Stability</p>
            <p className={styles.darkSectionCardBody}>It ensured each team had the time to get the foundations right, preventing a fragmented experience that would have further burdened support.</p>
          </div>
        </div>
      </div>

      {/* DRIVER FEEDBACK */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>DRIVER FEEDBACK</p>

        <div className={styles.feedbackCollage}>
          <div className={styles.feedbackCard} style={{ top: 20, left: 30, transform: 'rotate(-3deg)' }}>
            <p className={styles.feedbackSource}>r/Roadie</p>
            <p className={styles.feedbackQuote}>&ldquo;Fit check is losing us money&rdquo;</p>
          </div>
          <div className={styles.feedbackCard} style={{ top: 20, left: 250, transform: 'rotate(2deg)' }}>
            <p className={styles.feedbackSource}>r/Roadie</p>
            <p className={styles.feedbackQuote}>&ldquo;I know what can fit in my vehicles better than they do&rdquo;</p>
          </div>
          <div className={styles.feedbackCard} style={{ top: 20, left: 470, transform: 'rotate(-2deg)' }}>
            <p className={styles.feedbackSource}>Facebook driver group</p>
            <p className={styles.feedbackQuote}>&ldquo;The weight is only 1 factor, you seem to be ignoring that dimension. Fit is right&rdquo;</p>
          </div>
          <div className={styles.feedbackCard} style={{ top: 150, left: 30, transform: 'rotate(2deg)' }}>
            <p className={styles.feedbackSource}>In-app feedback</p>
            <p className={styles.feedbackQuote}>&ldquo;This fits plus I have a trailer and a rack. What is wrong with the algorithms?&rdquo;</p>
          </div>
          <div className={styles.feedbackCard} style={{ top: 150, left: 250, transform: 'rotate(-3deg)' }}>
            <p className={styles.feedbackSource}>Facebook driver group</p>
            <p className={styles.feedbackQuote}>&ldquo;Just because you think you can fit doesn&apos;t mean you should, is safe, or is legal&rdquo;</p>
          </div>
          <div className={styles.feedbackCard} style={{ top: 150, left: 470, transform: 'rotate(3deg)' }}>
            <p className={styles.feedbackSource}>r/Roadie</p>
            <p className={styles.feedbackQuote}>&ldquo;They are finally starting to look at their drivers and make things a bit easier&rdquo;</p>
          </div>
          <div className={styles.feedbackCard} style={{ top: 20, left: 690, transform: 'rotate(-1deg)' }}>
            <p className={styles.feedbackSource}>r/Roadie</p>
            <p className={styles.feedbackQuote}>&ldquo;Its going to be heavy season in a couple weeks, they probably dont want to be wasting time&rdquo;</p>
          </div>
        <div className={styles.feedbackCard} style={{ top: 150, left: 690, transform: 'rotate(1deg)' }}>
            <p className={styles.feedbackSource}>r/Roadie</p>
            <p className={styles.feedbackQuote}>&ldquo;What can and can't fit should be left up to us. If a driver fails at that, causing repeated dropped gigs because they don't fit, deactivate them&rdquo;</p>
          </div>
        </div>

        <p className={styles.secHeading} style={{ marginTop: '2rem' }}>Iterating on feedback</p>
        <p className={styles.bodyText}>Fit Check wasn&apos;t universally well received at launch. Drivers pushed back hard, so I continued researching and gathering feedback to shape what&apos;s being built next.</p>

        <div className={styles.roadmapHeader}>
          <p className={styles.roadmapHeaderLabel}>What drivers said</p>
          <div />
          <p className={styles.roadmapHeaderLabel}>Shaping the roadmap</p>
        </div>

        <div className={styles.roadmapList}>
          <div className={styles.roadmapRow}>
            <p className={styles.roadmapSaid}>Fit check is too restrictive and hard-blocks gigs they know they can complete</p>
            <span className={styles.roadmapArrow}>→</span>
            <p className={styles.roadmapDid}>Adjusted the threshold to be more liberal, deprioritizing weight to focus on the core question: does it fit and can it be delivered</p>
          </div>
          <div className={styles.roadmapRow}>
            <p className={styles.roadmapSaid}>Vehicle setups like trailers, roof racks, and folded seats aren&apos;t accounted for</p>
            <span className={styles.roadmapArrow}>→</span>
            <p className={styles.roadmapDid}>Investigating expanded vehicle and equipment data to reduce false negatives</p>
          </div>
          <div className={styles.roadmapRow}>
            <p className={styles.roadmapSaid}>Some gigs have inaccurate item dimensions, resulting in incorrect fit check</p>
            <span className={styles.roadmapArrow}>→</span>
            <p className={styles.roadmapDid}>Investigating sender-provided dimensions to determine next steps</p>
          </div>
        </div>

        <p className={styles.bodyText} style={{ marginTop: '1rem' }}>Of 719 fit-related comments across 696 gigs in a two-week window, the throughline wasn&apos;t &ldquo;remove this feature,&rdquo; it was &ldquo;make it more accurate.&rdquo; That distinction is steering the next phase of work.</p>
      </section>

      {/* NEXT PROJECT */}
      <div className={styles.nextProject}>
        <p className={styles.nextLabel}>NEXT PROJECT</p>
        <Link href="/work/find-me-gigs" className={styles.nextTitle}>
          Find Me Gigs →
        </Link>
      </div>

      <Footer />
    </>
  )
}
