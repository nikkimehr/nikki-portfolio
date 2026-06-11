import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './page.module.css'

const projects = [
  {
    slug: 'dynamic-logic-system',
    company: 'Roadie',
    title: "Reframing a sizing problem into Roadie's first dynamic logic system",
    tags: ['0–1', 'Mobile'],
    featured: true,
  },
  {
    slug: 'vehicle-data-foundation',
    company: 'Roadie',
    title: 'Multi-phase effort to collect & build vehicle data foundation',
    tags: ['Mobile', 'Web'],
    featured: false,
  },
  {
    slug: 'gig-matching-system',
    company: 'Roadie',
    title: 'Gig-matching system that notifies drivers of compatible deliveries',
    tags: ['0–1', 'Mobile'],
    featured: false,
  },
  {
    slug: 'verizon-smart-family',
    company: 'Publicis Sapient | Verizon Smart Family',
    title: 'Redesigning the location tracking and pick me up features',
    tags: ['Client Work', 'Mobile'],
    featured: false,
  },
  {
    slug: 'verizon-cloud',
    company: 'Publicis Sapient | Verizon Cloud',
    title: 'Redesigning the offboarding & plan cancellation experience.',
    tags: ['Client Work', 'Mobile', 'Web'],
    featured: false,
  },
  {
    slug: 'driver-tier-research',
    company: 'Roadie',
    title: "Reframing a sizing problem into Roadie's first dynamic logic system",
    tags: ['0–1', 'Research', 'Mobile'],
    featured: true,
  },
]

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured)
  const gridProjects = projects.filter(p => !p.featured)

  return (
    <>
      <Nav />

      <section className={styles.hero}>
        <h1>Hi there! I&apos;m Nikki.</h1>
        <p>
          Product designer based in Atlanta, Georgia. Currently at{' '}
          <a href="https://www.roadie.com" target="_blank" rel="noopener noreferrer">
            Roadie
          </a>
          , leading design for the Driver app.
        </p>
      </section>

      <section className={styles.workSection} id="work">
        <p className={`bracket-label ${styles.sectionLabel}`}>Selected Work</p>

        {/* First featured card */}
        <Link href={`/work/${featuredProjects[0].slug}`} className={styles.cardFeatured}>
          <div className={styles.cardImage} />
          <div className={styles.cardContent}>
            <p className={styles.cardCompany}>{featuredProjects[0].company}</p>
            <h2 className={styles.cardTitle}>{featuredProjects[0].title}</h2>
            <div className="tags">
              {featuredProjects[0].tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </Link>

        {/* 2-column grid */}
        <div className={styles.cardsGrid}>
          {gridProjects.map(project => (
            <Link key={project.slug} href={`/work/${project.slug}`} className={styles.card}>
              <div className={styles.cardImageSmall} />
              <div className={styles.cardContent}>
                <p className={styles.cardCompany}>{project.company}</p>
                <h2 className={styles.cardTitleSmall}>{project.title}</h2>
                <div className="tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Second featured card */}
        <Link href={`/work/${featuredProjects[1].slug}`} className={styles.cardFeatured}>
          <div className={styles.cardImage} />
          <div className={styles.cardContent}>
            <p className={styles.cardCompany}>{featuredProjects[1].company}</p>
            <h2 className={styles.cardTitle}>{featuredProjects[1].title}</h2>
            <div className="tags">
              {featuredProjects[1].tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </Link>
      </section>

      <Footer />
    </>
  )
}
