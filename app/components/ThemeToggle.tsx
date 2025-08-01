'use client'

import { MonitorIcon, SunIcon, MoonIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const DEFAULT_TOGGLE_ICON_SIZE = 12

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className='flex items-center bg-[var(--toggle-background)] rounded-sm gap-0.5 w-fit h-fit'>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-md transition-all duration-200 ${
          theme === 'system'
            ? 'bg-[var(--toggle-active-background)]'
            : undefined
        }`}
        aria-label='Use system theme'
      >
        <MonitorIcon
          size={DEFAULT_TOGGLE_ICON_SIZE}
          color={
            theme === 'system'
              ? 'var(--toggle-active-icon)'
              : 'var(--toggle-inactive-icon)'
          }
        />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-md transition-all duration-200 ${
          theme === 'dark' ? 'bg-[var(--toggle-active-background)]' : undefined
        }`}
        aria-label='Use dark theme'
      >
        <MoonIcon
          size={DEFAULT_TOGGLE_ICON_SIZE}
          color={
            theme === 'dark'
              ? 'var(--toggle-active-icon)'
              : 'var(--toggle-inactive-icon)'
          }
        />
      </button>
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-md transition-all duration-200 ${
          theme === 'light' ? 'bg-[var(--toggle-active-background)]' : undefined
        }`}
        aria-label='Use light theme'
      >
        <SunIcon
          size={DEFAULT_TOGGLE_ICON_SIZE}
          color={
            theme === 'light'
              ? 'var(--toggle-active-icon)'
              : 'var(--toggle-inactive-icon)'
          }
        />
      </button>
    </div>
  )
}
