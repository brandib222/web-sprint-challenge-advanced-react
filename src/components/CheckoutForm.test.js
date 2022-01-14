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

test("shows success message on submit with form details", async () => {

    // Arrange
    render(<CheckoutForm/>);

    // Act
   
   /* 
   
   const firstName = screen.getByLabelText(/firstName:/i);
    userEvent.type(firstName, 'Brandi'); 
    
    */

    //Assert
    /* 
    
    waitFor(async () => {
        const success = screen.getByTestId('successMessage');
        expect(success).toBeInTheDocument();
    }); 
    
    */

    // *********** PLEASE TELL ME WHAT I AM DOING WRONG **************
});
