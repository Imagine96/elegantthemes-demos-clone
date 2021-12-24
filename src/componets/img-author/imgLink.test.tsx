import React from "react";
import { render, screen } from "@testing-library/react";
import ImgLink from "./imgLink";

describe("imgLink component", () => {
  const byLink = "byLink";
  const onLink = "onLink";
  const text = "text";
  render( <ImgLink byLink={byLink} onLink={onLink} text={text} /> )

  it("renders the links", () => {
      const links = screen.getAllByRole('link')
      expect(links).toHaveLength(2)  
  });
});
