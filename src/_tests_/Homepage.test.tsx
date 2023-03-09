import { render, screen } from "@testing-library/react";
import Homepage from "../pages/Homepage";
import { BrowserRouter as Router } from "react-router-dom";

describe("Homepage",()=>
{
  test("should find button by testId",()=>
  {
    render(
      <Router>
        <Homepage />
      </Router>
    );
    let testId="submitButton";
    const submitButton=screen.getByTestId(testId);
    expect(submitButton).toBeTruthy();
  });
  test('should find the input feild via testId', () => {
    render(
      <Router>
        <Homepage />
      </Router>
    );
    const testId = 'inputFeild';
    const foundInputFeild = screen.getByTestId(testId);
    expect(foundInputFeild).toBeTruthy();
  });
  test('should find the button title', () => {
    render(
      <Router>
        <Homepage />
      </Router>
    );
    const text = 'Submit';
    const foundText = screen.getAllByText(text);
    expect(foundText).toBeTruthy();
  });
})

