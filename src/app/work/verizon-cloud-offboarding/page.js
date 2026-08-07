import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from '../case-study.module.css'

export const metadata = {
  title: 'Verizon Cloud Offboarding — Nikki Mehrjerdian',
}

export default function VerizonCloudOffboarding() {
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

      <section className={styles.header}>
        <p className={styles.eyebrow}>PUBLICIS SAPIENT · VERIZON CLOUD</p>
        <h1 className={styles.title}>Turning a destructive action into an informed offboarding experience</h1>
        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>MY ROLE</p>
            <p className={styles.metaVal}>Sole Designer</p>
          </div>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>RESPONSIBILITIES</p>
            <p className={styles.metaVal}>E2E Design</p>
          </div>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>TEAM</p>
            <p className={styles.metaVal}>Design Lead, Product, Client Stakeholders</p>
          </div>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>PLATFORMS</p>
            <p className={styles.metaVal}>Mobile, Desktop, Web</p>
          </div>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>YEAR</p>
            <p className={styles.metaVal}>2022</p>
          </div>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>OUTCOME</p>
            <p className={styles.metaVal}>Client handoff</p>
          </div>
        </div>
      </section>


      <section className={styles.summary}>
        <p>Verizon Cloud is a mobile, desktop and web cloud solution offered to both Verizon customers and out-of-network customers. As part of our long-term partnership with Verizon Cloud, my team worked to research and redesign the plan cancellation and offboarding experience across platforms.</p>
      </section>


      {/* THE PROBLEM */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>CURRENT OFFBOARDING PROBLEM</p>
        <p className={styles.secHeading}>The current experience lacks crucial guidance to help customers make informed decisions or save their data before it's deleted.</p>
        <p className={styles.bodyText}>Verizon Cloud's current offboarding experience is relatively straightforward and takes very little time to complete. However, this experience lacks crucial guidance to help customers make informed decisions or how to save their data before it's completely deleted.</p>
        <div className={styles.imagePlaceholder} style={{ marginTop: '20px' }}>[Insert: Current state offboarding experience screens]</div>
      </section>

      {/* HMW */}
      <section className={styles.sec}>
        <div className={styles.darkBlock}>
          <p className={styles.darkBlockText}>How might we provide customers with a guiltless offboarding experience while informing them of the destructive action?</p>
        </div>
      </section>

      {/* RESEARCH */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>RESEARCH</p>
        <p className={styles.secHeading}>Requirements & business goals</p>
        <p className={styles.bodyText}>We kicked off the process with collaborating with our client partners to identify the main goals and align on requirements for the new offboarding experience. The three main goals and requirements for this initiative included:</p>
        <div className={styles.goalsList} style={{ marginTop: '16px' }}>
          <div className={styles.goalItem}>
            <span className={styles.goalNum}>01</span>
            <p className={styles.goalText}>Provide customers with a painless cancellation experience to part ways as friends.</p>
          </div>
          <div className={styles.goalItem}>
            <span className={styles.goalNum}>02</span>
            <p className={styles.goalText}>Reduce unnecessary friction with the cancelation process, while still providing options to help retain customers.</p>
          </div>
          <div className={styles.goalItem}>
            <span className={styles.goalNum}>03</span>
            <p className={styles.goalText}>Frame the survey in a more positive light to encourage feedback.</p>
          </div>
        </div>
      </section>

      {/* HEURISTIC ANALYSIS */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>HEURISTIC ANALYSIS</p>
        <p className={styles.bodyText}>With the goal of elevating Verizon Cloud to best-in-class status, we began our research by analyzing the current state experience.</p>

        <div className={styles.heuristicRow} style={{ marginTop: '24px' }}>
          <div className={styles.heuristicImages}>
            <Image src="/images/vco/heuristic-1.png" alt="Heuristic finding — Delete My Account screen" width={506} height={956} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div>
            <p className={styles.secHeading} style={{ marginBottom: '16px' }}>Findings</p>
            <ul className={styles.findingsList}>
              <li>Overall copy is not clear enough to provide users with direction on what will happen if they cancel</li>
              <li>"Delete My Account" is not the right language. Current experience doesn&apos;t allow users to ever fully delete their account, they can only cancel their plan.</li>
              <li>No info about what happens to other members on shared plan</li>
              <li>Highlighted features are not utilized efficiently to allow users to see what they are going to lose once they cancel</li>
            </ul>
          </div>
        </div>

        <div className={styles.heuristicRow} style={{ marginTop: '40px' }}>
          <div className={styles.heuristicImages}>
            <Image src="/images/vco/heuristic-2.png" alt="Heuristic finding — Before you go survey screen" width={504} height={996} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div>
            <p className={styles.secHeading} style={{ marginBottom: '16px' }}>Findings</p>
            <ul className={styles.findingsList}>
              <li>Survey is disconnected from rest of experience</li>
              <li>Unclear if account will be deleted after this step, or if there is confirmation page</li>
              <li>Language is inconsistent with previous screen — "Delete My Account" vs. "unsubscribing"</li>
            </ul>
          </div>
        </div>

        <div className={styles.heuristicRow} style={{ marginTop: '40px' }}>
          <div className={styles.heuristicImages}>
            <Image src="/images/vco/heuristic-3.png" alt="Heuristic finding — Confirm Delete screen" width={486} height={996} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div>
            <p className={styles.secHeading} style={{ marginBottom: '16px' }}>Findings</p>
            <ul className={styles.findingsList}>
              <li>Inconsistent language again</li>
              <li>Users are not offered any solutions after the survey even though over 50% of users choose cloud cost or cloud service redundancy as reason for deletion. They could see dynamic solutions based on the survey before they reach this page.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MARKET RESEARCH */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>MARKET RESEARCH</p>
        <p className={styles.bodyText}>After identifying the key pain points from the current state, I worked alongside our researcher to do a competitive analysis of in-category and out-of-category products to analyze successful experiences across the market landscape and highlight opportunities to position Verizon Cloud in-line with industry experiences.</p>
        <div className={styles.imagePlaceholder} style={{ marginTop: '16px', aspectRatio: '16/4' }}>[Insert: Competitor logos — iCloud, Dropbox, Google Drive, Gmail, Twitter, Box]</div>
        <p className={styles.secHeading} style={{ marginTop: '28px' }}>Key takeaways</p>
        <div className={styles.goalsList} style={{ marginTop: '12px' }}>
          {[
            'Anticipate users needs',
            'Explicit instructions and full transparency',
            'Direct and easily discoverable links to assist on the offboarding process',
            'Explaining to the user exactly what they are doing and the consequences of deactivating account',
            'Anticipates a potential reason a user might be trying to deactivate and provides alternative solution',
            'Guiding the user on how to save their sensitive documents through step-by-step instructions',
            'Clear communication about what will happen to the users account, and what they can expect',
          ].map((item, i) => (
            <div key={i} className={styles.goalItem}>
              <span className={styles.goalNum}>{String(i + 1).padStart(2, '0')}</span>
              <p className={styles.goalText}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DESIGN GOALS */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>DESIGN GOALS</p>
        <p className={styles.bodyText}>Synthesizing our research, we established a set of design goals using the Verizon brand guidelines to use as our guiding principles for the new offboarding experience.</p>
        <div className={styles.cardGrid3} style={{ marginTop: '16px' }}>
          <div className={styles.card}>
            <p className={styles.cardTitle}>Supportive</p>
            <p className={styles.cardBody}>The service provides useful prompts to guide the user through any complex actions required to achieve their goal, anticipating their needs and offering potential solutions — like downgrade suggestions — to help retain customers.</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardTitle}>Personal</p>
            <p className={styles.cardBody}>These experiences show users we recognize and understand them by delivering unique experiences that are just for them, dynamically surfacing their most used features, custom content, or most viewed content.</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardTitle}>Honest</p>
            <p className={styles.cardBody}>These experiences are transparent and clearly communicate information regarding the users privacy and data — how long photos will be kept, what will happen to their files, and the retrieval process — with shared plan owners notified of any changes.</p>
          </div>
        </div>
      </section>

      {/* USER SCENARIOS & DESIGN EXPLORATIONS */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>DESIGN</p>
        <p className={styles.secHeading}>User scenarios</p>
        <div className={styles.goalsList} style={{ marginTop: '12px' }}>
          {[
            'Verizon customer; account owner, Shared Unlimited plan, downgrades',
            'Verizon customer; account owner, Shared Unlimited plan, cancels',
            'Verizon customer; account owner, Solo plan, cancels',
            'Verizon customer; account owner, Solo plan, downgrades to lower tier plan',
            'Verizon customer; account owner, Solo plan, downgrades to contacts only (free for Verizon customers)',
            'Can no longer have shared members on plan due to downgrade',
          ].map((item, i) => (
            <div key={i} className={styles.goalItem}>
              <span className={styles.goalNum}>{String(i + 1).padStart(2, '0')}</span>
              <p className={styles.goalText}>{item}</p>
            </div>
          ))}
        </div>

        <p className={styles.bodyText} style={{ marginTop: '28px' }}>From the scenarios, I began creating user flows and ideating various solutions. Below are two examples of wireframe flows I created to address two different use cases.</p>
        <div style={{ marginTop: '28px' }}>
          <div className={styles.solutionHeader}>
            <p className={styles.solutionNum}>1</p>
            <p className={styles.solutionTitle}>Verizon customer; account owner, Solo plan, downgrades</p>
          </div>
          <p className={styles.bodyText}>This customer has an Unlimited Cloud plan. Due to cost, they decide to cancel their plan. Cloud presents them with the option to select a different plan that better aligns with their needs, and they choose a 600 GB plan.</p>
          <Image src="/images/vco/exploration-1.png" alt="Solo plan downgrade wireframe flow" width={1964} height={1058} style={{ width: '100%', height: 'auto', borderRadius: '10px', marginTop: '12px' }} />
        </div>
        <div style={{ marginTop: '36px' }}>
          <div className={styles.solutionHeader}>
            <p className={styles.solutionNum}>2</p>
            <p className={styles.solutionTitle}>Verizon customer; account owner, Shared plan, cancels</p>
          </div>
          <p className={styles.bodyText}>This customer is an account owner on a shared Unlimited plan. They cancel their plan, which also removes access for other members on the plan.</p>
          <Image src="/images/vco/exploration-2.png" alt="Shared plan cancellation wireframe flow" width={1960} height={932} style={{ width: '100%', height: 'auto', borderRadius: '10px', marginTop: '12px' }} />
        </div>
      </section>

      {/* FINAL SOLUTION */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>FINAL SOLUTION</p>

        {/* Personal — Stroll down memory lane */}
        <div style={{ marginTop: '8px' }}>
          <div className={styles.vcoImageBlock}>
            <div className={styles.vcoImageHeader}>
              <p className={styles.vcoGoalLabel}>Design goal: <span className={styles.vcoGoalValue}>Personal</span></p>
              <p className={styles.vcoImageTitle}>Stroll down memory lane</p>
            </div>
            <div className={styles.vcoScreenRow}>
              <div className={styles.vcoScreenItem}>
                <Image src="/images/vco/1a.png" alt="Solo plan mobile" width={300} height={600} className={styles.vcoScreen} />
                <p className={styles.vcoCaption}>Solo plan, mobile</p>
              </div>
              <div className={styles.vcoScreenItem}>
                <Image src="/images/vco/1b.png" alt="Shared plan mobile" width={300} height={600} className={styles.vcoScreen} />
                <p className={styles.vcoCaption}>Shared plan with members</p>
              </div>
              <div className={styles.vcoScreenItem}>
                <Image src="/images/vco/1c.png" alt="Desktop app" width={600} height={400} className={styles.vcoScreenWide} />
                <p className={styles.vcoCaption}>Solo plan, desktop app</p>
              </div>
            </div>
          </div>
          <div className={styles.cardGrid2} style={{ marginTop: '32px' }}>
            <div className={styles.cardPlain}>
              <p className={styles.cardPlainLabel}>User scenario</p>
              <p className={styles.cardPlainBody}>After navigating to the cancellation page from Settings, the user is presented with a snapshot page of their most important and relevant content they have stored on Cloud. My goal was to invoke nostalgia and showcase cloud's value while remaining as unobtrusive as possible.</p>
            </div>
            <div className={styles.cardPlain}>
              <p className={styles.cardPlainLabel}>Solution</p>
              <ul className={styles.cardPlainList}>
                <li>Interactive carousel of important content and key features of Cloud, including most engaged with Flashbacks and Stories</li>
                <li>Using a tilet to give more prominence to the plan change link and surfacing plan it higher up</li>
                <li>Explicit copy that communicates exactly what will happen if user cancels plan</li>
                <li>Highlighting other members on shared plans and reminding account owners how all members will be impacted by plan cancellation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Supportive — Transparent and relevant solutions */}
        <div style={{ marginTop: '48px' }}>
          <div className={styles.vcoImageBlock}>
            <div className={styles.vcoImageHeader}>
              <p className={styles.vcoGoalLabel}>Design goal: <span className={styles.vcoGoalValue}>Supportive</span></p>
              <p className={styles.vcoImageTitle}>Transparent and relevant solutions</p>
            </div>
            <div className={styles.vcoScreenRow}>
              <div className={styles.vcoScreenItem}>
                <Image src="/images/vco/2a.png" alt="Save backups" width={300} height={600} className={styles.vcoScreen} />
                <p className={styles.vcoCaption}>Full page warning instructions</p>
              </div>
              <div className={styles.vcoScreenItem}>
                <Image src="/images/vco/2b.png" alt="Survey" width={300} height={600} className={styles.vcoScreen} />
                <p className={styles.vcoCaption}>Survey</p>
              </div>
              <div className={styles.vcoScreenItem}>
                <Image src="/images/vco/2c.png" alt="Plan change all" width={300} height={600} className={styles.vcoScreen} />
                <p className={styles.vcoCaption}>Plan change - all</p>
              </div>
              <div className={styles.vcoScreenItem}>
                <Image src="/images/vco/2d.png" alt="Plan change compare" width={300} height={600} className={styles.vcoScreen} />
                <p className={styles.vcoCaption}>Plan change - comparison</p>
              </div>
            </div>
          </div>
          <div className={styles.cardGrid2} style={{ marginTop: '32px' }}>
            <div className={styles.cardPlain}>
              <p className={styles.cardPlainLabel}>User scenario</p>
              <p className={styles.cardPlainBody}>Once the user begins the cancellation process, they're presented with a warning page about saving a copy of their backups before they proceed. From there, they will have the opportunity to share feedback on the survey and if relevant, be presented with plan change options following the survey.</p>
            </div>
            <div className={styles.cardPlain}>
              <p className={styles.cardPlainLabel}>Solution</p>
              <ul className={styles.cardPlainList}>
                <li>Clear communication about what users can expect with recovery and where to go to download their backups</li>
                <li>Contextually relevant solutions based on survey response</li>
                <li>Enhanced plan cancellation with expandable tilets and comparison table to allow users to see all details within one screen</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Honest — Enhanced security and confirmation */}
        <div style={{ marginTop: '48px' }}>
          <div className={styles.vcoImageBlock}>
            <div className={styles.vcoImageHeader}>
              <p className={styles.vcoGoalLabel}>Design goal: <span className={styles.vcoGoalValue}>Honest</span></p>
              <p className={styles.vcoImageTitle}>Enhanced security and confirmation</p>
            </div>
            <div className={styles.vcoScreenRow}>
              <div className={styles.vcoScreenItem}>
                <Image src="/images/vco/3a.png" alt="Confirm cancellation" width={300} height={600} className={styles.vcoScreen} />
                <p className={styles.vcoCaption}>Confirm cancellation</p>
              </div>
              <div className={styles.vcoScreenItem}>
                <Image src="/images/vco/3b.png" alt="Face unlock" width={300} height={600} className={styles.vcoScreen} />
                <p className={styles.vcoCaption}>Face unlock</p>
              </div>
              <div className={styles.vcoScreenItem}>
                <Image src="/images/vco/3c.png" alt="Confirmation" width={300} height={600} className={styles.vcoScreen} />
                <p className={styles.vcoCaption}>Confirmation</p>
              </div>
              <div className={styles.vcoScreenItem}>
                <Image src="/images/vco/3d.png" alt="Confirmation text message" width={300} height={600} className={styles.vcoScreen} />
                <p className={styles.vcoCaption}>Confirmation text message</p>
              </div>
            </div>
          </div>
          <div className={styles.cardGrid2} style={{ marginTop: '32px' }}>
            <div className={styles.cardPlain}>
              <p className={styles.cardPlainLabel}>User scenario</p>
              <p className={styles.cardPlainBody}>Given the sensitive content that may be stored on their Cloud app, users want to feel certain the cancellation process has been finalized and feel a sense of security in closing their account.</p>
            </div>
            <div className={styles.cardPlain}>
              <p className={styles.cardPlainLabel}>Solution</p>
              <ul className={styles.cardPlainList}>
                <li>Using authentication methods to confirm this destructive action while notifying users of the re-enrollment and recovery process.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Personal — Flexible device-specific security */}
        <div style={{ marginTop: '48px' }}>
          <div className={styles.vcoImageBlock}>
            <div className={styles.vcoImageHeader}>
              <p className={styles.vcoGoalLabel}>Design goal: <span className={styles.vcoGoalValue}>Personal</span></p>
              <p className={styles.vcoImageTitle}>Flexible, device-specific security</p>
            </div>
            <div className={styles.vcoScreenRow}>
              <div className={styles.vcoScreenItem}>
                <Image src="/images/vco/4a.png" alt="Desktop authentication" width={600} height={400} className={styles.vcoScreenWide} />
                <p className={styles.vcoCaption}>Desktop authentication</p>
              </div>
              <div className={styles.vcoScreenItem}>
                <Image src="/images/vco/4b.png" alt="Desktop confirmation" width={600} height={400} className={styles.vcoScreenWide} />
                <p className={styles.vcoCaption}>Desktop confirmation</p>
              </div>
            </div>
          </div>
          <div className={styles.cardGrid2} style={{ marginTop: '32px' }}>
            <div className={styles.cardPlain}>
              <p className={styles.cardPlainLabel}>User scenario</p>
              <p className={styles.cardPlainBody}>Desktop users cannot use biometrics for verification and they may not have their mobile devices readily available to complete this crucial step of the process.</p>
            </div>
            <div className={styles.cardPlain}>
              <p className={styles.cardPlainLabel}>Solution</p>
              <ul className={styles.cardPlainList}>
                <li>Desktop users have the option to receive verification code through text message or email to complete this step. From there, they will see a confirmation modal with additional details and they will be guided to exit cloud which will then bring them to the welcome page.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.nextProject}>
        <p className={styles.nextLabel}>NEXT PROJECT</p>
        <Link href="/work/verizon-smart-family-onboarding" className={styles.nextTitle}>
          Smart Family Onboarding →
        </Link>
      </div>

      <Footer />
    </>
  )
}
