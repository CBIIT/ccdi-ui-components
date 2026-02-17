import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Icon, SearchIcon, HomeIcon, PersonIcon } from '@/components/ui/Icon'

describe('Icon', () => {
  describe('Basic rendering', () => {
    it('renders with default props', () => {
      render(<Icon icon="search" data-testid="icon" />)
      
      const icon = screen.getByTestId('icon')
      expect(icon).toBeInTheDocument()
      expect(icon).toHaveAttribute('viewBox', '0 0 24 24')
      expect(icon).toHaveClass('h-8', 'w-8') // default size
    })

    it('renders with different icon types', () => {
      render(<Icon icon="home" data-testid="home-icon" />)
      
      const icon = screen.getByTestId('home-icon')
      expect(icon).toBeInTheDocument()
      expect(icon).toHaveAttribute('viewBox', '0 0 24 24')
    })
  })

  describe('Size variants', () => {
    it('applies xs size correctly', () => {
      render(<Icon icon="search" size="xs" data-testid="icon" />)
      
      const icon = screen.getByTestId('icon')
      expect(icon).toHaveClass('h-4', 'w-4')
    })

    it('applies sm size correctly', () => {
      render(<Icon icon="search" size="sm" data-testid="icon" />)
      
      const icon = screen.getByTestId('icon')
      expect(icon).toHaveClass('h-6', 'w-6')
    })

    it('applies default size correctly', () => {
      render(<Icon icon="search" size="default" data-testid="icon" />)
      
      const icon = screen.getByTestId('icon')
      expect(icon).toHaveClass('h-8', 'w-8')
    })

    it('applies lg size correctly', () => {
      render(<Icon icon="home" size="lg" data-testid="icon" />)
      
      const icon = screen.getByTestId('icon')
      expect(icon).toHaveClass('h-10', 'w-10')
    })

    it('applies xl size correctly', () => {
      render(<Icon icon="home" size="xl" data-testid="icon" />)
      
      const icon = screen.getByTestId('icon')
      expect(icon).toHaveClass('h-12', 'w-12')
    })

    it('applies 2xl size correctly', () => {
      render(<Icon icon="home" size="2xl" data-testid="icon" />)
      
      const icon = screen.getByTestId('icon')
      expect(icon).toHaveClass('h-16', 'w-16')
    })
  })

  describe('Visual variants', () => {
    it('applies default variant classes', () => {
      render(<Icon icon="search" variant="default" data-testid="icon" />)
      
      const icon = screen.getByTestId('icon')
      expect(icon).toHaveClass('stroke-none', 'fill-current')
    })

    it('applies outlined variant classes', () => {
      render(<Icon icon="search" variant="outlined" data-testid="icon" />)
      
      const icon = screen.getByTestId('icon')
      expect(icon).toHaveClass('stroke-current', 'fill-none', 'stroke-2')
    })
  })

  describe('Custom styling', () => {
    it('applies custom className', () => {
      render(<Icon icon="search" className="text-blue-600 custom-class" data-testid="icon" />)
      
      const icon = screen.getByTestId('icon')
      expect(icon).toHaveClass('text-blue-600', 'custom-class')
    })

    it('preserves base classes with custom className', () => {
      render(<Icon icon="search" className="text-red-500" data-testid="icon" />)
      
      const icon = screen.getByTestId('icon')
      expect(icon).toHaveClass('inline-block', 'shrink-0', 'text-red-500')
    })
  })

  describe('Accessibility', () => {
    it('has correct ARIA attributes by default', () => {
      render(<Icon icon="search" data-testid="icon" />)
      
      const icon = screen.getByTestId('icon')
      expect(icon).toHaveAttribute('aria-hidden', 'true')
    })

    it('allows custom ARIA attributes', () => {
      render(<Icon icon="search" aria-label="Search icon" data-testid="icon" />)
      
      const icon = screen.getByTestId('icon')
      expect(icon).toHaveAttribute('aria-label', 'Search icon')
    })
  })
})

describe('Individual Icon Components', () => {
  describe('SearchIcon', () => {
    it('renders correctly with default props', () => {
      render(<SearchIcon data-testid="search-icon" />)
      
      const icon = screen.getByTestId('search-icon')
      expect(icon).toBeInTheDocument()
      expect(icon).toHaveClass('h-8', 'w-8') // default size
    })

    it('applies custom size', () => {
      render(<SearchIcon size="lg" data-testid="search-icon" />)
      
      const icon = screen.getByTestId('search-icon')
      expect(icon).toHaveClass('h-10', 'w-10')
    })

    it('applies custom className', () => {
      render(<SearchIcon className="text-gray-500" data-testid="search-icon" />)
      
      const icon = screen.getByTestId('search-icon')
      expect(icon).toHaveClass('text-gray-500')
    })
  })

  describe('HomeIcon', () => {
    it('renders correctly with default props', () => {
      render(<HomeIcon data-testid="home-icon" />)
      
      const icon = screen.getByTestId('home-icon')
      expect(icon).toBeInTheDocument()
      expect(icon).toHaveClass('h-8', 'w-8')
    })

    it('applies outlined variant', () => {
      render(<HomeIcon variant="outlined" data-testid="home-icon" />)
      
      const icon = screen.getByTestId('home-icon')
      expect(icon).toHaveClass('stroke-current', 'fill-none')
    })
  })

  describe('PersonIcon', () => {
    it('renders correctly', () => {
      render(<PersonIcon data-testid="person-icon" />)
      
      const icon = screen.getByTestId('person-icon')
      expect(icon).toBeInTheDocument()
      expect(icon).toHaveAttribute('viewBox', '0 0 24 24')
    })

    it('applies xl size correctly', () => {
      render(<PersonIcon size="xl" data-testid="person-icon" />)
      
      const icon = screen.getByTestId('person-icon')
      expect(icon).toHaveClass('h-12', 'w-12')
    })
  })
})

describe('Icon combinations and edge cases', () => {
  it('handles all size and variant combinations', () => {
    const sizes = ['xs', 'sm', 'default', 'lg', 'xl', '2xl'] as const
    const variants = ['default', 'outlined'] as const

    sizes.forEach(size => {
      variants.forEach(variant => {
        render(<Icon icon="search" size={size} variant={variant} data-testid={`icon-${size}-${variant}`} />)
        
        const icon = screen.getByTestId(`icon-${size}-${variant}`)
        expect(icon).toBeInTheDocument()
      })
    })
  })

  it('renders multiple icons without conflicts', () => {
    render(
      <div>
        <SearchIcon data-testid="search" />
        <HomeIcon data-testid="home" />
        <PersonIcon data-testid="person" />
      </div>
    )

    expect(screen.getByTestId('search')).toBeInTheDocument()
    expect(screen.getByTestId('home')).toBeInTheDocument()
    expect(screen.getByTestId('person')).toBeInTheDocument()
  })
})
