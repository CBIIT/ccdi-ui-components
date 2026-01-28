import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

const meta = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An accessible accordion component following USWDS design guidelines. Supports borderless and bordered variants with single or multiple selection modes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['borderless', 'bordered'],
      description: 'Visual style variant of the accordion',
      defaultValue: 'borderless',
    },
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
      description: 'Selection mode - single allows one item open, multiple allows many',
      defaultValue: 'single',
    },
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Borderless: Story = {
  args: {
    variant: 'borderless',
    type: 'single',
  },
  render: (args) => (
    <Accordion variant={args.variant} type={args.type} className="w-[800px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is the U.S. Web Design System?</AccordionTrigger>
        <AccordionContent>
          The U.S. Web Design System (USWDS) is a toolkit of principles, guidance, 
          and code to help government teams design and build accessible, mobile-friendly 
          government websites backed by user research and modern best practices.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How does USWDS help my project?</AccordionTrigger>
        <AccordionContent>
          USWDS provides tested, accessible components that comply with Section 508 
          and WCAG 2.1 AA standards, saving development time and ensuring government 
          website compliance.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I use USWDS with React?</AccordionTrigger>
        <AccordionContent>
          Yes! This component library demonstrates how to implement USWDS patterns 
          using React, TypeScript, and modern component architecture.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Borderless accordion with gray background (default variant). Only one item can be open at a time.',
      },
    },
  },
}

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    type: 'single',
  },
  render: (args) => (
    <Accordion variant={args.variant} type={args.type} className="w-[800px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. This accordion adheres to WAI-ARIA design patterns and includes 
          proper keyboard navigation, focus management, and screen reader support.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can I customize the styling?</AccordionTrigger>
        <AccordionContent>
          Yes. The component uses Tailwind CSS classes and follows USWDS design tokens, 
          making it easy to customize colors, spacing, and typography while maintaining 
          government design standards.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Does it support keyboard navigation?</AccordionTrigger>
        <AccordionContent>
          Absolutely. Use Tab to focus, Enter or Space to toggle, and Arrow keys to 
          navigate between accordion items. All interactions follow accessibility best practices.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Bordered accordion with white background and visible borders. Best for cleaner, more structured layouts.',
      },
    },
  },
}

export const MultipleSelection: Story = {
  args: {
    variant: 'borderless',
    type: 'multiple',
  },
  render: (args) => (
    <Accordion variant={args.variant} type={args.type} className="w-[800px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Keyboard Shortcuts</AccordionTrigger>
        <AccordionContent>
          Use Tab to navigate between items, Enter or Space to toggle, and Escape to close.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Screen Reader Support</AccordionTrigger>
        <AccordionContent>
          All components include proper ARIA labels and announce state changes to screen readers.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Color Contrast</AccordionTrigger>
        <AccordionContent>
          USWDS color palette ensures WCAG 2.1 AA compliant contrast ratios for all text and interactive elements.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple selection mode allows multiple accordion items to be open simultaneously.',
      },
    },
  },
}

export const BorderlessWithCustomIcons: Story = {
  args: {
    variant: 'borderless',
    type: 'single',
  },
  render: (args) => (
    <Accordion variant={args.variant} type={args.type} className="w-[800px]">
      <AccordionItem value="item-1">
        <AccordionTrigger openIcon="expand_less" closedIcon="expand_more">What is the U.S. Web Design System?</AccordionTrigger>
        <AccordionContent>
          The U.S. Web Design System (USWDS) is a toolkit of principles, guidance, 
          and code to help government teams design and build accessible, mobile-friendly 
          government websites backed by user research and modern best practices.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger openIcon="arrow_drop_up" closedIcon="arrow_drop_down">How does USWDS help my project?</AccordionTrigger>
        <AccordionContent>
          USWDS provides tested, accessible components that comply with Section 508 
          and WCAG 2.1 AA standards, saving development time and ensuring government 
          website compliance.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger openIcon="arrow_upward" closedIcon="arrow_downward">Can I use USWDS with React?</AccordionTrigger>
        <AccordionContent>
          Yes! This component library demonstrates how to implement USWDS patterns 
          using React, TypeScript, and modern component architecture.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icons can be selected from the Icon component. The openIcon and closedIcon props are used to set the icons for the accordion trigger.',
      },
    },
  },
}
