import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const UserhubPage = () => {
  return (
    <>
      <MetaTags title="Userhub" description="Userhub page" />

      <h1>UserhubPage</h1>
      <p>
        Find me in <code>./web/src/pages/UserhubPage/UserhubPage.js</code>
      </p>
      <p>
        My default route is named <code>userhub</code>, link to me with `
        <Link to={routes.userhub()}>Userhub</Link>`
      </p>
    </>
  )
}

export default UserhubPage
