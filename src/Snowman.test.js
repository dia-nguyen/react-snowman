import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

//either fire event 6 times or set maxWrong to 0?
it("should show 'you lose' msg and disable letter buttons if wrong guesses exceeded.", function () {
  const { container } = render(<Snowman maxWrong={0} />);

  const wrongLetter = container.querySelector("button[value='b']");
  fireEvent.click(wrongLetter);

  expect(container.querySelector(".Snowman-letters")).not.toBeInTheDocument();
  expect(container.querySelector(".Snowman-lose-msg")).toBeInTheDocument();
});

it("matches snapshot", function () {
  const { container } = render(<Snowman />);
  expect(container).toMatchSnapshot();
});
