import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const meta = {
  title: "UI/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Embla-powered carousel with previous/next controls and keyboard arrows. Wrap slides in `CarouselContent` / `CarouselItem`; navigation buttons are absolutely positioned outside the track (add horizontal padding in your layout).",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-xl box-border w-full min-w-[min(100%,24rem)] px-14 py-10">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

const slides = [
  { title: "Slide 1", tone: "bg-cerulean-10 text-cerulean-80" },
  { title: "Slide 2", tone: "bg-golden-20 text-gray-90" },
  { title: "Slide 3", tone: "bg-teal-10 text-teal-80" },
]

export const Default: Story = {
  render: () => (
    <Carousel className="w-full">
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.title}>
            <div
              className={`text-lg font-semibold flex h-48 items-center justify-center rounded-lg border border-border font-public-sans ${slide.tone}`}
            >
              {slide.title}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}
