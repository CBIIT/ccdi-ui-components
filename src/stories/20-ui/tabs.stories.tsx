import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Icon } from "@/components/ui/icon"

const meta: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A tabs component for organizing content into separate views, following U.S. Web Design System guidelines.",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

// Basic tabs example
export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[500px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Account Information</h3>
          <p className="text-gray-700">
            Make changes to your account here. Click save when you&apos;re done.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Password</h3>
          <p className="text-gray-700">
            Change your password here. After saving, you&apos;ll be logged out.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Settings</h3>
          <p className="text-gray-700">Manage your application settings and preferences.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

// Tabs with icons
export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="profile" className="w-[500px]">
      <TabsList>
        <TabsTrigger value="profile">
          <Icon icon="person" size="lg" />
          Profile
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <Icon icon="notifications" size="sm" />
          Notifications
        </TabsTrigger>
        <TabsTrigger value="security">
          <Icon icon="lock" size="sm" />
          Security
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Profile Settings</h3>
          <p className="text-gray-700">
            Update your profile information and public display settings.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="notifications">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Notification Preferences</h3>
          <p className="text-gray-700">Manage how and when you receive notifications.</p>
        </div>
      </TabsContent>
      <TabsContent value="security">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Security Options</h3>
          <p className="text-gray-700">
            Configure your security settings and two-factor authentication.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}
