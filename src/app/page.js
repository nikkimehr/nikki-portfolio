import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './page.module.css'

const projects = [
  {
    slug: 'gig-fit-check',
    company: 'Roadie',
    title: "Reframing a sizing problem into Roadie's first dynamic logic system",
    tags: ['0–1', 'Mobile'],
  },
   {
    slug: 'find-me-gigs',
    company: 'Roadie',
    title: 'Gig-matching system that notifies drivers of compatible deliveries',
    tags: ['0–1', 'Mobile'],
  },
  {
    slug: 'vehicle-data-collection',
    company: 'Roadie',
    title: 'Multi-phase effort to collect & build vehicle data foundation',
    tags: ['Mobile', 'Web'],
  },
  {
    slug: 'verizon-smart-family',
    company: 'Publicis Sapient | Verizon Smart Family',
    title: 'Elevating a premium offering into a complete family location experience',
    tags: ['Client Work', 'Mobile'],
  },
  {
    slug: 'verizon-cloud-offboarding',
    company: 'Publicis Sapient | Verizon Cloud',
    title: 'Turning a destructive action into an informed offboarding experience',
    tags: ['Client Work', 'Mobile', 'Web'],
  },
  {
    slug: 'verizon-smart-family-onboarding',
    company: 'Publicis Sapient | Verizon Smart Family',
    title: "Building trust into Smart Family's onboarding experience",
    tags: ['Client Work', 'Mobile'],
  },
]

export default function Home() {
 // const featuredProjects = projects.filter(p => p.featured)
  const gridProjects = projects.filter(p => !p.featured)

  return (
    <>
      <Nav />

      <section className={styles.hero}>
        <h1>Hi there! I&apos;m Nikki.</h1>
        <p>
          Product designer based in Atlanta, Georgia. Currently leading design for the Driver app at{' '}
          <a href="https://www.roadie.com" target="_blank" rel="noopener noreferrer">
            Roadie.
          </a>
        </p>
      </section>

      <section className={styles.workSection} id="work">
        <p className={`bracket-label ${styles.sectionLabel}`}>Selected Work</p>
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

      </section>

      <Footer />
    </>
  )
}
