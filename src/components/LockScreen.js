'use client'

import { useState } from 'react'
import styles from './LockScreen.module.css'

export default function LockScreen() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const res = await fetch('/api/unlock', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      window.location.reload()
    } else {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <main className={styles.screen}>
      <div className={styles.content}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className={styles.icon}>
          <rect x="5" y="10" width="14" height="10" rx="2" stroke="#0d1b2a" strokeWidth="1.6" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="#0d1b2a" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="12" cy="14.5" r="1.4" fill="#0d1b2a" />
        </svg>

        <p className={styles.instruction}>Please enter password to view portfolio.</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputWrap}>
            <input
              type={visible ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              autoFocus
            />
            <button
              type="button"
              onClick={() => setVisible((v) => !v)}
              className={styles.eyeButton}
              aria-label={visible ? 'Hide password' : 'Show password'}
              aria-pressed={visible}
            >
              {visible ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 3l18 18" stroke="#4c535e" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M10.6 5.1A10.7 10.7 0 0 1 12 5c5 0 9 4 10.5 7-.6 1.1-1.4 2.3-2.5 3.4M6.6 6.6C4.6 8 3.1 9.9 1.5 12 3 15 7 19 12 19a10.6 10.6 0 0 0 4.2-.9" stroke="#4c535e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.9 10a3 3 0 0 0 4.1 4.1" stroke="#4c535e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7-10.5-7-10.5-7z" stroke="#4c535e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="3" stroke="#4c535e" strokeWidth="1.6" />
                </svg>
              )}
            </button>
          </div>
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? 'Checking…' : 'Unlock'}
          </button>
        </form>

        {error && <p className={styles.error}>That password isn&apos;t right. Try again.</p>}

        <p className={styles.footer}>
          No passcode?{' '}
          <a href="mailto:nikkimehrjerdian8@gmail.com" className={styles.link}>
            Reach out
          </a>
        </p>
      </div>
    </main>
  )
}
