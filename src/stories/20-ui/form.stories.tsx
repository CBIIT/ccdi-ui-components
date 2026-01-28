import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'UI/Form',
  component: Form,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Form components built on top of react-hook-form with USWDS styling. Provides accessible form controls with validation.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

// Simple Form
export const SimpleForm: Story = {
  args: {} as any,
  render: () => {
    type FormValues = {
      username: string
    }

    const form = useForm<FormValues>({
      defaultValues: {
        username: '',
      },
    })

    function onSubmit(values: FormValues) {
      console.log(values)
      alert(`Form submitted with username: ${values.username}`)
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-[350px]">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter username" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'A simple form with a single input field.',
      },
    },
  },
}

// Contact Form
export const ContactForm: Story = {
  args: {} as any,
  render: () => {
    type FormValues = {
      name: string
      email: string
      message: string
    }

    const form = useForm<FormValues>({
      defaultValues: {
        name: '',
        email: '',
        message: '',
      },
    })

    function onSubmit(values: FormValues) {
      console.log(values)
      alert(`Form submitted!\nName: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`)
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-[450px]">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Input placeholder="Your message..." {...field} />
                </FormControl>
                <FormDescription>
                  Enter your message here.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-2">
            <Button type="submit">Submit</Button>
            <Button type="button" variant="outline" onClick={() => form.reset()}>
              Reset
            </Button>
          </div>
        </form>
      </Form>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'A contact form with multiple fields.',
      },
    },
  },
}

// Registration Form
export const RegistrationForm: Story = {
  args: {} as any,
  render: () => {
    type FormValues = {
      firstName: string
      lastName: string
      email: string
      phone: string
    }

    const form = useForm<FormValues>({
      defaultValues: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
    })

    function onSubmit(values: FormValues) {
      console.log(values)
      alert('Registration form submitted! Check console for values.')
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-[500px]">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormDescription>
                  We'll never share your email with anyone else.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="(555) 123-4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-2">
            <Button type="submit" variant="primary">Register</Button>
            <Button type="button" variant="outline" onClick={() => form.reset()}>
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'A registration form with multiple fields in a two-column layout.',
      },
    },
  },
}

// Form with Validation
export const WithValidation: Story = {
  args: {} as any,
  render: () => {
    type FormValues = {
      username: string
      password: string
    }

    const form = useForm<FormValues>({
      defaultValues: {
        username: '',
        password: '',
      },
    })

    function onSubmit(values: FormValues) {
      console.log(values)
      alert('Form is valid!')
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-[400px]">
          <FormField
            control={form.control}
            name="username"
            rules={{
              required: 'Username is required',
              minLength: {
                value: 5,
                message: 'Username must be at least 5 characters long',
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter username" {...field} />
                </FormControl>
                <FormDescription>
                  Username must be at least 5 characters long.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter password" {...field} />
                </FormControl>
                <FormDescription>
                  Password must be at least 8 characters long.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'A form with validation rules using react-hook-form. Try submitting with empty fields or values that are too short to see validation in action.',
      },
    },
  },
}

// Checkbox Form
export const CheckboxForm: Story = {
  args: {} as any,
  render: () => {
    type FormValues = {
      terms: boolean
    }

    const form = useForm<FormValues>({
      defaultValues: {
        terms: false,
      },
    })

    function onSubmit(values: FormValues) {
      console.log(values)
      alert('Checkbox form submitted!')
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-[350px]">
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border border-input bg-background px-3 py-2 shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-10">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    I accept the terms and conditions
                  </label>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'A form with a checkbox input.',
      },
    },
  },
}

// Radio Group Form
export const RadioGroupForm: Story = {
  args: {} as any,
  render: () => {
    type FormValues = {
      favoriteColor: string
    }

    const form = useForm<FormValues>({
      defaultValues: {
        favoriteColor: '',
      },
    })

    function onSubmit(values: FormValues) {
      console.log(values)
      alert(`Radio group form submitted!\nFavorite Color: ${values.favoriteColor}`)
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-[350px]">
          <FormField
            control={form.control}
            name="favoriteColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is your favorite color?</FormLabel>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="red" id="red" />
                    <Label htmlFor="red">Red</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="blue" id="blue" />
                    <Label htmlFor="blue">Blue</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="green" id="green" />
                    <Label htmlFor="green">Green</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yellow" id="yellow" />
                    <Label htmlFor="yellow">Yellow</Label>
                  </div>
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'A form with a radio group input.',
      },
    },
  },
}

