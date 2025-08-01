import { ThemeToggle } from './components/ThemeToggle'
import { ExternalLink } from './components/ExternalLink'
import { getRandomQuote } from './data/quotes'

export const dynamic = 'force-dynamic'

export default function HomePage() {
  const randomQuote = getRandomQuote()
  const secondaryTextClass =
    'text-[var(--light-foreground-secondary)] dark:text-[var(--dark-foreground-secondary)]'

  return (
    <div className='h-dvh flex flex-col'>
      {/* Content container */}
      <div className='m-auto flex flex-col w-full max-w-md px-8 sm:px-12 md:px-0 md:w-1/2 lg:w-1/3'>
        {/* Header */}
        <h1 className='font-medium mb-2'>leslie al-hassan</h1>
        <p className={`${secondaryTextClass} mb-8`}>full stack developer</p>

        <div className='space-y-4 mb-8'>
          <p>
            currently @{' '}
            <ExternalLink href='https://www.northone.com/'>
              North One
            </ExternalLink>
          </p>

          <ExternalLink href='/resume.pdf'>resume</ExternalLink>
        </div>

        {/* Footer */}
        <div className='flex flex-col md:flex-row md:justify-between border-t border-[var(--border)] pt-4 gap-4 md:gap-0 md:items-center mb-8'>
          <div className='flex gap-4'>
            <ExternalLink
              href='https://github.com/leslie-alhassan'
              className={secondaryTextClass}
            >
              github
            </ExternalLink>
            <ExternalLink
              href='https://www.linkedin.com/in/leslie-alhassan/'
              className={secondaryTextClass}
            >
              linkedin
            </ExternalLink>
            <ExternalLink
              href='mailto:contact@leslie.casa'
              className={secondaryTextClass}
            >
              mail
            </ExternalLink>
          </div>

          <ThemeToggle />
        </div>

        {/* Quote */}
        <blockquote className='italic text-xs'>
          &ldquo;{randomQuote.quote}&rdquo;
          <footer className={`text-xs mt-2 ${secondaryTextClass}`}>
            — {randomQuote.author}
          </footer>
        </blockquote>
      </div>
    </div>
  )
}
