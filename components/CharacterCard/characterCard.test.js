import { render } from "@testing-library/react";
import CharacterCard from "./CharacterCard";

const testData = {
  image: "/url",
  name: "Rick",
  specie: "Human",
};

test("CharacterCard does not receive data", () => {
  const component = render(<CharacterCard />);
  expect(component.container.querySelector("h4").textContent).toBe("Loading");
});

test("CharacterCard testing failed", () => {
  const component = render(<CharacterCard character={testData} />);
  expect(component.container.querySelector("h2").textContent).toBe("Rick");
});
