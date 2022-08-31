import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App";
import { citiesOptions } from "./utils";

describe("render all elements in Home Page", () => {
    test("renders WEATHER", () => {
        render(<App />);

        const titleElement = screen.getByText(/WEATHER/i);

        expect(titleElement.innerHTML.toUpperCase()).toEqual("WEATHER");
    });

    test("renders Select a city", () => {
        render(<App />);

        const subtitleElement = screen.getByText(/Select a city/i);

        expect(subtitleElement.innerHTML).toEqual("Select a city");
    });

    test("get all city name and validate elements are links", () => {
        const { container } = render(<App />);

        const linkElements = container.getElementsByClassName(
            "cities-container-city"
        );

        const response = Boolean(
            citiesOptions
                .map(
                    (objectCity) =>
                        [...linkElements].find(
                            (element) => objectCity.city === element.innerHTML
                        ).innerHTML === objectCity.city
                )
                .find((boolean) => boolean === false)
        );

        expect(response).toBeFalsy();
    });

    test("renders a city with a link redirecting to its name route", () => {
        render(<App />);

        expect(
            screen.getByText(citiesOptions[0].city).closest("a")
        ).toHaveAttribute("href", `/${citiesOptions[0].city}`);

        expect(
            screen.getByText(citiesOptions[4].city).closest("a")
        ).toHaveAttribute("href", `/${citiesOptions[4].city}`);
    });
});
