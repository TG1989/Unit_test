import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//Button Test

test('When we click on the button, the color and text change', () => {
  //The component to be tested is displayed on the screen
  render(<App />)

  //Call the button to be tested
  const button = screen.getByRole("button")

  //1. The button color is red
  expect(button).toHaveStyle({ background: "red" })

  //2.Inside the button it says "Turn to blue"
  expect(button).toHaveTextContent("Turn Blue")

  //3.The button is clicked
  fireEvent.click(button)

  //The color of the button turns blue
  expect(button).toHaveStyle({ background: "blue" })


  //Inside the button it says "Turn to red"
  expect(button).toHaveTextContent("Turn Red")


})
