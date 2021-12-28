import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./card";

describe("Card component", () => {
  const img = "img";
  const text = "text";
  const header = "header";
  const alt = "alt";
  render(<Card img={img} text={text} header={header} alt={alt} />);
  it("renders the img wiht the propper alt", () => {
    const imageOnDoc = screen.getByAltText(alt);
    expect(imageOnDoc).toBeInTheDocument();
  });
});
