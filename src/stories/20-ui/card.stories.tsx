import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Card,
  CardGroup,
  CardItem,
  CardHeader,
  CardContent,
  CardFooter,
  CardMedia,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Cards contain content and actions about a single subject. Follows USWDS design guidelines with proper semantic structure and accessibility.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// Basic card example
export const Default: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Card Title</h2>
      </CardHeader>
      <CardContent>
        <p className="font-public-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          earum tenetur quo cupiditate, eaque qui officia recusandae.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Visit Florida Keys</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A basic card with header, content, and footer sections.',
      },
    },
  },
}

// Card with image
export const WithImage: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Card with Image</h2>
      </CardHeader>
      <CardMedia variant="default">
        <img
          src="https://placehold.co/640x360"
          alt="Placeholder"
          className="w-full h-full object-cover"
        />
      </CardMedia>
      <CardContent>
        <p className="font-public-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          earum tenetur quo cupiditate, eaque qui officia recusandae.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Visit Florida Keys</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card with an image positioned at the top.',
      },
    },
  },
}

// Card with header first
export const MediaWithHeaderFirst: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Media with header first</h2>
      </CardHeader>
      <CardMedia variant="first">
        <img
          src="https://placehold.co/640x360"
          alt="Placeholder"
          className="w-full h-full object-cover"
        />
      </CardMedia>
      <CardContent>
        <p className="font-public-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          earum tenetur quo cupiditate, eaque qui officia recusandae.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Visit Florida Keys</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card with header displayed before the media.',
      },
    },
  },
}

// Card with inset media
export const InsetMedia: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Inset Media</h2>
      </CardHeader>
      <CardMedia variant="inset">
        <img
          src="https://placehold.co/640x360"
          alt="Placeholder"
          className="w-full h-full object-cover"
        />
      </CardMedia>
      <CardContent>
        <p className="font-public-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          earum tenetur quo cupiditate, eaque qui officia recusandae.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Visit Florida Keys</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card with media inset from the edges with padding.',
      },
    },
  },
}

// Card with exdent media
export const ExdentMedia: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Exdent Media</h2>
      </CardHeader>
      <CardMedia variant="exdent">
        <img
          src="https://placehold.co/640x360"
          alt="Placeholder"
          className="w-full h-full object-cover"
        />
      </CardMedia>
      <CardContent>
        <p className="font-public-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          earum tenetur quo cupiditate, eaque qui officia recusandae.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Visit Florida Keys</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Card with media extending beyond the card borders (no side borders on media).',
      },
    },
  },
}

// Vertical card group
export const VerticalCardGroup: Story = {
  render: () => (
    <CardGroup layout="vertical">
      <CardItem className="bg-white flex flex-col col-span-6 tablet:col-span-3 desktop:col-span-2">
        <CardHeader>
          <h2 className="font-bold font-merriweather text-lg">Card 1</h2>
        </CardHeader>
        <CardContent>
          <p className="font-public-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            earum tenetur quo cupiditate, eaque qui officia recusandae.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Visit Florida Keys</Button>
        </CardFooter>
      </CardItem>

      <CardItem className="bg-white flex flex-col col-span-6 tablet:col-span-3 desktop:col-span-2">
        <CardHeader>
          <h2 className="font-bold font-merriweather text-lg">Card 2</h2>
        </CardHeader>
        <CardMedia variant="default">
          <img
            src="https://placehold.co/640x360"
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        </CardMedia>
        <CardContent>
          <p className="font-public-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            earum tenetur quo cupiditate, eaque qui officia recusandae.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Visit Florida Keys</Button>
        </CardFooter>
      </CardItem>

      <CardItem className="bg-white flex flex-col col-span-6 tablet:col-span-3 desktop:col-span-2">
        <CardHeader>
          <h2 className="font-bold font-merriweather text-lg">Card 3</h2>
        </CardHeader>
        <CardMedia variant="first">
          <img
            src="https://placehold.co/640x360"
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        </CardMedia>
        <CardContent>
          <p className="font-public-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            earum tenetur quo cupiditate, eaque qui officia recusandae.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Visit Florida Keys</Button>
        </CardFooter>
      </CardItem>
    </CardGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Multiple cards in a responsive grid layout. Uses semantic ul/li structure for accessibility.',
      },
    },
  },
}

// Horizontal card layout
export const HorizontalCard: Story = {
  render: () => (
    <Card className="flex-col tablet:flex-row max-w-2xl">
      <CardMedia 
        variant="first" 
        className="tablet:w-60 tablet:shrink-0 tablet:order-first"
      >
        <img
          className="w-full h-full object-cover"
          src="https://placehold.co/640x360"
          alt="Placeholder"
        />
      </CardMedia>
      <div className="flex flex-col grow">
        <CardHeader>
          <h2 className="font-bold font-merriweather text-lg">Default flag</h2>
        </CardHeader>
        <CardContent>
          <p className="font-public-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Visit Florida Keys</Button>
        </CardFooter>
      </div>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Horizontal card layout (flag pattern) with media on the side. Responsive - stacks vertically on mobile.',
      },
    },
  },
}

// Horizontal card with media on right
export const HorizontalCardMediaRight: Story = {
  render: () => (
    <Card className="flex-row max-w-2xl">
      <div className="border-x-2 border-b-2 rounded-b tablet:border-x-0 tablet:rounded-b-none tablet:border-y-2 tablet:border-s-2 tablet:rounded-s border-gray-10 grow">
        <div className="px-6 pt-6 pb-2">
          <h2 className="font-bold font-merriweather text-lg">
            Flag media right inset
          </h2>
        </div>
        <div className="px-6 py-2 grow">
          <p className="font-public-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="px-6 pb-6 pt-2">
          <Button>Visit Florida Keys</Button>
        </div>
      </div>
      <div className="border-x-2 border-t-2 rounded-t tablet:border-x-0 tablet:rounded-none tablet:border-y-2 tablet:border-e-2 border-gray-10 tablet:rounded-e overflow-hidden shrink-0 -order-1 tablet:order-1">
        <img
          className="aspect-video tablet:aspect-auto size-full tablet:w-60 object-cover p-6 pb-0 tablet:pb-6 tablet:pl-0"
          src="https://placehold.co/640x360"
          alt="Placeholder"
        />
      </div>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Horizontal card with media positioned on the right side with inset padding.',
      },
    },
  },
}

// All vertical variants showcase
export const AllVerticalVariants: Story = {
  render: () => (
    <CardGroup layout="vertical">
      {/* Default */}
      <CardItem className="bg-white flex flex-col col-span-6 tablet:col-span-3 desktop:col-span-2">
        <CardHeader>
          <h2 className="font-bold font-merriweather text-lg">Default</h2>
        </CardHeader>
        <CardContent>
          <p className="font-public-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </CardItem>

      {/* Image First */}
      <CardItem className="bg-white flex flex-col col-span-6 tablet:col-span-3 desktop:col-span-2">
        <CardHeader>
          <h2 className="font-bold font-merriweather text-lg">Image First</h2>
        </CardHeader>
        <CardMedia variant="default">
          <img
            src="https://placehold.co/640x360"
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        </CardMedia>
        <CardContent>
          <p className="font-public-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </CardItem>

      {/* Header First */}
      <CardItem className="bg-white flex flex-col col-span-6 tablet:col-span-3 desktop:col-span-2">
        <CardHeader>
          <h2 className="font-bold font-merriweather text-lg">Header First</h2>
        </CardHeader>
        <CardMedia variant="first">
          <img
            src="https://placehold.co/640x360"
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        </CardMedia>
        <CardContent>
          <p className="font-public-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </CardItem>

      {/* Inset Media */}
      <CardItem className="bg-white flex flex-col col-span-6 tablet:col-span-3 desktop:col-span-2">
        <CardHeader>
          <h2 className="font-bold font-merriweather text-lg">Inset Media</h2>
        </CardHeader>
        <CardMedia variant="inset">
          <img
            src="https://placehold.co/640x360"
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        </CardMedia>
        <CardContent>
          <p className="font-public-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </CardItem>

      {/* Exdent Media */}
      <CardItem className="bg-white flex flex-col col-span-6 tablet:col-span-3 desktop:col-span-2">
        <CardHeader>
          <h2 className="font-bold font-merriweather text-lg">Exdent Media</h2>
        </CardHeader>
        <CardMedia variant="exdent">
          <img
            src="https://placehold.co/640x360"
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        </CardMedia>
        <CardContent>
          <p className="font-public-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </CardItem>
    </CardGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All vertical card variants displayed in a responsive grid.',
      },
    },
  },
}