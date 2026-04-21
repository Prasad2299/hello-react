import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test('should load a contact component', () => { 
    render(<Contact/>)
    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument()
 })

test("should load button of Contact Component",()=>{
  render(<Contact/>)
  const button = screen.getByRole("button")
  expect(button).toBeInTheDocument()
})

test("should load button of Contact Component",()=>{
  render(<Contact/>)
  const button = screen.getByText("Submit")
  expect(button).toBeInTheDocument()
})

test("should load inputName of Contact Component",()=>{
  render(<Contact/>)
  const inputName = screen.getByPlaceholderText("name")
  expect(inputName).toBeInTheDocument()
})

test("should load multiple input boxes of Contact Component",()=>{
  render(<Contact/>)
  const inputBoxes = screen.getAllByRole("textbox")
  expect(inputBoxes.length).toBe(2)
})