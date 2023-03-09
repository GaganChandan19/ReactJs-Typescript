import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Country from "../pages/Country";
import Weather from "../pages/Weather";

describe("Country",()=>
{
    test('should return data for capital weather', async() => {
      const res = await fetch('http://api.weatherstack.com/current?access_key=68f83f417142a947f0a6b9f6f1f427d8&query=New Delhi');
      const data = await res.json();
      expect(data.current);
    })
})