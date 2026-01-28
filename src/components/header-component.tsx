"use client"

import { Header } from "@/components/blocks/Header"

export function HeaderComponent() {
  const handleSearch = (value: string) => {
    console.log("Header search:", value)
  }

  return (
    <Header
      className="fixed inset-x-0 top-0 z-50"
      projectTitle="USWDS Demo Site"
      navigation={{
        primary: [
          {
            label: "Services",
            href: "#",
            children: [
              { label: "Web Design", href: "#" },
              { label: "Development", href: "#" },
              { label: "Consulting", href: "#" },
              { label: "Design", href: "#" }
            ]
          },
          { label: "About", href: "#", isActive: true },
          { label: "Contact", href: "#" }
        ],
        secondary: [
          { label: "Help", href: "#" },
          { label: "Login", href: "#" }
        ]
      }}
      onSearch={handleSearch}
    />
  )
}