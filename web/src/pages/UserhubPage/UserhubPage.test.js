import { render } from '@redwoodjs/testing/web'

import UserhubPage from './UserhubPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UserhubPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserhubPage />)
    }).not.toThrow()
  })
})
