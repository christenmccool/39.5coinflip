import { render, fireEvent } from '@testing-library/react';
import Board from './Board';

beforeEach(function() {
  jest
    .spyOn(Math, "random")
    .mockReturnValueOnce(0.25)
    .mockReturnValueOnce(0.75);
});

afterEach(function() {
  Math.random.mockRestore();
});

test("renders without crashing", () => {
  render(<Board />)
})

test("matches snapshot", () => {
  const {asFragment} = render(<Board />);
  expect(asFragment()).toMatchSnapshot();
})

test("no coin image on load", () => {
  const { queryByAltText, debug } = render(<Board />);

  expect(queryByAltText('tails')).not.toBeInTheDocument();
  expect(queryByAltText('heads')).not.toBeInTheDocument();
  // debug();
})

test("coin image on first button click", () => {
  const { getByText, queryByAltText, debug } = render(<Board />);

  const btn = getByText("Flip a coin");

  fireEvent.click(btn);
  expect(queryByAltText('tails')).toBeInTheDocument();
  // debug();
})

test("coin image change on second button click", () => {
  const { getByText, queryByAltText, debug } = render(<Board />);

  const btn = getByText("Flip a coin");

  fireEvent.click(btn);
  fireEvent.click(btn);

  expect(queryByAltText('tails')).not.toBeInTheDocument();
  expect(queryByAltText('heads')).toBeInTheDocument();

  // debug();
})

test("initial counts are zero", () => {
  const { getByText, debug } = render(<Board />);

  expect(getByText('Out of 0 flips, there have been 0 heads and 0 tails.')).toBeInTheDocument();
})

test("count updates on first click", () => {
  const { getByText, debug } = render(<Board />);

  const btn = getByText("Flip a coin");

  fireEvent.click(btn);

  expect(getByText('Out of 1 flips, there have been 0 heads and 1 tails.')).toBeInTheDocument();
})

test("count updates on second click", () => {
  const { getByText, debug } = render(<Board />);

  const btn = getByText("Flip a coin");

  fireEvent.click(btn);
  fireEvent.click(btn);

  expect(getByText('Out of 2 flips, there have been 1 heads and 1 tails.')).toBeInTheDocument();
})