import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    // Arrange
    render(<CheckoutForm/>)

});

test("shows success message on submit with form details", () => {
    // Act
    const firstName = screen.getByLabelText(/firstName:/i);
    userEvent.type(firstName, 'Brandi');

    const lastName = screen.getByLabelText(/lastName:/i);
    userEvent.type(lastName, 'Ball');

    const address = screen.getByLabelText(/address:/i);
    userEvent.type(address, 'none of your business');

    const city = screen.getByLabelText(/city:/i);
    userEvent.type(city, 'Indianapolis');

    const state = screen.getByLabelText(/state:/i);
    userEvent.type(state, 'Indiana');

    const zip = screen.getByLabelText(/zip:/i);
    userEvent.type(zip, '46250');

    const button = screen.getByRole('button');
    userEvent.click(button);

    //Assert

});
