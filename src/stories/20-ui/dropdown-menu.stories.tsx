import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'

const meta: Meta<typeof DropdownMenu> = {
  title: 'UI/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A dropdown menu component that displays a list of actions or options when triggered. Built with native HTML/CSS following USWDS design guidelines.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <Icon icon="account_circle" size="xs" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="credit_card" size="xs" />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="settings" size="xs" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icon icon="logout" size="xs" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithShortcuts: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <Icon icon="group_add" size="xs" />
          New User
          <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="content_copy" size="xs" />
          Copy
          <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="file_download" size="xs" />
          Paste
          <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icon icon="delete" size='xs' />
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithCheckboxes: Story = {
  render: () => {
    const CheckboxExample = () => {
      const [showStatusBar, setShowStatusBar] = useState(true)
      const [showActivityBar, setShowActivityBar] = useState(false)
      const [showPanel, setShowPanel] = useState(false)

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">View Options</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
            >
              Status Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showActivityBar}
              onCheckedChange={setShowActivityBar}
            >
              Activity Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showPanel}
              onCheckedChange={setShowPanel}
            >
              Panel
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }

    return <CheckboxExample />
  },
}

export const WithRadioGroup: Story = {
  render: () => {
    const RadioExample = () => {
      const [position, setPosition] = useState('bottom')

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Panel Position</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
              <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }

    return <RadioExample />
  },
}

export const WithSubmenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <Icon icon="undo" size="xs" />
          Undo
          <DropdownMenuShortcut>⌘Z</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="arrow_forward" size="xs" />
          Redo
          <DropdownMenuShortcut>⌘Y</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Icon icon="share" size="xs" />
            Share
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-48">
            <DropdownMenuItem>
              <Icon icon="mail" size="xs" />
              Email
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon icon="link" size="xs" />
              Copy Link
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon icon="forum" size="xs" />
              Message
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithGroupsAndLabels: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Organize</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Icon icon="account_circle" size="xs" />
            Profile
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon icon="settings" size="xs" />
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Team</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Icon icon="groups" size="xs" />
            Team
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon icon="group_add" size="xs" />
            Invite users
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithDestructiveActions: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">File Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <Icon icon="edit" size="xs" />
          Rename
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="content_copy" size="xs" />
          Duplicate
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="folder" size="xs" />
          Move
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <Icon icon="delete" className="text-red-60v" size="xs" />
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const ComplexExample: Story = {
  render: () => {
    const ComplexDropdown = () => {
      const [showBookmarks, setShowBookmarks] = useState(false)
      const [showFullUrls, setShowFullUrls] = useState(true)
      const [view, setView] = useState('grid')

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Icon icon="more_vert" size="xs" />
              Options
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64">
            <DropdownMenuLabel>File Browser</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Icon icon="folder_open" size="xs" />
                New Folder
                <DropdownMenuShortcut>⌘⇧N</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icon icon="file_upload" size="xs" />
                Upload File
                <DropdownMenuShortcut>⌘U</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>View Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showBookmarks}
              onCheckedChange={setShowBookmarks}
            >
              Show Bookmarks Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showFullUrls}
              onCheckedChange={setShowFullUrls}
            >
              Show Full URLs
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={view} onValueChange={setView}>
              <DropdownMenuLabel>Display Mode</DropdownMenuLabel>
              <DropdownMenuRadioItem value="grid">
                <Icon icon="grid_view" size="xs" />
                Grid View
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="list">
                <Icon icon="list" size="xs" />
                List View
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="compact">
                <Icon icon="menu" size="xs" />
                Compact View
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Icon icon="folder" size="xs" />
                Share Folder
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="w-48">
                <DropdownMenuItem>
                  <Icon icon="mail" size="xs" />
                  Email Link
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon icon="link" size="xs" />
                  Copy Link
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Icon icon="group_add" size="xs" />
                  Invite People
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <Icon icon="delete" className="text-red-60v" size="xs" />
              Delete Folder
              <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }

    return <ComplexDropdown />
  },
}

export const WithInsetItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Document Actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Document</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem inset>Save</DropdownMenuItem>
        <DropdownMenuItem inset>Save As...</DropdownMenuItem>
        <DropdownMenuItem inset>Export</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel inset>Recent Files</DropdownMenuLabel>
        <DropdownMenuItem inset>Document 1.pdf</DropdownMenuItem>
        <DropdownMenuItem inset>Document 2.pdf</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const ControlledDropdown: Story = {
  render: () => {
    const ControlledExample = () => {
      const [open, setOpen] = useState(false)

      return (
        <div className="space-y-4">
          <div className="text-sm text-gray-70">
            Menu is: <strong>{open ? 'Open' : 'Closed'}</strong>
          </div>
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Controlled Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem onClick={() => alert('Profile clicked')}>
                <Icon icon="account_circle" size="xs" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => alert('Settings clicked')}>
                <Icon icon="settings" size="xs" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setOpen(false)}>
                <Icon icon="close" size="xs" />
                Close Menu
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button onClick={() => setOpen(!open)} variant="secondary">
            Toggle from outside
          </Button>
        </div>
      )
    }

    return <ControlledExample />
  },
}
