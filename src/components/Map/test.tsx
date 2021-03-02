import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map/>', () => {
  it('should render without marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    )
  })

  it('should render with marker in corretly place', () => {
    const place = {
      id: '1',
      name: 'Bebedouro',
      slug: 'bebedouro',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    render(<Map places={[place]} />)

    expect(screen.getByTitle(/bebedouro/i)).toBeInTheDocument()
  })
})
