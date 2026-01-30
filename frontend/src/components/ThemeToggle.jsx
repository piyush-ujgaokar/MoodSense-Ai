import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light'
    } catch (e) {
      return 'light'
    }
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light')
    try { localStorage.setItem('theme', theme) } catch (e) {}
  }, [theme])

  return (
    <div style={{display:'flex',alignItems:'center',gap:10}}>
      <button
        aria-label="Toggle theme"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        style={{
          background: 'transparent',
          border: '1px solid var(--glass-border)',
          color: 'var(--text)',
          padding: '8px 12px',
          borderRadius: 10,
          cursor: 'pointer'
        }}
      >
        {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
      </button>
    </div>
  )
}

export default ThemeToggle
