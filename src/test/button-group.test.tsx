import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

describe("ButtonGroup", () => {
  it("renders button group with role group", () => {
    const { container } = render(
      <ButtonGroup>
        <Button variant="outline">Button 1</Button>
        <Button variant="outline">Button 2</Button>
      </ButtonGroup>
    )
    
    const group = container.querySelector('[role="group"]')
    expect(group).toBeInTheDocument()
    expect(screen.getByText("Button 1")).toBeInTheDocument()
    expect(screen.getByText("Button 2")).toBeInTheDocument()
  })

  it("renders horizontal orientation by default", () => {
    const { container } = render(
      <ButtonGroup>
        <Button variant="outline">Button 1</Button>
        <Button variant="outline">Button 2</Button>
      </ButtonGroup>
    )
    
    const group = container.querySelector('[role="group"]')
    expect(group).toHaveClass("flex-row")
  })

  it("renders vertical orientation", () => {
    const { container } = render(
      <ButtonGroup orientation="vertical">
        <Button variant="outline">Button 1</Button>
        <Button variant="outline">Button 2</Button>
      </ButtonGroup>
    )
    
    const group = container.querySelector('[role="group"]')
    expect(group).toHaveClass("flex-col")
  })

  it("supports nested button groups", () => {
    const { container } = render(
      <ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Button 1</Button>
          <Button variant="outline">Button 2</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Button 3</Button>
          <Button variant="outline">Button 4</Button>
        </ButtonGroup>
      </ButtonGroup>
    )
    
    const groups = container.querySelectorAll('[role="group"]')
    expect(groups.length).toBe(3) // 1 parent + 2 nested
  })

  it("works with different button variants", () => {
    render(
      <ButtonGroup>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </ButtonGroup>
    )
    
    expect(screen.getByText("Primary")).toBeInTheDocument()
    expect(screen.getByText("Secondary")).toBeInTheDocument()
    expect(screen.getByText("Outline")).toBeInTheDocument()
  })

  it("works with different button sizes", () => {
    render(
      <ButtonGroup>
        <Button variant="outline" size="sm">Small</Button>
        <Button variant="outline">Default</Button>
        <Button variant="outline" size="lg">Large</Button>
      </ButtonGroup>
    )
    
    expect(screen.getByText("Small")).toBeInTheDocument()
    expect(screen.getByText("Default")).toBeInTheDocument()
    expect(screen.getByText("Large")).toBeInTheDocument()
  })

  it("supports disabled buttons", () => {
    render(
      <ButtonGroup>
        <Button variant="outline">Enabled</Button>
        <Button variant="outline" disabled>Disabled</Button>
      </ButtonGroup>
    )
    
    expect(screen.getByText("Enabled")).not.toBeDisabled()
    expect(screen.getByText("Disabled")).toBeDisabled()
  })

  it("supports custom className", () => {
    const { container } = render(
      <ButtonGroup className="custom-class">
        <Button variant="outline">Button</Button>
      </ButtonGroup>
    )
    
    const group = container.querySelector('[role="group"]')
    expect(group).toHaveClass("custom-class")
  })
})
