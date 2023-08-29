import { PageHeader } from ".";
import { render, screen, fireEvent } from "@testing-library/react";

test("that src carries the correct value", ()=> {
  render(<PageHeader />);
  const image = document.querySelector("img") as HTMLImageElement;
  expect(image.src).toContain("http://localhost/_next/image?url=%2Flogo.png&w=256&q=75");
})

test("that alt carries the correct value", () => {
  render(<PageHeader />);
  const image = document.querySelector("img") as HTMLImageElement;
  expect(image.alt).toContain("Logo");
})

test("contact button to have attribute value /contact", () => {
  render(<PageHeader />);
  const contactBttn = screen.getByRole("link", { name: "Let’s Talk"});
  expect(contactBttn.getAttribute('href')).toBe('/contact');
});

test("contact link to have attribute value /contact", () => {
  render(<PageHeader />);
  const contactBttn = screen.getByRole("link", { name: "contact"});
  expect(contactBttn.getAttribute('href')).toBe('/contact');
});

test("blog link to have attribute value /blog", () => {
  render(<PageHeader />);
  const contactBttn = screen.getByRole("link", { name: "blog"});
  expect(contactBttn.getAttribute('href')).toBe('/blog');
});

test("works link to have attribute value /works", () => {
  render(<PageHeader />);
  const contactBttn = screen.getByRole("link", { name: "works"});
  expect(contactBttn.getAttribute('href')).toBe('/works');
});

