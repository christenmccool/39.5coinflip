import { render, fireEvent } from '@testing-library/react';
import Coin from './Coin';

test("renders without crashing", () => {
  render(<Coin />)
})

test("matches snapshot", () => {
  const {asFragment} = render(<Coin />);
  expect(asFragment()).toMatchSnapshot();
})