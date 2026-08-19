import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './about.module.css'

export const metadata = {
  title: 'About — Nikki Mehrjerdian',
}

export default function About() {
  return (
    <>
      <Nav />

      <section className={styles.aboutHero}>
        <p className="bracket-label">About Me</p>
      </section>

      <div className={styles.aboutGrid}>
        <div className={styles.bioCol}>
          <p className={styles.bioText}>
            Hello! I&apos;m <strong>Nikki Mehrjerdian</strong>, a product designer currently building experiences for drivers at <b>Roadie</b>, a crowdsourced last-mile delivery platform.
          </p>
          <p className={styles.bioText}>
            I'm a design generalist with a focus on UX and research, along with a healthy addiction to strategy and systems thinking. I love collaborating with teams to help make people's lives easier through data-driven, thoughtful design.
          </p>
          <p className={styles.bioText}>
            Outside of work, I enjoy traveling, exploring new hobbies (currently pottery and sewing!), and trying to keep my 1,300-day Duolingo streak alive.
          </p>
          <p>
            If you'd like to say hi, reach out on {' '}
          <a href="https://www.linkedin.com/in/nikkimehrjerdian/" target="_blank" rel="noopener noreferrer">
            Linkedin
          </a> or <a href="mailto:nikkimehrjerdian8@gmail.com" target="_blank" rel="noopener noreferrer">
            email.
          </a>
          </p>
        </div>
        <div className={styles.photoCol}>
        <Image src="/images/about-photo.png" alt="Nikki Mehrjerdian" width={200} height={400} unoptimized style={{borderRadius: '16px', width: '100%', height: 'auto'}} />        
        </div>    
      </div>
      <Footer />
    </>
  )
}
