import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete, AutocompleteOption } from '@/components/ui/autocomplete';
import { useState } from 'react';

const meta: Meta<typeof Autocomplete> = {
  title: 'UI/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A form input control providing users with search suggestions in real time. Based on the NCI Design System autocomplete component.

## Features
- **Real-time search**: Provides suggestions as users type
- **Keyboard navigation**: Full support for arrow keys, Enter, and Escape
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA attributes
- **Customizable**: Configurable minimum character count, max options, and styling
- **Loading states**: Built-in loading indicators
- **Highlight matching text**: Optional text highlighting in suggestions

## Usage
Use autocomplete functionality when providing users with a search opportunity across your site—this can include a global search functionality or a more regional search experience.

## When to use
- To minimize users' time spent when attempting to find specific information
- When the search leads to information on a wide range of topics
- When you have a large dataset that users need to search through

## When to consider something else
- For providing a more specific or defined set of content items (consider Select component instead)
- When you have a small, fixed set of options
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Current input value',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the autocomplete is disabled',
    },
    invalid: {
      control: 'boolean',
      description: 'Whether the autocomplete has an error state',
    },
    success: {
      control: 'boolean',
      description: 'Whether the autocomplete has a success state',
    },
    minCharCount: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Minimum characters before showing suggestions',
    },
    maxOptionsCount: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Maximum number of options to display',
    },
    highlightMatchingText: {
      control: 'boolean',
      description: 'Whether to highlight matching text in suggestions',
    },
    loading: {
      control: 'boolean',
      description: 'Whether to show loading state',
    },
    minPlaceholderMsg: {
      control: 'text',
      description: 'Message shown when below minimum character count',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for stories
const sampleOptions: AutocompleteOption[] = [
  { value: 'breast-cancer', label: 'Breast Cancer' },
  { value: 'lung-cancer', label: 'Lung Cancer' },
  { value: 'colon-cancer', label: 'Colon Cancer' },
  { value: 'prostate-cancer', label: 'Prostate Cancer' },
  { value: 'skin-cancer', label: 'Skin Cancer' },
  { value: 'brain-cancer', label: 'Brain Cancer' },
  { value: 'pancreatic-cancer', label: 'Pancreatic Cancer' },
  { value: 'ovarian-cancer', label: 'Ovarian Cancer' },
  { value: 'kidney-cancer', label: 'Kidney Cancer' },
  { value: 'liver-cancer', label: 'Liver Cancer' },
  { value: 'cancer-research', label: 'Cancer Research' },
  { value: 'cancer-treatment', label: 'Cancer Treatment' },
  { value: 'cancer-prevention', label: 'Cancer Prevention' },
  { value: 'cancer-screening', label: 'Cancer Screening' },
  { value: 'clinical-trials', label: 'Clinical Trials' },
];

// Mock search function with async delay
const mockSearch = async (query: string): Promise<AutocompleteOption[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return sampleOptions.filter(option =>
    option.label.toLowerCase().includes(query.toLowerCase())
  );
};

// Default story
export const Default: Story = {
  args: {
    placeholder: 'Search for cancer information...',
    options: sampleOptions,
  },
};

// With search function
export const WithAsyncSearch: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    
    return (
      <div className="w-96">
        <label htmlFor="async-search" className="block text-sm font-medium text-gray-90 mb-1">
          Search with async results
        </label>
        <Autocomplete
          {...args}
          id="async-search"
          value={value}
          onChange={setValue}
          onSearch={mockSearch}
          placeholder="Type to search (try 'cancer')..."
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Autocomplete with asynchronous search function that simulates API calls.',
      },
    },
  },
};

// States
export const States: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <div>
        <label htmlFor="default-state" className="block text-sm font-medium text-gray-90 mb-1">
          Default
        </label>
        <Autocomplete
          id="default-state"
          placeholder="Default state"
          options={sampleOptions}
        />
      </div>
      
      <div>
        <label htmlFor="success-state" className="block text-sm font-medium text-gray-90 mb-1">
          Success
        </label>
        <Autocomplete
          id="success-state"
          placeholder="Success state"
          success={true}
          options={sampleOptions}
        />
      </div>
      
      <div>
        <label htmlFor="invalid-state" className="block text-sm font-medium text-gray-90 mb-1">
          Invalid
        </label>
        <Autocomplete
          id="invalid-state"
          placeholder="Invalid state"
          invalid={true}
          options={sampleOptions}
        />
        <p className="text-sm text-red-60v mt-1">Please enter a valid search term.</p>
      </div>
      
      <div>
        <label htmlFor="disabled-state" className="block text-sm font-medium text-gray-90 mb-1">
          Disabled
        </label>
        <Autocomplete
          id="disabled-state"
          placeholder="Disabled state"
          disabled={true}
          options={sampleOptions}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different visual states of the autocomplete component.',
      },
    },
  },
};

// With form integration
export const FormIntegration: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState('');
    const [selectedOption, setSelectedOption] = useState<AutocompleteOption | null>(null);
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(`Form submitted with search: "${searchValue}", selected: "${selectedOption?.label || 'None'}"`);
    };
    
    return (
      <form onSubmit={handleSubmit} className="w-96 space-y-4">
        <div>
          <label htmlFor="search-form" className="block text-sm font-medium text-gray-90 mb-1">
            Search for information <span className="text-red-60v">*</span>
          </label>
          <Autocomplete
            id="search-form"
            name="search"
            required
            value={searchValue}
            onChange={setSearchValue}
            onSelect={setSelectedOption}
            placeholder="Required field..."
            options={sampleOptions}
            aria-describedby="search-help"
          />
          <p id="search-help" className="text-sm text-gray-70 mt-1">
            Start typing to see suggestions
          </p>
        </div>
        
        {selectedOption && (
          <div className="p-3 bg-green-10 border border-green-40 rounded">
            <p className="text-sm text-green-70">
              Selected: <strong>{selectedOption.label}</strong>
            </p>
          </div>
        )}
        
        <button
          type="submit"
          className="bg-blue-60v text-white px-4 py-2 rounded hover:bg-blue-70v focus:outline-none focus:ring-2 focus:ring-blue-40v"
        >
          Submit Search
        </button>
      </form>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Autocomplete integrated within a form with validation and submission handling.',
      },
    },
  },
};

// Custom configuration
export const CustomConfiguration: Story = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <div className="w-96 space-y-6">
        <div>
          <label htmlFor="min-chars" className="block text-sm font-medium text-gray-90 mb-1">
            Minimum 5 characters
          </label>
          <Autocomplete
            id="min-chars"
            value={value}
            onChange={setValue}
            placeholder="Type at least 5 characters..."
            options={sampleOptions}
            minCharCount={5}
            minPlaceholderMsg="Please enter at least 5 characters to see suggestions"
          />
        </div>
        
        <div>
          <label htmlFor="max-options" className="block text-sm font-medium text-gray-90 mb-1">
            Maximum 3 options
          </label>
          <Autocomplete
            id="max-options"
            placeholder="Only shows 3 options max..."
            options={sampleOptions}
            maxOptionsCount={3}
          />
        </div>
        
        <div>
          <label htmlFor="no-highlight" className="block text-sm font-medium text-gray-90 mb-1">
            No text highlighting
          </label>
          <Autocomplete
            id="no-highlight"
            placeholder="Text won't be highlighted..."
            options={sampleOptions}
            highlightMatchingText={false}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Autocomplete with various configuration options including character limits and highlighting.',
      },
    },
  },
};

// Loading state
export const LoadingState: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    
    const simulateSlowSearch = async (query: string) => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay
      setLoading(false);
      return sampleOptions.filter(option =>
        option.label.toLowerCase().includes(query.toLowerCase())
      );
    };
    
    return (
      <div className="w-96">
        <label htmlFor="loading-search" className="block text-sm font-medium text-gray-90 mb-1">
          Slow search (2 second delay)
        </label>
        <Autocomplete
          id="loading-search"
          value={value}
          onChange={setValue}
          onSearch={simulateSlowSearch}
          loading={loading}
          placeholder="Type to see loading state..."
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Autocomplete showing loading state during async operations.',
      },
    },
  },
};

// Empty state
export const EmptyState: Story = {
  render: () => (
    <div className="w-96">
      <label htmlFor="empty-search" className="block text-sm font-medium text-gray-90 mb-1">
        No results available
      </label>
      <Autocomplete
        id="empty-search"
        placeholder="No suggestions will be found..."
        options={[]}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Autocomplete with no available options, showing empty state.',
      },
    },
  },
};

// Accessibility demo
export const AccessibilityFeatures: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <div className="p-4 bg-blue-10 border border-blue-40 rounded">
        <h3 className="font-medium text-blue-90 mb-2">Accessibility Features</h3>
        <ul className="text-sm text-blue-80 space-y-1">
          <li>• Screen reader announcements for suggestions count</li>
          <li>• Full keyboard navigation (Arrow keys, Enter, Escape)</li>
          <li>• Proper ARIA attributes (combobox, listbox, activedescendant)</li>
          <li>• Focus management and visual indicators</li>
          <li>• Support for aria-labelledby and aria-describedby</li>
        </ul>
      </div>
      
      <div>
        <label htmlFor="a11y-demo" className="block text-sm font-medium text-gray-90 mb-1">
          Try keyboard navigation
        </label>
        <Autocomplete
          id="a11y-demo"
          placeholder="Use arrow keys to navigate suggestions..."
          options={sampleOptions}
          aria-describedby="a11y-instructions"
        />
        <p id="a11y-instructions" className="text-sm text-gray-70 mt-1">
          Type to see suggestions, then use ↑/↓ arrows to navigate, Enter to select, Esc to close
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of accessibility features including keyboard navigation and screen reader support.',
      },
    },
  },
};