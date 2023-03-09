import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Country from "../pages/Country";
// import axios from "axios";

describe("Country",()=>
{
    test('should return data for India', async() => {
      const res = await fetch('https://restcountries.com/v2/name/Pakistan?fullText=true');
      const data = await res.json();
      expect(data[0].name).toBe('Pakistan')
    })

  test("should find button by testId",()=>
  {
    render(
      <Router>
        <Country/>
      </Router>
    );
    let testId="submitButton";
    const submitButton=screen.getByTestId(testId);
    expect(submitButton).toBeTruthy();
  });

  test('should find the button title', () => {
    render(
      <Router>
        <Country />
      </Router>
    );
    const text = 'Country Capital';
    const foundText = screen.getAllByText(text);
    expect(foundText).toBeTruthy();
  });
})

/*
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import MyComponent from './MyComponent';

jest.mock('axios');

describe('MyComponent', () => {
  it('fetches data from API', async () => {
    const responseData = { data: [{ id: 1, name: 'John' }] };
    axios.get.mockResolvedValue(responseData);

    const { getByTestId } = render(<MyComponent />);

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

    const listElement = getByTestId('list');
    expect(listElement.children).toHaveLength(1);
    expect(listElement.children[0]).toHaveTextContent('John');
  });
});
*/