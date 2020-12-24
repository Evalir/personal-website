import * as React from 'react'

export default function SafeLink({ children, location, ...props }) {
  return (
    <a href={location} rel="noopener noreferrer" target="_blank" {...props}>
      {children}
    </a>
  )
}
