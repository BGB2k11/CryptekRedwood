import { render } from '@redwoodjs/testing/web'

import AdminpageLayout from './AdminpageLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AdminpageLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminpageLayout />)
    }).not.toThrow()
  })
})
