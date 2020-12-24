import * as React from 'react'
import { Link } from 'gatsby'

export default function NotFound() {
  return (
    <main>
      <title>Not found</title>
      <h1>Page not found</h1>
      <p>
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        I couldn’t find what you were looking for. This is a living site, so it
        might get added later. :)
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home, wanderer</Link>.
      </p>
    </main>
  )
}
