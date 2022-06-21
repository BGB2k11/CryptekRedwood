import { render } from '@redwoodjs/testing/web'

import UserhubLayout from './UserhubLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UserhubLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserhubLayout />)
    }).not.toThrow()
  })
})
