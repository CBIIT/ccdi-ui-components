import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Label } from "@/components/ui/label"

const meta = {
  title: "UI/Combobox",
  component: Combobox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Filterable listbox built on Base UI Combobox with `InputGroup`, portal popup, and check indicator. Pass `items` on the root and render rows from `ComboboxList` children (item, index).",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-72 space-y-2">
      <Label htmlFor="demo-combobox-framework">Framework</Label>
      <Combobox
        items={["Next.js", "Remix", "Astro", "Nuxt", "SvelteKit", "SolidStart"]}
        autoHighlight
      >
        <ComboboxInput id="demo-combobox-framework" placeholder="Search…" />
        <ComboboxContent>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
          <ComboboxEmpty>No matches found.</ComboboxEmpty>
        </ComboboxContent>
      </Combobox>
    </div>
  ),
}

export const WithClear: Story = {
  render: () => (
    <div className="w-72 space-y-2">
      <Label htmlFor="demo-combobox-clear">Language</Label>
      <Combobox items={["TypeScript", "JavaScript", "Python", "Go", "Rust"]} autoHighlight>
        <ComboboxInput id="demo-combobox-clear" placeholder="Pick a language…" showClear />
        <ComboboxContent>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
          <ComboboxEmpty>No matches.</ComboboxEmpty>
        </ComboboxContent>
      </Combobox>
    </div>
  ),
}

const COUNTRY_OPTIONS = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "mx", label: "Mexico" },
  { value: "gb", label: "United Kingdom" },
]

export const ItemObjects: Story = {
  render: () => (
    <div className="w-72 space-y-2">
      <Label htmlFor="demo-combobox-country">Country</Label>
      <Combobox items={COUNTRY_OPTIONS} autoHighlight>
        <ComboboxInput id="demo-combobox-country" placeholder="Search country…" />
        <ComboboxContent>
          <ComboboxList>
            {(item: (typeof COUNTRY_OPTIONS)[number]) => (
              <ComboboxItem key={item.value} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
          <ComboboxEmpty>No matches found.</ComboboxEmpty>
        </ComboboxContent>
      </Combobox>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Items shaped as `{ value, label }` use the label in the input automatically (Base UI convention).",
      },
    },
  },
}
