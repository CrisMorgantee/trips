import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/my-link">Children</LinkWrapper>)

    screen.getByRole('link', { name: /children/i })
  })
})
