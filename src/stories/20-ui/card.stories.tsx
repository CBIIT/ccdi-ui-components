import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Card,
  CardGroup,
  CardItem,
  CardHeader,
  CardContent,
  CardFooter,
  CardMedia,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Cards contain content and actions about a single subject. Follows USWDS design guidelines with proper semantic structure and accessibility.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// Basic card example
export const Default: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <h2 className="font-semibold font-poppins text-xl">Card Title</h2>
      </CardHeader>
      <CardContent>
        <p className="font-open-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo
          cupiditate, eaque qui officia recusandae.
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
        story: "A basic card with header, content, and footer sections.",
      },
    },
  },
}

// Card with image
export const WithImage: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <h2 className="font-semibold font-poppins text-xl">Card with Image</h2>
      </CardHeader>
      <CardMedia variant="default">
        <img
          src="https://placehold.co/640x360"
          alt="Placeholder"
          className="h-full w-full object-cover"
        />
      </CardMedia>
      <CardContent>
        <p className="font-open-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo
          cupiditate, eaque qui officia recusandae.
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
        story: "Card with an image positioned at the top.",
      },
    },
  },
}

// Card with header first
export const MediaWithHeaderFirst: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <h2 className="font-semibold font-poppins text-xl">Media with header first</h2>
      </CardHeader>
      <CardMedia variant="first">
        <img
          src="https://placehold.co/640x360"
          alt="Placeholder"
          className="h-full w-full object-cover"
        />
      </CardMedia>
      <CardContent>
        <p className="font-public-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo
          cupiditate, eaque qui officia recusandae.
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
        story: "Card with header displayed before the media.",
      },
    },
  },
}

// Card with inset media
export const InsetMedia: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <h2 className="font-semibold font-poppins text-xl">Inset Media</h2>
      </CardHeader>
      <CardMedia variant="inset">
        <img
          src="https://placehold.co/640x360"
          alt="Placeholder"
          className="h-full w-full object-cover"
        />
      </CardMedia>
      <CardContent>
        <p className="font-open-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo
          cupiditate, eaque qui officia recusandae.
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
        story: "Card with media inset from the edges with padding.",
      },
    },
  },
}

// Card with exdent media
export const ExdentMedia: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <h2 className="font-semibold font-poppins text-xl">Exdent Media</h2>
      </CardHeader>
      <CardMedia variant="exdent">
        <img
          src="https://placehold.co/640x360"
          alt="Placeholder"
          className="h-full w-full object-cover"
        />
      </CardMedia>
      <CardContent>
        <p className="font-open-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo
          cupiditate, eaque qui officia recusandae.
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
        story: "Card with media extending beyond the card borders (no side borders on media).",
      },
    },
  },
}

// Vertical card group
export const VerticalCardGroup: Story = {
  render: () => (
    <CardGroup layout="vertical">
      <CardItem className="bg-white col-span-6 flex flex-col tablet:col-span-3 desktop:col-span-2">
        <CardHeader>
          <h2 className="font-semibold font-poppins text-xl">Card 1</h2>
        </CardHeader>
        <CardContent>
          <p className="font-open-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo
            cupiditate, eaque qui officia recusandae.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Visit Florida Keys</Button>
        </CardFooter>
      </CardItem>

      <CardItem className="bg-white col-span-6 flex flex-col tablet:col-span-3 desktop:col-span-2">
        <CardHeader>
          <h2 className="font-semibold font-poppins text-xl">Card 2</h2>
        </CardHeader>
        <CardMedia variant="default">
          <img
            src="https://placehold.co/640x360"
            alt="Placeholder"
            className="h-full w-full object-cover"
          />
        </CardMedia>
        <CardContent>
          <p className="font-open-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo
            cupiditate, eaque qui officia recusandae.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Visit Florida Keys</Button>
        </CardFooter>
      </CardItem>

      <CardItem className="bg-white col-span-6 flex flex-col tablet:col-span-3 desktop:col-span-2">
        <CardHeader>
          <h2 className="font-semibold font-poppins text-xl">Card 3</h2>
        </CardHeader>
        <CardMedia variant="first">
          <img
            src="https://placehold.co/640x360"
            alt="Placeholder"
            className="h-full w-full object-cover"
          />
        </CardMedia>
        <CardContent>
          <p className="font-open-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo
            cupiditate, eaque qui officia recusandae.
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
          "Multiple cards in a responsive grid layout. Uses semantic ul/li structure for accessibility.",
      },
    },
  },
}

// Horizontal card layout
export const HorizontalCard: Story = {
  render: () => (
    <Card className="max-w-2xl flex-col tablet:flex-row">
      <CardMedia variant="first" className="tablet:order-first tablet:w-60 tablet:shrink-0">
        <img
          className="h-full w-full object-cover"
          src="https://placehold.co/640x360"
          alt="Placeholder"
        />
      </CardMedia>
      <div className="flex grow flex-col">
        <CardHeader>
          <h2 className="font-semibold font-poppins text-xl">Default flag</h2>
        </CardHeader>
        <CardContent>
          <p className="font-open-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
          "Horizontal card layout (flag pattern) with media on the side. Responsive - stacks vertically on mobile.",
      },
    },
  },
}

// Horizontal card with media on right
export const HorizontalCardMediaRight: Story = {
  render: () => (
    <Card className="max-w-2xl flex-row">
      <div className="rounded-b tablet:rounded-s grow border-x-2 border-b-2 border-gray-10 tablet:rounded-b-none tablet:border-x-0 tablet:border-y-2 tablet:border-s-2">
        <div className="px-6 pt-6 pb-2">
          <h2 className="font-semibold font-poppins text-xl">Flag media right inset</h2>
        </div>
        <div className="grow px-6 py-2">
          <p className="font-open-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="px-6 pt-2 pb-6">
          <Button>Visit Florida Keys</Button>
        </div>
      </div>
      <div className="rounded-t tablet:rounded-e -order-1 shrink-0 overflow-hidden border-x-2 border-t-2 border-gray-10 tablet:order-1 tablet:rounded-none tablet:border-x-0 tablet:border-y-2 tablet:border-e-2">
        <img
          className="aspect-video size-full object-cover p-6 pb-0 tablet:aspect-auto tablet:w-60 tablet:pb-6 tablet:pl-0"
          src="https://placehold.co/640x360"
          alt="Placeholder"
        />
      </div>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Horizontal card with media positioned on the right side with inset padding.",
      },
    },
  },
}

// All vertical variants showcase
export const AllVerticalVariants: Story = {
  render: () => (
    <CardGroup layout="vertical">
      {/* Default */}
      <CardItem className="bg-white col-span-6 flex flex-col tablet:col-span-3 desktop:col-span-2">
        <CardHeader>
          <h2 className="font-semibold font-poppins text-xl">Default</h2>
        </CardHeader>
        <CardContent>
          <p className="font-open-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </CardItem>

      {/* Image First */}
      <CardItem className="bg-white col-span-6 flex flex-col tablet:col-span-3 desktop:col-span-2">
        <CardHeader>
          <h2 className="font-semibold font-poppins text-xl">Image First</h2>
        </CardHeader>
        <CardMedia variant="default">
          <img
            src="https://placehold.co/640x360"
            alt="Placeholder"
            className="h-full w-full object-cover"
          />
        </CardMedia>
        <CardContent>
          <p className="font-open-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </CardItem>

      {/* Header First */}
      <CardItem className="bg-white col-span-6 flex flex-col tablet:col-span-3 desktop:col-span-2">
        <CardHeader>
          <h2 className="font-semibold font-poppins text-xl">Header First</h2>
        </CardHeader>
        <CardMedia variant="first">
          <img
            src="https://placehold.co/640x360"
            alt="Placeholder"
            className="h-full w-full object-cover"
          />
        </CardMedia>
        <CardContent>
          <p className="font-open-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </CardItem>

      {/* Inset Media */}
      <CardItem className="bg-white col-span-6 flex flex-col tablet:col-span-3 desktop:col-span-2">
        <CardHeader>
          <h2 className="font-semibold font-poppins text-xl">Inset Media</h2>
        </CardHeader>
        <CardMedia variant="inset">
          <img
            src="https://placehold.co/640x360"
            alt="Placeholder"
            className="h-full w-full object-cover"
          />
        </CardMedia>
        <CardContent>
          <p className="font-open-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </CardItem>

      {/* Exdent Media */}
      <CardItem className="bg-white col-span-6 flex flex-col tablet:col-span-3 desktop:col-span-2">
        <CardHeader>
          <h2 className="font-semibold font-poppins text-xl">Exdent Media</h2>
        </CardHeader>
        <CardMedia variant="exdent">
          <img
            src="https://placehold.co/640x360"
            alt="Placeholder"
            className="h-full w-full object-cover"
          />
        </CardMedia>
        <CardContent>
          <p className="font-open-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
        story: "All vertical card variants displayed in a responsive grid.",
      },
    },
  },
}
