import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

import styles from '../case-study.module.css'

export const metadata = {
  title: 'Verizon Smart Family Locations — Nikki Mehrjerdian',
}

export default function VerizonSmartFamily() {
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
        <h1 className={styles.title}>Elevating a premium offering into a complete family location experience</h1>
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



      {/* THE PROBLEM */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>THE PROBLEM</p>
        <p className={styles.secHeading}>Locations was buried, cluttered, and left families piecing together context outside the app.</p>
        <p className={styles.bodyText}>The existing Locations experience lacked a dedicated space in the app — parents had to navigate through Home to view family member locations one at a time, with no holistic map view. The pick me up flow had so little transparency that families were forced to text or call each other outside the app to track progress, defeating the purpose of the feature.</p>
        <div className={styles.problemGrid}>
          <div className={styles.problemCard}>
            <p className={styles.problemTitle}>Lack of controls</p>
            <p className={styles.problemBody}>No holistic location stage. No way to view all family members at once. Everything in long-scroll format with no way to filter or focus.</p>
          </div>
          <div className={styles.problemCard}>
            <p className={styles.problemTitle}>Cognitive overload</p>
            <p className={styles.problemBody}>Cluttered content with no organization. Location-related settings buried with no findable entry points. One member viewable at a time.</p>
          </div>
          <div className={styles.problemCard}>
            <p className={styles.problemTitle}>Lack of transparency</p>
            <p className={styles.problemBody}>Pick me up gave parents and children no updates after a request was sent — forcing them to communicate through outside apps.</p>
          </div>
        </div>
      </section>

      {/* KEY INSIGHT */}
    <section className={styles.sec}>
        <p className={styles.secEyebrow}>KEY INSIGHT</p>
        <div className={styles.darkBlock}>
          <p className={styles.darkBlockText}>The experience was causing families to leave the app at the moments that mattered most. Every gap in transparency was a reason to use a different app instead. 
            </p> 
        </div>
        
      </section>


      {/* SOLUTION */}
      <section className={styles.sec}>
        <p className={styles.secEyebrow}>SOLUTION</p>
       
        {/* New IA */}
        <div className={styles.solutionBlock}>
          <div className={styles.solutionLabel}>
            <p className={styles.solutionTitle}>Locations as a primary nav stage</p>
            <p className={styles.solutionDesc}>Locations is now a dedicated tab in the global nav with a holistic family map and list view. Home surfaces a map module for at-a-glance awareness. Basic plan users see an upgrade prompt — turning the feature into a conversion driver, not just a utility.</p>
          </div>
          <Image src="/images/vsf/ia.png" alt="New IA — Locations as primary nav stage" width={900} height={500} className={styles.solutionImage} />
        </div>

        {/* Bottom Sheet */}
        <div className={styles.solutionBlock}>
          <div className={styles.solutionLabel}>
            <p className={styles.solutionTitle}>Bottom sheet for map + content</p>
            <p className={styles.solutionDesc}>A resizable bottom sheet drawer replaced the long-scroll format — allowing users to interact with the map while accessing contextual information simultaneously. Simple, flexible, familiar, and scalable across Verizon's digital ecosystem.</p>
          </div>
          <Image src="/images/vsf/bottom-sheet.png" alt="Bottom sheet pattern" width={900} height={500} className={styles.solutionImage} />
        </div>

        {/* Location Profiles */}
        <div className={styles.solutionBlock}>
          <div className={styles.solutionLabel}>
            <p className={styles.solutionTitle}>Location profiles</p>
            <p className={styles.solutionDesc}>Each family member now has a dedicated profile with live map, location history, boundary alerts, and quick actions — all surfaced without leaving the Locations experience. Child and parent views are contextually tailored.</p>
          </div>
          <div className={styles.beforeAfterImages}>
            <div className={styles.baImageBlock}>
              <p className={styles.baLabelBefore}>Before</p>
              <Image src="/images/vsf/profile-before.png" alt="Location profiles before" width={700} height={450} className={styles.baImage} />
            </div>
            <div className={styles.baImageBlock}>
              <p className={styles.baLabelAfter}>After</p>
              <Image src="/images/vsf/profile-after.png" alt="Location profiles after" width={700} height={450} className={styles.baImage} />
            </div>
          </div>
        </div>

        {/* Pick Me Up */}
        <div className={styles.solutionBlock}>
          <div className={styles.solutionLabel}>
            <p className={styles.solutionTitle}>Pick me up</p>
            <p className={styles.solutionDesc}>The pick up flow was rebuilt end-to-end. Children can now search for an address or drop a pin, select which parent to notify, and track progress in real time as the parent accepts and arrives. Parents see the request directly on the map with Accept, Decline, and Directions — no more switching to texts to stay informed.</p>
          </div>
          <div className={styles.beforeAfterImages}>
            <div className={styles.baImageBlock}>
              <p className={styles.baLabelBefore}>Before</p>
              <Image src="/images/vsf/pickup-before.png" alt="Pick me up before" width={700} height={450} className={styles.baImage} />
            </div>
            <div className={styles.baImageBlock}>
              <p className={styles.baLabelAfter}>After</p>
              <Image src="/images/vsf/pickup-after.png" alt="Pick me up after" width={700} height={450} className={styles.baImage} />
            </div>
          </div>
        </div>
      </section>


      {/* LEARNINGS */}

      <section className={styles.sec}>
        <p className={styles.secEyebrow}>LEARNINGS</p>
        <div className={styles.ddList}>
          <div className={styles.ddRow}>
            <span className={styles.goalNum}>01</span>
            <div className={styles.ddContent}>
              <p className={styles.ddTitle}>Design for two users at once</p>
              <p className={styles.ddBody}>Every screen had to work for both parent and child, different mental models, different needs, same feature. Holding both personas in mind at once, through regular interviews and research with each, was the defining point of this project.</p>
            </div>
          </div>
          <div className={styles.ddRow}>
            <span className={styles.goalNum}>02</span>
            <div className={styles.ddContent}>
              <p className={styles.ddTitle}>Interaction patterns earn trust</p>
              <p className={styles.ddBody}>The bottom sheet wasn't just a UX choice. It was a familiarity signal. Referencing leading-class apps gave us a strong rationale for stakeholder buy-in on the higher engineering effort, while cutting the learning curve and frustration for users. It also proved the value of building modular, extendable patterns that can accommodate new location features without structural rework.</p>
            </div>
          </div>
          <div className={styles.ddRow}>
            <span className={styles.goalNum}>03</span>
            <div className={styles.ddContent}>
              <p className={styles.ddTitle}>Transparency keeps families in the app</p>
              <p className={styles.ddBody}>Every gap in pick up status communication was a reason for families to opt out of this feature. Real-time progress wasn't a just a nice-to-have, but the feature's core value proposition and more reason for Premium memberships.</p>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.nextProject}>
        <p className={styles.nextLabel}>NEXT PROJECT</p>
        <Link href="/work/verizon-cloud-offboarding" className={styles.nextTitle}>
          Cloud Offboarding →
        </Link>
      </div>

      <Footer />
    </>
  )
}
