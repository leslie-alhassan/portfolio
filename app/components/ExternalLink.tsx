interface ExternalLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export const ExternalLink = ({
  href,
  children,
  className = '',
}: ExternalLinkProps) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`underline decoration-dotted ${className}`}
    >
      {children}
    </a>
  )
}
