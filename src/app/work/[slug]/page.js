import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './case-study.module.css'

// Placeholder data — replace with real content per case study
const projectData = {
  title: "Reframing a sizing problem into Roadie's first dynamic logic system",
  industry: 'Logistics / Gig Economy',
  role: 'Lead Designer',
  platforms: 'iOS and Android',
  timeline: 'January 2024 – March 2024',
  overview: "Roadie's driver app had no structured way to handle item size variations during deliveries — drivers were making judgment calls that led to inconsistencies and failed pickups. This project involved designing the first dynamic sizing logic system: a rules-based flow that guides drivers through size confirmation at the right moments, reducing errors and improving delivery success rates.",
  problemStatement: "Drivers were frequently encountering items that didn't match their vehicle capacity expectations, with no in-app guidance to resolve the conflict. This created friction at pickup, increased support contacts, and eroded driver trust in the platform's reliability.",
  process: [
    {
      number: '01',
      title: 'User Research',
      items: [
        'Conducted user interviews with 15 drivers to understand their frustrations and decision-making at pickup.',
        'Analyzed driver support tickets to identify the most common size-related failure points.',
        'Benchmarked against competitor gig platforms to identify sizing communication patterns.',
      ],
    },
    {
      number: '02',
      title: 'Insights',
      items: [
        'Drivers had no standard mental model for "what counts as too big" — definitions varied widely.',
        "Existing size descriptions in the shipper flow weren't surfaced to drivers at the right moment.",
        'Drivers wanted confidence at pickup, not just information — they needed clear decision prompts.',
      ],
    },
    {
      number: '03',
      title: 'Design Exploration',
      items: [
        'Explored 3 interaction models: a checklist, a branching prompt, and a visual size reference guide.',
        'Ran rapid concept tests with 8 drivers to validate clarity and decision confidence.',
        'Iterated on logic rules with eng + ops to ensure backend feasibility.',
      ],
    },
    {
      number: '04',
      title: 'Outcomes',
      items: [
        'Add your metrics here — e.g. reduction in size-related support contacts, pickup success rate improvement.',
        'Shipped to 100% of active drivers on iOS and Android.',
        'Established the pattern for future conditional logic flows in the driver app.',
      ],
    },
  ],
  nextProject: {
    title: 'Multi-phase effort to collect & build vehicle data foundation',
    slug: 'vehicle-data-foundation',
  },
}

export default function CaseStudy({ params }) {
  const project = projectData // swap with a lookup by params.slug when you have multiple

  return (
    <>
      <Nav />

      <Link href="/" className={styles.backLink}>
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
          <path d="M10 3L5 8l5 5" />
        </svg>
        Back to work
      </Link>

      {/* Hero image */}
      <div className={styles.heroImage} />
      {/* Replace with: <Image src="/images/your-hero.jpg" alt="Project hero" width={1600} height={700} style={{width:'100%',height:'auto'}} priority /> */}

      {/* Overview */}
      <section className={styles.overview}>
        <div className={styles.overviewLeft}>
          <h1 className={styles.title}>{project.title}</h1>

          <div className={styles.textSection}>
            <p className="bracket-label">[Project Overview]</p>
            <p className={styles.bodyText}>{project.overview}</p>
          </div>

          <div className={styles.textSection}>
            <p className="bracket-label">[Problem Statement]</p>
            <p className={styles.bodyText}>{project.problemStatement}</p>
          </div>
        </div>

        <aside className={styles.metaSidebar}>
          {[
            { label: '[Industry]', value: project.industry },
            { label: '[My Role]', value: project.role },
            { label: '[Platforms]', value: project.platforms },
            { label: '[Timeline]', value: project.timeline },
          ].map(({ label, value }) => (
            <div key={label} className={styles.metaItem}>
              <p className="bracket-label">{label}</p>
              <span className={styles.metaTag}>{value}</span>
            </div>
          ))}
        </aside>
      </section>

      {/* Process */}
      <section className={styles.process}>
        <p className="bracket-label">[Process]</p>
        <div className={styles.processGrid}>
          {project.process.map((card) => (
            <div key={card.number} className={styles.processCard}>
              <p className={styles.processCardTitle}>
                <span>[{card.number}]</span> {card.title}
              </p>
              <ul className={styles.processItems}>
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Content blocks — duplicate as needed */}
      <section className={styles.contentBlock}>
        <p className="bracket-label">[Design Exploration]</p>
        <h2 className={styles.sectionTitle}>Replace with your section title</h2>
        <p className={styles.bodyText}>Add your narrative here. Walk through what you explored, why you made the choices you did, and what you learned along the way.</p>
        <div className={styles.imageBlock} />
        <p className={styles.bodyText}>Continue your narrative after the image.</p>
        <div className={styles.imageDuo}>
          <div className={styles.imageBlock} />
          <div className={styles.imageBlock} />
        </div>
      </section>

      <section className={styles.contentBlock}>
        <p className="bracket-label">[Final Design]</p>
        <h2 className={styles.sectionTitle}>Replace with your section title</h2>
        <p className={styles.bodyText}>Describe the final solution and key design decisions.</p>
        <div className={styles.imageBlock} />
      </section>

      {/* Next project */}
      <div className={styles.nextProject}>
        <div>
          <p className={styles.nextLabel}>Next project</p>
          <Link href={`/work/${project.nextProject.slug}`} className={styles.nextTitle}>
            {project.nextProject.title} →
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
