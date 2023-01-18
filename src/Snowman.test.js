import { render, fireEvent} from "@testing-library/react";
import Snowman from "./Snowman";

//either fire event 6 times or set maxWrong to 0?
it("should show 'you lose' msg if 6 wrong guesses", function(){
  const { container } = render(<Snowman maxWrong={0} />);
  expect(container.querySelector(".Snowman-letters")).not.toBeInTheDocument();
  expect(container.querySelector(".lose-msg")).toBeInTheDocument();
})

it("matches snapshot", function(){
  const { container } = render(<Snowman />);
  expect(container).toMatchSnapshot();
})