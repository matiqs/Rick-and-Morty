import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import LocationCard from "./LocationCard";

test("renders content", () => {
  const location = {
    id: 1,
    name: "Earth (C-137)",
    dimension: "Dimension C-137",
    type: "Planet",
    residents: [],
  };

  const component = render(<LocationCard location={location} />);

  component.getAllByText("Earth (C-137)");
  component.getAllByText("Dimension C-137");
  component.getAllByText("Planet");
});
