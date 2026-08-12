'use client'

import { useState } from 'react'
import styles from '../case-study.module.css'

// before/after are arrays of image paths (up to 4 each). Drop real paths in
// from the parent page once screens are ready — until then this renders a
// placeholder for whichever state is active.
export default function PhaseToggle({ before = [], after = [] }) {
  const [state, setState] = useState('before')
  const screens = state === 'before' ? before : after

  return (
    <>
      {screens.length === 0 ? (
        <div className={styles.placeholderBlock}>
          <p>Add {state} screen images to this phase&apos;s screens array</p>
        </div>
      ) : (
        <div className={styles.phaseScreens}>
          {screens.map((src, i) => (
            <img key={src + i} src={src} alt="" className={styles.phaseScreen} />
          ))}
        </div>
      )}

      <div className={styles.phaseToggle}>
        <button
          type="button"
          className={`${styles.toggleBtn} ${state === 'before' ? styles.active : ''}`}
          onClick={() => setState('before')}
        >
          Before
        </button>
        <button
          type="button"
          className={`${styles.toggleBtn} ${state === 'after' ? styles.active : ''}`}
          onClick={() => setState('after')}
        >
          After
        </button>
      </div>
    </>
  )
}
