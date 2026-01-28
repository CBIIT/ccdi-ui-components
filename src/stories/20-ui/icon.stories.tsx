import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Icon,
  IconType,
  // Individual Icon Components
  HomeIcon,
  PersonIcon,
  MailIcon,
  PhoneIcon,
  AutorenewIcon,
  LoopIcon,
  HourglassEmptyIcon,
  VerifiedIcon,
  PublicIcon,
  LocationOnIcon,
  SettingsIcon,
} from "@/components/ui/icon";

const meta: Meta<typeof Icon> = {
  title: "UI/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A comprehensive inline SVG icon component with 77+ USWDS government-appropriate icons, multiple sizes, and variants following U.S. Web Design System guidelines.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: { type: "select" },
      options: [
        // Navigation & Core
        "accessibility_new",
        "accessible_forward",
        "search",
        "home",
        "menu",
        "close",
        "launch",
        // Arrows & Directional
        "arrow_back",
        "arrow_forward",
        "arrow_upward",
        "arrow_downward",
        "arrow_drop_down",
        "arrow_drop_up",
        "expand_more",
        "expand_less",
        "first_page",
        "last_page",
        "navigate_before",
        "navigate_far_before",
        "navigate_far_next",
        "navigate_next",
        "unfold_less",
        "unfold_more",
        // User & Account
        "person",
        "account_circle",
        "account_balance",
        "account_box",
        "groups",
        "group_add",
        "people",
        "login",
        "logout",
        "verified_user",
        // Communication
        "mail",
        "mail_outline",
        "phone",
        "chat",
        "comment",
        "announcement",
        "alternate_email",
        "contact_page",
        "fax",
        "forum",
        "rss_feed",
        "send",
        "support_agent",
        // Documents & Files
        "folder",
        "folder_open",
        "file_download",
        "file_upload",
        "file_present",
        "attach_file",
        "bookmark",
        "content_copy",
        "label",
        "push_pin",
        "topic",
        "upload_file",
        // Calendar & Time
        "calendar_today",
        "event",
        "schedule",
        "alarm",
        "history",
        "hourglass_empty",
        "timer",
        "update",
        // Actions & Editing
        "add",
        "add_circle",
        "add_circle_outline",
        "edit",
        "delete",
        "check",
        "check_box_outline_blank",
        "check_circle",
        "check_circle_outline",
        "cancel",
        "remove",
        "remove_circle",
        "save_alt",
        "autorenew",
        "loop",
        "undo",
        "do_not_disturb",
        "do_not_touch",
        "drag_handle",
        "highlight_off",
        // Status & Alerts
        "info",
        "info_outline",
        "warning",
        "error",
        "error_outline",
        "help",
        "help_outline",
        "notifications",
        "notifications_active",
        "notifications_none",
        "notifications_off",
        "priority_high",
        // Security & Privacy
        "lock",
        "lock_open",
        "lock_outline",
        "security",
        "shield",
        "verified",
        "visibility",
        "visibility_off",
        "fingerprint",
        "identification",
        // Government & Civic
        "flag",
        "public",
        "local_police",
        "military_tech",
        "report",
        // Location & Maps
        "location_on",
        "location_city",
        "map",
        "my_location",
        "near_me",
        // Transportation
        "directions",
        "directions_bike",
        "directions_bus",
        "directions_car",
        "directions_walk",
        "flight",
        "local_taxi",
        // Places & Buildings
        "local_hospital",
        "hospital",
        "hotel",
        "deck",
        "local_cafe",
        "local_fire_department",
        "local_gas_station",
        "local_grocery_store",
        "local_laundry_service",
        "local_library",
        "local_offer",
        "local_parking",
        "local_pharmacy",
        "park",
        "restaurant",
        "store",
        // Social Media
        "facebook",
        "twitter",
        "x_logo",
        "instagram",
        "linkedin",
        "youtube",
        "github",
        "flickr",
        // Media & Content
        "image",
        "photo_camera",
        "list",
        "grid_view",
        "volume_off",
        "closed_caption",
        "fast_forward",
        "fast_rewind",
        // Weather & Natural Disasters
        "flooding",
        "hurricane",
        "rain",
        "severe_weather",
        "snow",
        "tornado",
        // Health & Medical
        "clean_hands",
        "wash",
        "soap",
        "sanitizer",
        "masks",
        "coronavirus",
        "medical_services",
        "connect_without_contact",
        "social_distance",
        "reduce_capacity",
        "hearing",
        // Shopping & Commerce
        "attach_money",
        "credit_card",
        "shopping_basket",
        // Technology & Devices
        "api",
        "cloud",
        "code",
        "keyboard",
        "wifi",
        // Utilities & Tools
        "settings",
        "print",
        "share",
        "link",
        "link_off",
        "assessment",
        "build",
        "bug_report",
        "construction",
        "construction_worker",
        "device_thermostat",
        "eco",
        "electrical_services",
        "filter_alt",
        "filter_list",
        "insights",
        "more_horiz",
        "more_vert",
        "support",
        // Sentiment & Emoji
        "emoji_events",
        "sentiment_satisfied",
        "sentiment_satisfied_alt",
        "sentiment_neutral",
        "sentiment_dissatisfied",
        "sentiment_very_dissatisfied",
        "pets",
        // Formatting & Editor
        "format_quote",
        "format_size",
        "spellcheck",
        "text_fields",
        "translate",
        // Legacy (kept for compatibility)
        "backpack",
        "bathtub",
        "bedding",
        "campaign",
        "camping",
        "checkroom",
        "clothes",
      ] as IconType[],
      description: "The icon to display",
    },
    size: {
      control: { type: "select" },
      options: ["2xs", "xs", "sm", "default", "lg", "xl", "2xl"],
      description: "Size of the icon",
    },
    spin: {
      control: { type: "boolean" },
      description: "Enable spin animation for loading states",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    icon: "home",
  },
};

export const WithCustomSize: Story = {
  args: {
    icon: "search",
    size: "xl",
  },
};

export const WithCustomStyles: Story = {
  args: {
    icon: "flag",
    size: "lg",
    className: "text-blue-60 hover:text-blue-800",
  },
};

// Size Variations
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-6">
      <div className="flex flex-col items-center gap-2">
        <HomeIcon size="2xs" className="text-gray-800" />
        <span className="text-sm font-medium text-gray-70">2XS (16px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <HomeIcon size="xs" className="text-gray-800" />
        <span className="text-sm font-medium text-gray-70">XS (20px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <HomeIcon size="sm" className="text-gray-800" />
        <span className="text-sm font-medium text-gray-70">SM (24px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <HomeIcon size="default" className="text-gray-800" />
        <span className="text-sm font-medium text-gray-70">Default (32px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <HomeIcon size="lg" className="text-gray-800" />
        <span className="text-sm font-medium text-gray-70">LG (40px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <HomeIcon size="xl" className="text-gray-800" />
        <span className="text-sm font-medium text-gray-70">XL (48px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <HomeIcon size="2xl" className="text-gray-800" />
        <span className="text-sm font-medium text-gray-70">2XL (64px)</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Icon sizes from 2XS (16px) to 2XL (64px), optimized for government interfaces.",
      },
    },
  },
};

// Spinning Icons (Loading States)
export const SpinningIcons: Story = {
  render: () => (
    <div className="flex items-center gap-8 p-6">
      <div className="flex flex-col items-center gap-2">
        <AutorenewIcon spin size="lg" className="text-gray-600" />
        <span className="text-sm font-medium text-gray-70">Autorenew</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <LoopIcon spin size="lg" className="text-gray-600" />
        <span className="text-sm font-medium text-gray-70">Loop</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <SettingsIcon spin size="lg" className="text-gray-600" />
        <span className="text-sm font-medium text-gray-70">Settings</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <HourglassEmptyIcon spin size="lg" className="text-gray-600" />
        <span className="text-sm font-medium text-gray-70">Hourglass</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Icons with spin animation for loading states and processing indicators. Use the `spin` prop to enable continuous rotation.",
      },
    },
  },
};

// Government Contact Card Example
export const GovernmentContactCard: Story = {
  args: { icon: "person" },
  render: () => (
    <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-sm shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <PersonIcon size="lg" className="text-gray-800" />
        <div>
          <h3 className="font-semibold text-gray-900">Contact Information</h3>
          <p className="text-sm text-gray-600">Get in touch with us</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <PhoneIcon size="sm" className="text-gray-700" />
          <span className="text-sm text-gray-700">(555) 123-4567</span>
        </div>
        <div className="flex items-center gap-3">
          <MailIcon size="sm" className="text-gray-700" />
          <span className="text-sm text-gray-700">contact@agency.gov</span>
        </div>
        <div className="flex items-center gap-3">
          <LocationOnIcon size="sm" className="text-gray-700" />
          <span className="text-sm text-gray-700">
            123 Government Ave, DC 20001
          </span>
        </div>
        <div className="flex items-center gap-3">
          <PublicIcon size="sm" className="text-gray-700" />
          <span className="text-sm text-gray-700">www.agency.gov</span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <VerifiedIcon size="sm" className="text-gray-700" />
          <span className="text-xs text-gray-600">
            Verified Government Agency
          </span>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Example usage of USWDS icons in a government contact card component.",
      },
    },
    layout: "centered",
  },
};
