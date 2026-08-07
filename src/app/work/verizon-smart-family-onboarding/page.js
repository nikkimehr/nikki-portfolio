import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from '../case-study.module.css'

export const metadata = {
  title: 'Verizon Smart Family Onboarding — Nikki Mehrjerdian',
}

export default function VerizonOnboarding() {
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
        <p className={styles.eyebrow}>PUBLICIS SAPIENT · VERIZON SMART FAMILY</p>
        <h1 className={styles.title}>Building trust into Smart Family's onboarding experience</h1>
        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>MY ROLE</p>
            <p className={styles.metaVal}>Lead Designer</p>
          </div>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>RESPONSIBILITIES</p>
            <p className={styles.metaVal}>Research, E2E Design, Design Sytem</p>
          </div>
           <div className={styles.metaItem}>
            <p className={styles.metaLabel}>TEAM</p>
            <p className={styles.metaVal}>Junior Designer, Product, FE Engineering, Client Stakeholders</p>
          </div>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>PLATFORMS</p>
            <p className={styles.metaVal}>iOS, Android</p>
          </div>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>YEAR</p>
            <p className={styles.metaVal}>2022-2023</p>
          </div>
          <div className={styles.metaItem}>
            <p className={styles.metaLabel}>OUTCOME</p>
            <p className={styles.metaVal}>Shipped</p>
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className={styles.summary}>
        <p>Smart Family is an add-on service for Verizon customers that offers location services and parental controls for all of family members' devices. This project was part of our redesign efforts to create a "Smarter Smart Family" and transition from a vendor driven experience to a Verizon driven experience.</p>
      </section>

      {/* MY CONTRIBUTIONS */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>MY CONTRIBUTIONS</p>
        <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <li className={styles.bodyText} style={{ margin: 0 }}>Leading end-to-end design for the entire feature for both parent and companion apps.</li>
          <li className={styles.bodyText} style={{ margin: 0 }}>Collaborating with our researcher to develop usability testing briefs and creating interactive prototypes to evaluate opportunities with existing and new SF customers.</li>
          <li className={styles.bodyText} style={{ margin: 0 }}>Lead UX and design strategy efforts by creating user flows, use cases & scenarios, IA and wireframes.</li>
          <li className={styles.bodyText} style={{ margin: 0 }}>Develop engineer handoff documentation framework that was adopted by all other feature teams as well as other Verizon projects across Publicis Sapient.</li>
        </ul>
      </section>

      {/* IMAGE SECTIONS — no additional content */}
      
       <section className={styles.sec}>
        <Image src="/images/vsf-onboarding/onboarding-overview.png" alt="Conclusion" width={1200} height={700} className={styles.solutionImage} />
      </section>

      <section className={styles.sec}>
        <Image src="/images/vsf-onboarding/onboarding-6.png" alt="Leading class inspiration" width={1200} height={700} className={styles.solutionImage} />
      </section>

      

      <section className={styles.sec}>
        <Image src="/images/vsf-onboarding/onboarding-1.png" alt="Overall sequencing — context before action" width={1200} height={700} className={styles.solutionImage} />
      </section>

      <section className={styles.sec}>
        <Image src="/images/vsf-onboarding/onboarding-2.png" alt="2 distinct phases" width={1200} height={700} className={styles.solutionImage} />
      </section>

      <section className={styles.sec}>
        <Image src="/images/vsf-onboarding/onboarding-3.png" alt="Sign-in and Pair" width={1200} height={700} className={styles.solutionImage} />
      </section>

      <section className={styles.sec}>
        <Image src="/images/vsf-onboarding/onboarding-4.png" alt="Feature Education and Setup" width={1200} height={700} className={styles.solutionImage} />
      </section>

      
     

      {/* NEXT PROJECT */}
      <div className={styles.nextProject}>
        <p className={styles.nextLabel}>NEXT PROJECT</p>
        <Link href="/work/gig-fit-check" className={styles.nextTitle}>
          Gig Fit Check →
        </Link>
      </div>

      <Footer />
    </>
  )
}
